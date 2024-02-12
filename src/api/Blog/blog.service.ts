import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Blog } from 'src/models/Blog/blog.model';
import { CreateBlogRequestDto } from './dtos/create.req.dto';

@Injectable()
export class BlogService {
    constructor(@InjectModel(Blog) private blogModel: typeof Blog) { }

    async createBlog(createBlogRequestDto: CreateBlogRequestDto): Promise<void> {
        try {
            await this.blogModel.create(createBlogRequestDto);
        } catch (error) {
            throw new Error('Blog creation failed!');
        }
    }
}
