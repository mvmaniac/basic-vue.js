import type { Person } from '@/shared/types';
import type { App } from 'vue';

export default {
  install(app: App, options: Person) {
    const person: Person = {
      ...options,
      name: '짐코딩',
      say() {
        alert(this.name);
      },
    };

    app.config.globalProperties.$person = person;
    app.provide<Person>('person', person);
  },
};
