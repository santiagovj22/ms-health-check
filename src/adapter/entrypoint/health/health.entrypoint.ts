import { HealthResponseDto } from 'adapter/entrypoint/health/dto/output/health-response.dto';
import { HealthEntrypointMapper } from 'adapter/entrypoint/health/mapper/health-entrypoint.mapper';
import { HealthFinderUsecase } from 'usecase/health/health-finder.usecase';
import { HealthResponseModel } from 'domain/model/health/output/health-response.model';

export class HealthEntrypoint {
  constructor(private readonly healthFinderUsecase: HealthFinderUsecase) {}

  async get(): Promise<HealthResponseDto> {
    const response: HealthResponseModel = await this.healthFinderUsecase.execute();

    return HealthEntrypointMapper.toHealthResponse(response);
  }
}
