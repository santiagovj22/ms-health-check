import { Routes, RouterModule } from 'nest-router';
import { Module } from '@nestjs/common';
import { HealthModule } from 'infrastructure/application/nestjs/module/health/health.module';

const ROUTES: Routes = [
  {
    path: 'health',
    module: HealthModule,
  },
];

@Module({
  imports: [RouterModule.forRoutes(ROUTES)],
  exports: [RouterModule],
})
export class AppRoutes {}