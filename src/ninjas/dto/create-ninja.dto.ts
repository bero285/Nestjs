import { IsEnum, MinLength } from "@nestjs/class-validator";

export class CreateNinjaDto {
    @MinLength(3)
    name:string;
    type:string;

    @IsEnum(['sword', 'hatchet'],{message:"use correct weapon"})
    weapon:'sword' | 'hatchet';
}