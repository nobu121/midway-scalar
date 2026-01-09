export * from './dist/index';
import { ScalarConfig } from './src/interface';

declare module '@midwayjs/core/dist/interface' {
  interface MidwayConfig {
    scalar?: ScalarConfig;
  }
}
