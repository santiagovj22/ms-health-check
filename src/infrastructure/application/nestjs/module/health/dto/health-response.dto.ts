import { HealthResponseDto } from 'adapter/entrypoint/health/dto/output/health-response.dto';

export class HealthResponse implements HealthResponseDto {
  status: string;
  app_name: string;
  app_version: string;
}
