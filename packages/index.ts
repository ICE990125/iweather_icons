import icon from './icon.vue';
import { App } from 'vue';

export default {
  install: (app: App) => {
    app.component('i-icon', icon);
  },
  icon,
};
