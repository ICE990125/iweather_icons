目前仅支持和风天气

# installation

```
npm install iweather_icons@0.0.3
```

# Usage

```js
// main.ts
const icon = require('iweather_icons');

// OR
// // @ts-ignore
// import icon from 'iweather_icons';

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


If you want to run it locally and look the demo:

```
git clone https://github.com/iceweather/iweather_icons.git
```

and

# Dev

```
npm run dev
```

# Build

if you don't satisfy the icon, you can design by yourself and replace the icon file under the folder `packages/assets`, finally, you can use the below command to build it by youself

```
npm run build
```
