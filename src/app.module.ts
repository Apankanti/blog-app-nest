import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './models/User/user.model';
import { Follow } from './models/Follow/follow.model';
import { BlogModule } from './api/Blog/blog.module'; // Import BlogModule

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'BlogData',
      models: [User, Follow],
    }),
    BlogModule, // Use BlogModule here
  ],
})
export class AppModule { }
