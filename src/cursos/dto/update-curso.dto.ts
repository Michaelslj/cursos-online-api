import { IsOptional, IsString } from 'class-validator';

export class UpdateCursoDto {

  @IsString()
  @IsOptional()
    codigo: number;
  
    @IsString()
    @IsOptional()
    titulo: string;
  
    @IsString()
    @IsOptional()
    subtitulo: string;
  
    @IsString()
    @IsOptional()
    descripcion: string;
  
    @IsString()
    @IsOptional()
    nivel: number;
  
    @IsString()
    @IsOptional()
    duracionHoras: number;
  
    @IsString()
    @IsOptional()
    costo: number;
  
    @IsString()
    @IsOptional()
    modalidad: string;
  
    @IsString()
    @IsOptional()
    fechaInicio: Date;
  
    @IsString()
    @IsOptional()
    estado: string;
}
