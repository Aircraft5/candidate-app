import FactoryGuy from 'ember-data-factory-guy';
import faker from "faker";

FactoryGuy.define('user', {
  default: {
    firstName() {
      return faker.name.firstName();
    },
    lastName() {
      return faker.name.lastName();
    },
    emailAddress() {
      return faker.internet.email();
    },
  }
});
