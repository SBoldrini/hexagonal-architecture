import Foo from 'src/domain/entities/foo.entity';
import CreateFooDto from '../dto/create-foo.dto';
import { FooExternalServicePort } from 'src/domain/ports/foo.external-service.ports';

export class FooUseCase {
  constructor(private readonly fooExternalService: FooExternalServicePort) {}

  async create(createFooDto: CreateFooDto) {
    const foo = new Foo(createFooDto.name, createFooDto.description);
    return this.fooExternalService.create(foo);
  }

  async findById(id: string) {
    return this.fooExternalService.findById(id);
  }
}
