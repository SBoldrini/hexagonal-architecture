import { Module } from '@nestjs/common';
import { SharedModule } from './modules/_shared/_shared.module';
import { HttpModule } from '@nestjs/axios';
import { FooController } from './infrastructure/controllers/foo.controller';
import { FooClientAdapter } from './infrastructure/adapters/external-clients/foo-client.adapter';
import { FooUseCase } from './application/use-cases/foo.use-case';

@Module({
  imports: [HttpModule, SharedModule],
  controllers: [FooController],
  providers: [
    {
      provide: 'FooExternalServicePort',
      useClass: FooClientAdapter,
    },
    {
      provide: FooUseCase,
      useFactory: (fooClientAdapter: FooClientAdapter) => {
        return new FooUseCase(fooClientAdapter);
      },
      inject: ['FooExternalServicePort'],
    },
  ],
})
export class AppModule {}
