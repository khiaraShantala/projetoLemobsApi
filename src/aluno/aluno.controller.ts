import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import{ AlunoService} from './aluno.service';
import {AlunoDto} from './dto/aluno.dto';


@Controller('aluno')
export class AlunoController {

    constructor(
        private readonly alunoService: AlunoService,){
    }
    
    @Get()
    getAllAlunos() {
        return this.alunoService.getAllAlunos();
    }

    @Get('media')
    getAlunoMedia(){
        return this.alunoService.getAlunoMedia();
    }

    @Get(':id')
    getAlunoId(@Param('id') id:number) {
        return this.alunoService.getAlunoId(id);
    }

    @Get(':id/endereco')
    getEnderecoAluno(@Param('id') id:number){
        return this.alunoService.getEnderecoAluno(id);
    }

    @Get(':nota/:criterio')
    getAlunoCriterio(@Param('nota') nota: number, @Param('criterio') criterio:string){
        return this.alunoService.getNotaCriterio(nota,criterio);
    }

    @Post()
    createAluno(@Body() aluno: AlunoDto) {
         return this.alunoService.createAluno(aluno);
    }

    @Put(':id')
    updateAluno(@Param('id') id:number, @Body() data: Partial<AlunoDto>) {
        return this.alunoService.updateAluno(id, data);
    }

    @Delete(':id')
    deleteAluno(@Param('id') id:number){
        return this.alunoService.deleteAluno(id);
    }


}
