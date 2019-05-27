import FactoryGuy from 'ember-data-factory-guy';
import faker from "faker";

FactoryGuy.define('organization', {
  default: {
    name() {
      return faker.company.companyName()
    },
  }
});
