import { HealthResponseModel } from 'domain/model/health/output/health-response.model';
import { HealthResponseDto } from 'adapter/entrypoint/health/dto/output/health-response.dto';

export class HealthEntrypointMapper {
  static toHealthResponse(data: HealthResponseModel): HealthResponseDto {
    return {
      status: data.status,
      app_name: data.appName,
      app_version: data.appVersion,
    };
  }
}
