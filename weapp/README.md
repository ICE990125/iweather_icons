# weapp

[![XwEzWj.png](https://s1.ax1x.com/2022/06/05/XwEzWj.png)](https://imgtu.com/i/XwEzWj)

目前仅支持和风天气

## 启动本地开发
```bash
pnpm run dev
```

可以通过传递 `--open` 指令自动打开小程序开发者工具
```bash
pnpm run dev:open
```

## 构建打包
```bash
pnpm run build
```

## 直接使用

```bash
pnpm i iweather_icon_weapp
```

```json
{
    "usingComponents": {
        "weather-icon": "../../components/weather-icon/index"
    }
}
```

```html
<weather-icon size="60" name="qweather-1"></weather-icon>
```

> 小程序开发者工具下打开 src 目录查看 demo