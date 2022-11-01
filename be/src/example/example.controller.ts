import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
} from '@nestjs/common';
import { ExampleDto } from './dto/example.dto';
import { ExampleService } from './example.service';
import { ExampleRo } from './ro/example.ro';

@Controller('example')
export class ExampleController {
    constructor(private readonly exampleService: ExampleService) {}

    @Get()
    findAll(): Promise<ExampleRo[]> {
        return this.exampleService.findAll();
    }

    @Get(':id')
    get(@Param('id') id: string) {
        return this.exampleService.findOne(id);
    }

    @Post()
    create(@Body() dto: ExampleDto[]) {
        return this.exampleService.create(dto);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() dto: ExampleDto) {
        return this.exampleService.update(id, dto);
    }

    @Delete(':id')
    deleteUser(@Param() params) {
        return this.exampleService.delete(params.id);
    }
}
