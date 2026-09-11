import type { App } from 'vue';
import { VButton, VDialog, VCard, VGradient, VPage } from './components';

export { version } from './version';

const components = [VButton, VDialog, VCard, VGradient, VPage];

function install(app: App) {
  components.forEach((component) => {
    app.use(component);
  });
}

export { install };

export * from './components';

export default {
  install,
};
