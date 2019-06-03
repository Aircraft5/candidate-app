import Component from '@ember/component';

export default Component.extend({
  documentNameValue: '',
  documentTextValue: '',

  init() {
    this._super(...arguments);
  },

  actions: {
    cancel() {
      //TODO finish work on the component
      this.set('documentNameValue', '');
      this.set('documentTextValue', '');
    },
    save() {
      //TODO
    }
  }
});
