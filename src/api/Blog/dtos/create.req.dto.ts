// create-blog.dto.ts

import { IsString, IsNotEmpty, MaxLength } from 'class-validator';

export class CreateBlogRequestDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(255)
    title: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(1000)
    textBody: string;

    @IsString()
    userId?: string;
}

export class SuccessResponseDto {
    success: boolean;
}
