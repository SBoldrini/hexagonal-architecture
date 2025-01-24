import Foo from '../entities/foo.entity';
import FooNotFoundException from '../exceptions/foo-not-found.exception';
import { FooExternalServicePort } from '../ports/foo.external-service.ports';

/**
 * A standalone service can be managed if a complex business rule needs to be
 * handled, or all the logic can be worked on in the use case directly.
 */
export class UserService {
  constructor(private readonly userExternalService: FooExternalServicePort) {}

  async getFooOrThrow({ id, name }: Foo): Promise<Foo> {
    const foo = await this.userExternalService.update({ id, name });
    if (!foo) {
      throw new FooNotFoundException(id);
    }
    return foo;
  }

  // Ejemplo de otra operación de dominio
  async updateFooName(id: string, newName: string): Promise<Foo> {
    const foo = await this.getFooOrThrow({ id, name: newName });
    foo.name = newName;
    // You could add business validations here
    // And then call an "updateUser" method (if it existed) in the port
    return foo;
  }
}
