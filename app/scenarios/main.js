import {
  Scenario
} from 'ember-data-factory-guy';

export default class extends Scenario {
  run() {
    let organization = this.make("organization");

    let doc1 = this.make("document");
    let doc2 = this.make("document");
    let doc3 = this.make("document");

    this.make("user", {
      organization,
      documents: [doc1, doc2, doc3]
    });

    this.mockFindAll('organization', 1).returns({
      models: [organization]
    });
  }
}
