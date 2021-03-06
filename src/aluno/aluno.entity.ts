
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Endereco } from 'src/endereco/endereco.entity';

@Entity()
export class Aluno{
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column({nullable: false, type: 'varchar', length: 50})
    nome: string;

    @Column({nullable: false})
    dataNascimento: Date;

    @Column({nullable: false, length: 11, unique: true})
    cpf: string;

    @Column()
    nota: number;

    @OneToMany(() => Endereco, endereco=> endereco.aluno)
    enderecos: Endereco[];

   


}