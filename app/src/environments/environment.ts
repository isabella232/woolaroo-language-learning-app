import { mergeConfigurations } from "util/config";
import { environment as baseEnvironment } from './environment.base';

export const environment =  mergeConfigurations(baseEnvironment, {
  production: false,
  google: {
    vision: {
      apiKey: '<GOOGLE_API_KEY>'
    }
  }
});
