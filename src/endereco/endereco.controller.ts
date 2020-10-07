import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { EnderecoDto } from './dto/endereco.dto';
import { EnderecoService } from './endereco.service';

@Controller('endereco')
export class EnderecoController {
    constructor(private readonly enderecoService: EnderecoService){
    }
    
    @Get()
    getAllEndereco(){
        return this.enderecoService.getAllEndereco();
    }
    
    @Get(':bairro')
    getEnderecoBairro(@Param('bairro') bairro:string) {
        return this.enderecoService.getEnderecoBairro(bairro);
    }

    @Post()
    createEndereco(@Body() endereco: EnderecoDto) {
        return this.enderecoService.createEndereco(endereco);
    }
}
