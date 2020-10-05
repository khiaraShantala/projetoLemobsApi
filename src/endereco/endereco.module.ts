import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnderecoRepository } from './endereco.repository';
import { EnderecoService } from './endereco.service';
import { EnderecoController } from './endereco.controller';


@Module({
    imports: [TypeOrmModule.forFeature([EnderecoRepository])],
    providers: [EnderecoService],
    controllers: [EnderecoController],
})
export class EnderecoModule {}
