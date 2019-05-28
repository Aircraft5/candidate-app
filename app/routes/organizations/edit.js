import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.store.findRecord("organization", params.id, {
      include: "users,users.documents"
    });
  },

  resetController(controller) {
    controller.set("firstName", "");
    controller.set("lastName", "");
    controller.set("emailAddress", "");

    controller.set("alertText", "");
    controller.set("alertType", "success");

    controller.set("showUserModal", false);
  }
});
