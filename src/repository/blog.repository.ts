

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateBlogRequestDto } from 'src/api/Blog/dtos/create.req.dto';
import { Blog } from 'src/models/Blog/blog.model';

@Injectable()
export class BlogRepository {
    constructor(
        @InjectModel(Blog)
        private readonly blogModel: typeof Blog,
    ) { }

    async createBlog(createBlogRequestDto: CreateBlogRequestDto): Promise<void> {
        try {
            await this.blogModel.create(createBlogRequestDto);
        } catch (error) {
            throw new Error('Blog creation failed');
        }
    }
}
