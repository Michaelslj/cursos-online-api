import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cursos')
export class Curso {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  codigo: number;

  @Column()
  titulo: string;

  @Column()
  subtitulo: string;

  @Column()
  descripcion: string;

  @Column()
  nivel: number;

  @Column()
  duracionHoras: number;

  @Column()
  costo: number;

  @Column()
  modalidad: string;

  @Column()
  fechaInicio: Date;

  @Column()
  estado: string;
}
