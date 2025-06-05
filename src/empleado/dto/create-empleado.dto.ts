import { IsString, IsEmail, IsNotEmpty, IsNumber, Min } from 'class-validator';

export class CreateEmpleadoDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  cargo: string;

  @IsNumber()
  @Min(0)
  salario: number;

  @IsNumber()
  departamentoId: number;
}
