import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExampleEntity } from '../@entites/example/example.entity';
import { ExampleController } from './example.controller';
import { ExampleService } from './example.service';

@Module({
    imports: [TypeOrmModule.forFeature([ExampleEntity])],
    controllers: [ExampleController],
    providers: [ExampleService],
})
export class ExampleModule {}
