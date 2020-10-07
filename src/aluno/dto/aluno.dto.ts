import { } from '@nestjs/swagger';

export class AlunoDto {

    readonly nome: string;
    readonly dataNascimento: Date;
    readonly cpf: string;
    readonly nota: number;


}