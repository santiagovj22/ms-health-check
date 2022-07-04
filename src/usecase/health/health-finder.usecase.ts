import { name as appName, version as appVersion } from '../../../package.json';

import { HealthResponseModel } from 'domain/model/health/output/health-response.model';

export class HealthFinderUsecase {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  async execute(): Promise<HealthResponseModel> {
    const health: HealthResponseModel = {
      status: 'Up',
      appName,
      appVersion,
    };

    return health;
  }
}
