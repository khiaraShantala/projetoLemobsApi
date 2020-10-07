import {  Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EnderecoRepository } from './endereco.repository';
import {EnderecoDto} from './dto/endereco.dto';



@Injectable()
export class EnderecoService { constructor(
  @InjectRepository(EnderecoRepository)
    private enderecoRepository: EnderecoRepository,
  ) {}


 async getAllEndereco() {
    return await this.enderecoRepository.find()
  }

  async getEnderecoBairro(bairro: string){
    return await this.enderecoRepository.find( {where: {bairro}} );
  }

  async createEndereco(enderecoDto: EnderecoDto) {

    const endereco = this.enderecoRepository.create(enderecoDto);
    await this.enderecoRepository.save(enderecoDto);
    return enderecoDto;
  }
  
}
