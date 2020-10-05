import { EntityRepository, Repository } from 'typeorm';
import { Aluno } from './aluno.entity';

@EntityRepository(Aluno)
export class AlunoRepository extends Repository<Aluno> {}