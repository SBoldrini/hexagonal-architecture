import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import CreateFooDto from 'src/application/dto/create-foo.dto';
import { FooUseCase } from 'src/application/use-cases/foo.use-case';

@Controller('foo')
export class FooController {
  constructor(private readonly fooUseCase: FooUseCase) {}

  @Post()
  async create(@Body() createFooDto: CreateFooDto) {
    return this.fooUseCase.create(createFooDto);
  }

  @Get()
  async findById(@Param('id') id: string) {
    return this.fooUseCase.findById(id);
  }
}
