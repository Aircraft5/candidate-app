import Controller from '@ember/controller';

import {
  notEmpty
} from "@ember/object/computed";

export default Controller.extend({
  showUserModal: false,

  alertText: "",
  hasAlert: notEmpty("alertText"),
  alertType: "success",

  firstName: "",
  lastName: "",
  emailAddress: "",

  actions: {
    cancelEdit() {
      // rollback the model
    },

    async saveOrganization() {
      // save the model
    },

    showModal() {
      this.set("firstName", "");
      this.set("lastName", "");
      this.set("emailAddress", "");

      this.set("showUserModal", true);
    },

    hideModal() {
      this.set("showUserModal", false);
    },

    async createUser() {
      this.set("showUserModal", false);

      let props = this.getProperties("firstName", "lastName", "emailAddress");
      let organization = this.get("model");

      let data = Object.assign(props, {
        organization
      });

      let user = this.store.createRecord("user", data);

      try {
        await user.save();
      } catch (e) {
        this.set("alertType", "danger");
        this.set("alertText", "Unable to create user");
        return;
      }

      this.set("firstName", "");
      this.set("lastName", "");
      this.set("emailAddress", "");

      this.set("alertType", "success");
      this.set("alertText", "User created");
    }
  }
});
