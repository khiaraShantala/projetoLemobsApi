import { Body, Controller, Get, Post } from '@nestjs/common';
import { EnderecoDto } from './dto/endereco.dto';
import { EnderecoService } from './endereco.service';

@Controller('endereco')
export class EnderecoController {
    constructor(private readonly enderecoService: EnderecoService){
    }
    
    @Get()
    getAllAlunos() {
        return this.enderecoService.getAllEndereco();
    }

    @Post()
    createEndereco(@Body() endereco: EnderecoDto) {
        return this.enderecoService.createEndereco(endereco);
    }
}
