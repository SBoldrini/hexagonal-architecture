<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">

## Description

This project demonstrates the implementation of Hexagonal Architecture (also known as Ports and Adapters pattern) using NestJS framework. The architecture separates the application into distinct layers with clear boundaries and dependencies pointing inward.

### Hexagonal Architecture Overview

The project follows these key principles:

- **Domain Layer** (Core): Contains the business logic, entities, and business rules. It has no dependencies on external frameworks or infrastructure.

- **Application Layer**: Houses the use cases/application services that orchestrate the flow of data and coordinate the domain layer. It depends only on the domain layer.

- **Infrastructure Layer**: Contains all external concerns like controllers, database adapters, external service clients, etc. This layer implements the interfaces (ports) defined by the inner layers.

### Key Components

1. **Ports**: Interfaces that define how the application interacts with external systems
   - Input/Primary Ports: Used by external systems to interact with our application
   - Output/Secondary Ports: Used by our application to interact with external systems

2. **Adapters**: Concrete implementations of the ports
   - Primary Adapters: Controllers, API endpoints
   - Secondary Adapters: Database repositories, external service clients

3. **Use Cases**: Application-specific business rules that orchestrate the flow between ports and domain

### Benefits

- Clear separation of concerns
- Business logic isolation from external dependencies
- Easier testing through dependency inversion
- Flexible and maintainable codebase
- Swappable infrastructure components

The project structure reflects this architecture with dedicated folders for each layer, making it easy to navigate and maintain the codebase while ensuring architectural boundaries are respected.


## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Resources
- [Hexagonal Architecture (Ports and Adapters)](https://alistair.cockburn.us/hexagonal-architecture/) - Original article by Alistair Cockburn
- [NestJS Documentation](https://docs.nestjs.com/) - Framework documentation
- [TypeScript Documentation](https://www.typescriptlang.org/docs/) - Language documentation
- [Jest Testing Framework](https://jestjs.io/docs/getting-started) - Testing framework used in the project
- [Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html) - Related architectural pattern by Robert C. Martin


## Project structure

src
├── _shared
├── domain
│   ├── entities
│   │   └── user.entity.ts
│   ├── services
│   │   └── user.service.ts
│   ├── ports
│   │   └── user-external-service.port.ts
│   └── exceptions
│       └── user-not-found.exception.ts
├── application
│   ├── use-cases
│   │   └── create-user.use-case.ts
│   └── dto
│       └── create-user.dto.ts
├── infrastructure
│   ├── adapters
│   │   └── external-apis
│   │       └── user-api.adapter.ts
│   ├── controllers
│   │   └── user.controller.ts
│   └── config
│       └── external-service.config.ts
└── main.ts



## Support

