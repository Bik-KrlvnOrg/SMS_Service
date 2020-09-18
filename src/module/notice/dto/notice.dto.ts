import { IsNotEmpty, IsNumber, IsOptional } from "class-validator"

export class NoticeDto {
    @IsOptional()
    @IsNumber()
    id: number

    @IsNotEmpty()
    title: string

    @IsNotEmpty()
    message: string
    
    @IsNotEmpty()
    subject: string
}