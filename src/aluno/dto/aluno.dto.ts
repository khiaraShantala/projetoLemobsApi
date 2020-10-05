import { } from '@nestjs/swagger';
import { EnderecoDto } from 'src/endereco/dto/endereco.dto';

export class AlunoDto {

    readonly nome: string;

    readonly dataNascimento: string;

    readonly cpf: string;

    readonly nota: number;

    readonly enderecos: EnderecoDto[];

}