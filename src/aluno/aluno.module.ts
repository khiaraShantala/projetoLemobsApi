import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlunoRepository } from './aluno.repository';
import { AlunoController } from './aluno.controller';
import {AlunoService} from './aluno.service';



@Module({
    imports: [TypeOrmModule.forFeature([AlunoRepository])],
    controllers: [AlunoController], providers: [AlunoService],
})
export class AlunoModule {}
