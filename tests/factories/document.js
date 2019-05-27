import FactoryGuy from 'ember-data-factory-guy';
import faker from "faker";

FactoryGuy.define('document', {
  default: {
    name() {
      return faker.system.fileName();
    }
  }
});
