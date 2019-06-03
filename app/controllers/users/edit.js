import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    cancel() {
      this.model.rollbackAttributes();
    },

    saveUser() {
      this.model.save();
    }
  }
});
