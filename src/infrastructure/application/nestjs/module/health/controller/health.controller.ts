import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { Controller, Get, HttpStatus, Inject, Res } from '@nestjs/common';
import { HealthRoutes } from 'infrastructure/application/nestjs/module/health/health.routes';
import { HealthUseCaseProxyModule } from 'infrastructure/application/nestjs/config/proxy/usecase/health-usecase-proxy.module';
import { HealthEntrypoint } from 'adapter/entrypoint/health/health.entrypoint';
import { HealthResponse } from 'infrastructure/application/nestjs/module/health/dto/health-response.dto';

@ApiTags('Health')
@Controller(HealthRoutes.root)
export class HealthController {
  constructor(
    @Inject(HealthUseCaseProxyModule.HEALTH_ENTRYPOINT_PROXY)
    private readonly healthEntrypoint: HealthEntrypoint,
  ) {}

  @Get()
  @ApiOkResponse({
    type: HealthResponse,
  })
  async getHealth(@Res() res: Response): Promise<Response<HealthResponse>> {
    const response = await this.healthEntrypoint.get();

    return res.status(HttpStatus.OK).json(response);
  }
}
