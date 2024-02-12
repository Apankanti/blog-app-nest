import { Body, Controller, Post } from '@nestjs/common';
import { BlogService } from './blog.service';
import { CreateBlogRequestDto } from './dtos/create.req.dto';

@Controller('blogs')
export class BlogController {
    constructor(private readonly blogService: BlogService) { }

    @Post()
    async createBlog(
        @Body() createBlogDto: CreateBlogRequestDto,
    ): Promise<{ message: string }> {
        try {
            await this.blogService.createBlog(createBlogDto);
            return { message: 'Blog successfully created!' };
        } catch (error) {
            // Log the error for debugging purposes
            console.error('Error creating blog:', error);
            // Rethrow the error to maintain error propagation
            throw error;
        }
    }
}
