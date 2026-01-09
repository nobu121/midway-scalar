# midway-scalar

Midway.js 组件，用于集成 Scalar API Reference，提供美观的 API 文档展示界面。

## 功能特性

- 集成 Scalar API Reference 到 Midway.js 应用
- 自动读取 Swagger 配置生成 API 文档
- 支持自定义 Scalar 配置选项
- 提供 `/scalar` 路由访问 API 文档

## 安装

```bash
npm install midway-scalar
# 或
pnpm add midway-scalar
```

## 使用

### 1. 配置组件

在 `src/configuration.ts` 中引入组件：

```typescript
import { Configuration } from '@midwayjs/core';
import * as scalar from 'midway-scalar';

@Configuration({
  imports: [scalar],
})
export class MainConfiguration {}
```

### 2. 配置 Scalar

在 `src/config/config.default.ts` 中配置：

```typescript
export default {
  swagger: {
    title: 'API 文档',
    description: 'API 接口文档',
    version: '1.0.0',
  },
  scalar: {
    theme: 'purple',
    darkMode: true,
  },
} as MidwayConfig;
```

### 3. 访问文档

启动应用后，访问 `http://localhost:7001/scalar/` 查看 API 文档。

## 配置选项

更多配置选项请参考官方文档：[Scalar](https://guides.scalar.com/products/api-references/configuration#configuration__configuration-options)。

## License

MIT
