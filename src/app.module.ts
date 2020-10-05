import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './configs/typeorm.config';
import { AlunoModule } from './aluno/aluno.module';
import { EnderecoModule } from './endereco/endereco.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), AlunoModule, EnderecoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}