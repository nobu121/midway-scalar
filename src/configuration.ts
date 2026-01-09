import { Configuration } from '@midwayjs/core';
import * as swagger from '@midwayjs/swagger';
import * as DefaultConfig from './config/config.default';

@Configuration({
  namespace: 'scalar',
  imports: [swagger],
  importConfigs: [
    {
      default: DefaultConfig,
    },
  ],
})
export class ScalarConfiguration {
  async onReady() {
    // TODO something
  }
}
