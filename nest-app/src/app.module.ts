import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { AttractionsModule } from './attractions/attractions.module';
import { DataSource } from 'typeorm';
import { Attraction } from './attractions/entities/attraction.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: 'C0m@nche',
      database: 'nest-db',
      entities: [Attraction],
      synchronize: true,
    }),
    AttractionsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
