import {
  Factory
} from 'ember-cli-mirage';

import faker from "faker";

export default Factory.extend({
  name() {
    return faker.system.fileName();
  },
  contents() {
    return faker.lorem.words(1100);
  }
});
