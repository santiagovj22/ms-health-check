import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppRoutes } from 'infrastructure/application/nestjs/app.route';
import { HealthModule } from 'infrastructure/application/nestjs/module/health/health.module';

const APP_MODULES = [HealthModule];

@Module({
  imports: [
    AppRoutes,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ...APP_MODULES,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
