import { } from '@nestjs/swagger';

export class EnderecoDto {

    readonly rua: string;

    readonly numero: string;

    readonly complemento: string;

    readonly bairro: string;

    readonly alunoId: number;
}