# 幸运理子企业官网演示

基于 [Astro 7](https://astro.build) + [Pico CSS 2](https://picocss.com) + pnpm 的企业官网示例，具有移动端兼容、响应式布局、暗黑模式。

> 本项目为学习演示，非幸运理子官方网站。

## 功能

- 组件化页面：首页 / 产品信息 / 了解我们 / 加入我们 / 新闻动态
- SEO：语义化结构、meta / Open Graph、canonical
- 响应式：桌面与移动端适配，移动端折叠导航
- 深浅色主题：跟随系统偏好，支持手动切换并本地记忆

## 开始

```sh
pnpm install
pnpm dev
```

开发服务：

```sh
pnpm astro dev --background
pnpm astro dev status
pnpm astro dev logs
pnpm astro dev stop
```

| 命令           | 说明                      |
| :------------- | :------------------------ |
| `pnpm install` | 安装依赖                  |
| `pnpm dev`     | 本地开发 `localhost:4321` |
| `pnpm build`   | 生产构建                  |
| `pnpm preview` | 预览构建结果              |

## 结构

```text
src/
├── components/   # Header、Hero、ProductGrid 等
├── data/         # 站点与内容数据
├── layouts/      # BaseLayout
├── pages/        # 路由页面
├── scripts/      # 主题 / 导航 / 入场动效
└── styles/       # 全局品牌样式
```
