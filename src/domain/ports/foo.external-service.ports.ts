import Foo from '../entities/foo.entity';

export interface FooExternalServicePort {
  create(foo: Foo): Promise<Foo>;
  findById(id: string): Promise<Foo>;
  findAll(): Promise<Foo[]>;
  update(foo: Foo): Promise<Foo>;
  delete(id: string): Promise<void>;
}
