import {
  Factory,
  hasMany
} from 'ember-cli-mirage';

import faker from "faker";

export default Factory.extend({
  name() {
    return faker.company.companyName();
  },

  users: hasMany()
});
