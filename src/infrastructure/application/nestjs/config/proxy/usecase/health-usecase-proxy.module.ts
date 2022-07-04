import { DynamicModule } from '@nestjs/common';
import { HealthFinderUsecase } from 'usecase/health/health-finder.usecase';
import { HealthEntrypoint } from 'adapter/entrypoint/health/health.entrypoint';

export class HealthUseCaseProxyModule {
  static HEALTH_FINDER_USE_CASE_PROXY = 'HealthFinderUseCaseProxy';
  static HEALTH_ENTRYPOINT_PROXY = 'HealthEntrypointProxy';

  static register(): DynamicModule {
    return {
      module: HealthUseCaseProxyModule,
      providers: [
        {
          inject: [],
          provide: HealthUseCaseProxyModule.HEALTH_FINDER_USE_CASE_PROXY,
          useFactory: () => new HealthFinderUsecase(),
        },
        {
          inject: [HealthUseCaseProxyModule.HEALTH_FINDER_USE_CASE_PROXY],
          provide: HealthUseCaseProxyModule.HEALTH_ENTRYPOINT_PROXY,
          useFactory: (healthFinderUsecase: HealthFinderUsecase) => new HealthEntrypoint(healthFinderUsecase),
        },
      ],
      imports: [],
      exports: [HealthUseCaseProxyModule.HEALTH_ENTRYPOINT_PROXY],
    };
  }
}
