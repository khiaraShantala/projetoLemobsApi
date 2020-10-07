import { } from '@nestjs/swagger';
import { ObjectID } from 'typeorm';

export class EnderecoDto {

    readonly rua: string;
    readonly numero: string;
    readonly complemento: string;
    readonly bairro: string;

    
}