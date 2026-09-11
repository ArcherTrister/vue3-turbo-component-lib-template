import { version as pkgVersion } from '../package.json';
import { BaseModule, ModuleConfig } from '@mylib/core';
import { routes } from './router';
import { exampleStore } from './store';
import Users from './components/Users';
//import { Users } from './components';

export class ExampleModule extends BaseModule {
  config: ModuleConfig = {
    name: '@mylib/identity',
    version: pkgVersion,
    routes,
    store: (pinia) => exampleStore(pinia),
    components: [Users]
  };
}

export default new ExampleModule();
