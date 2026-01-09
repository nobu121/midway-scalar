import { ALL, Config, MidwayConfig, Provide } from '@midwayjs/core';
import { ScalarConfig } from '../interface';

@Provide()
export class ScalarService {
  @Config(ALL)
  config: MidwayConfig;

  async render() {
    const swaggerPath = this.config.swagger?.swaggerPath || '/swagger-ui';
    const specUrl = `${swaggerPath}/index.json`;
    const scalarConfig = this.config.scalar as ScalarConfig;

    const config = {
      url: specUrl,
      ...scalarConfig,
    };

    return `<!DOCTYPE html>
<html>
  <head>
    <title>Scalar API Reference</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>
  <body>
    <div id="app"></div>
    <script src="https://cdn.jsdelivr.net/npm/@scalar/api-reference"></script>
    <script>
      Scalar.createApiReference('#app', ${JSON.stringify(config)});
    </script>
  </body>
</html>`;
  }
}
