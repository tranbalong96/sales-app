import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExampleController } from './example.controller';
import { TransactionRepository } from './example.repository';
import { ExampleService } from './example.service';

@Module({
  imports: [TypeOrmModule.forFeature([TransactionRepository])],
  controllers: [ExampleController],
  providers: [ExampleService],
})
export class ExampleModule {}
