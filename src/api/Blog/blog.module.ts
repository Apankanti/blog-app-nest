import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { BlogService } from './blog.service';
import { BlogController } from './blog.controller';
import { Blog } from 'src/models/Blog/blog.model';
import { BlogRepository } from 'src/repository/blog.repository';

@Module({
    imports: [
        SequelizeModule.forFeature([Blog]), // Import the Blog model into the module
    ],
    controllers: [BlogController],
    providers: [
        BlogService,
        BlogRepository, // Provide BlogRepository here
    ],
})
export class BlogModule { }
