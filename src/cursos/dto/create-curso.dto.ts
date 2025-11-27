import { IsString } from 'class-validator';

export class CreateCursoDto {
    @IsString()
    codigo: number;
  
    @IsString()
    titulo: string;
  
    @IsString()
    subtitulo: string;
  
    @IsString()
    descripcion: string;
  
    @IsString()
    nivel: number;
  
    @IsString()
    duracionHoras: number;
  
    @IsString()
    costo: number;
  
    @IsString()
    modalidad: string;
  
    @IsString()
    fechaInicio: Date;
  
    @IsString()
    estado: string;




}
