import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository, } from '@nestjs/typeorm';
import {MoreThan, LessThan} from 'typeorm';
import { AlunoRepository } from './aluno.repository';
import {AlunoDto} from './dto/aluno.dto';



@Injectable()
export class AlunoService {

    constructor(
        @InjectRepository(AlunoRepository)
        private readonly alunoRepository: AlunoRepository,
    ) {}


    async getAllAlunos() {
        return await this.alunoRepository.find();
    }

    async createAluno(alunoDto: AlunoDto) {

        if(this.validaCpf(alunoDto.cpf)){
            let cpf = alunoDto.cpf.replace('.', '');
            cpf = cpf.replace('-', '');
            cpf = cpf.replace('.', '');

            const aluno = this.alunoRepository.create({
                nome: alunoDto.nome,
                dataNascimento: alunoDto.dataNascimento,
                cpf: cpf,
                nota: alunoDto.nota,

            });
            await this.alunoRepository.save(aluno);
            return aluno;
        }
        //fazer um erro decente para o formato do cpf
        else{
            throw new InternalServerErrorException('CPF invalido');
        }
        
    }

    async getAluno(nome: string) {
        return await this.alunoRepository.findOne( {where: {nome}} );
    }

    async getAlunoId(id: number) {
        return await this.alunoRepository.findOne( {where: {id}} );
    }

    async updateAluno(id: number, data: Partial<AlunoDto>) {
       return await this.alunoRepository.update(id, data);
    }

    async getEnderecosAluno(idAluno: number) {
        const aluno: AlunoDto = (await this.getAlunoId(idAluno))[0];
        return {
            total: aluno.enderecos.length,
            enderecos: aluno.enderecos,
        };
    }

    async getNotaCriterio(nota: number, criterio: string){
        if(criterio === '>'){
            return await this.alunoRepository.find({
                nota: MoreThan(nota),
            });
        }
        else if(criterio ==='<') {
            return await this.alunoRepository.find({
                nota: LessThan(nota),
            });
        }
        else {
            throw new InternalServerErrorException("os criterios são < e >");
        }

    }

    async getAlunoMedia(){
        let media = 0;
        let alunos: AlunoDto[]

        alunos.forEach(aluno => {
            media += aluno.nota
        });
        media/= alunos.length;

        return await this.alunoRepository.find({
            nota: MoreThan(media),
        });

    }
    
    private validaCpf(cpfAluno:string){
        
        let soma = 0;
        let resto = 0;
        let cpf = cpfAluno;
        cpf = cpf.replace('.', '');
        cpf = cpf.replace('-', '');
        cpf = cpf.replace('.', '');

        if (cpf == "00000000000"){
           return false;
        }
            
        for (let i = 1; i <= 9; i++){
            soma = soma + parseInt(cpf.substring(i-1, i)) * (11 - i); 
        }
        resto = (soma * 10) % 11;

        if ((resto == 10) || (resto == 11)){
            resto = 0;
        }

        if (resto != parseInt(cpf.substring(9, 10)) ){
            return false;  
        }
        soma=0;
        
        for (let i = 1; i <= 10; i++){
           soma = soma + parseInt(cpf.substring(i-1, i)) * (12 - i);
        }
        resto = (soma * 10) % 11;
        
        if ((resto == 10) || (resto == 11)){
            resto = 0;
        }
       
        if (resto != parseInt(cpf.substring(10, 11) ) ){
            return false;
        }
        return true;

    } 

    

}
