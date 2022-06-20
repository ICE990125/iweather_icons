# iweather_icons_vue

[![XwEzWj.png](https://s1.ax1x.com/2022/06/05/XwEzWj.png)](https://imgtu.com/i/XwEzWj)

目前仅支持和风天气

## installation

```bash
pnpm install iweather_icons
```

## Usage

```js
// main.ts
import icon from 'iweather_icons';

createApp(App).use(icon).mount('#app');
```

```html
<!-- qweather -->
<i-icon name="100"></i-icon>

<!-- 预警 -->
<i-icon name="warings-1001"></i-icon>

<!-- 设置大小 -->
<i-icon name="100" :size="20"></i-icon>
```

## Dev

If you want to run it locally and look the demo:

```bash
git clone https://github.com/iceweather/iweather_icons.git
```

and

```bash
cd iweather_icons
```

```bash
cd vuejs
```

```bash
pnpm run dev
```

## Build

if you don't satisfy the icon, you can design by yourself and replace the icon file under the folder `assets` , finally, you can use the below command to build.

```bash
pnpm run build
```
