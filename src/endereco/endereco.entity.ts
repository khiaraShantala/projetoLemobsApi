import { Aluno } from 'src/aluno/aluno.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Endereco{
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column({nullable: false, type: 'varchar', length: 50})
    rua: string;

    @Column({ type: 'varchar', length: 50})
    numero: string;

    @Column({ type: 'varchar', length: 50})
    complemento: string;

    @Column({nullable: false, type: 'varchar', length: 50})
    bairro: string;

    @Column()
    idAluno: number;

    @ManyToOne(type => Aluno, (aluno: Aluno) => aluno.enderecos)
    aluno: Aluno;

}