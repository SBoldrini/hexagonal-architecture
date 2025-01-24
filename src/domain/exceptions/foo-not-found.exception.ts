/**
 * Define a domain exception to handle cases where a foo does not exist.
 */
class FooNotFoundException extends Error {
  constructor(fooId: string) {
    super(`Foo with ID ${fooId} not found`);
  }
}

export default FooNotFoundException;
