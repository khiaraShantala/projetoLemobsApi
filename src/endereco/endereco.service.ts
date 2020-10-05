import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EnderecoRepository } from './endereco.repository';
import {EnderecoDto} from './dto/endereco.dto';



@Injectable()
export class EnderecoService { constructor(
  @InjectRepository(EnderecoRepository)
    private enderecoRepository: EnderecoRepository,
  ) {}


  async getAllEndereco() {
    return this.enderecoRepository.createQueryBuilder("endereco").groupBy("endereco.bairro");
  }

  async createEndereco(enderecoDto: EnderecoDto) {

    const endereco = this.enderecoRepository.create(enderecoDto);
    await this.enderecoRepository.save(enderecoDto);
    return enderecoDto;
  }
  
}
