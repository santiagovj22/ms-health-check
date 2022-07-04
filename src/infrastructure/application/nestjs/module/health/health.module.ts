import { Module } from '@nestjs/common';
import { HealthUseCaseProxyModule } from 'infrastructure/application/nestjs/config/proxy/usecase/health-usecase-proxy.module';
import { HealthController } from 'infrastructure/application/nestjs/module/health/controller/health.controller';

@Module({
  imports: [HealthUseCaseProxyModule.register()],
  providers: [HealthController],
  exports: [HealthController],
  controllers: [HealthController],
})
export class HealthModule {}
