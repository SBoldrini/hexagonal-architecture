import { HttpService } from '@nestjs/axios';
import Foo from 'src/domain/entities/foo.entity';
import { FooExternalServicePort } from 'src/domain/ports/foo.external-service.ports';
import { firstValueFrom } from 'rxjs';

export class FooClientAdapter implements FooExternalServicePort {
  private baseUrl = `${process.env.ENDPOINT_FOO_API}`;
  constructor(private readonly httpService: HttpService) {}
  async create(foo: Foo): Promise<Foo> {
    try {
      const response = await firstValueFrom(this.httpService.post('/foo', foo));
      const data = response.data;
      return new Foo(data.id, data.name, data.description);
    } catch (error) {
      throw new Error(`Error creating foo: ${error}`);
    }
  }

  async findById(id: string): Promise<Foo> {
    try {
      const response = await firstValueFrom(
        this.httpService.get(`${this.baseUrl}/${id}`),
      );
      const data = response.data;
      return new Foo(data.id, data.name, data.description);
    } catch (error) {
      throw new Error(`Error getting foo by id: ${error}`);
    }
  }

  findAll(): Promise<Foo[]> {
    throw new Error('Method not implemented.');
  }

  update(foo: Foo): Promise<Foo> {
    throw new Error(`Method not implemented: ${foo}`);
  }

  delete(id: string): Promise<void> {
    throw new Error(`Method not implemented: ${id}`);
  }
}

export default FooClientAdapter;
