import { ExampleEntity } from './../@entites/example/example.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { ExampleDto } from './dto/example.dto';
import { ExampleRo } from './ro/example.ro';

@Injectable()
export class ExampleService {
    constructor(
        @InjectRepository(ExampleEntity)
        private readonly exampleRepo: Repository<ExampleEntity>,
    ) {}

    async findAll(): Promise<ExampleRo[]> {
        const result = await this.exampleRepo.find();
        return plainToClass(ExampleRo, result, {
            excludeExtraneousValues: true,
        });
    }

    async findOne(id: string): Promise<ExampleRo> {
        const result = await this.exampleRepo.findOne({ where: { id } });
        return plainToClass(ExampleRo, result, {
            excludeExtraneousValues: true,
        });
    }

    async create(dto: ExampleDto[]): Promise<ExampleEntity[]> {
        const example = this.exampleRepo.create(dto);
        return await this.exampleRepo.save(example);
    }

    async update(id: string, dto: ExampleDto): Promise<UpdateResult> {
        return await this.exampleRepo.update(id, dto);
    }

    async delete(id): Promise<DeleteResult> {
        return await this.exampleRepo.delete(id);
    }
}
