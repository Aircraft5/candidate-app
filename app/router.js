import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('organizations', function () {
    this.route('edit', {
      path: "/:id"
    });
    this.route('users', {
      path: "/:id/users"
    });
  });
  this.route('users', function () {
    this.route('edit', {
      path: "/:id"
    });
    this.route('documents', {
      path: "/:id/documents"
    }, function () {
      this.route('edit', {
        path: "/:id"
      });
      this.route('new');
    });
  });
});

export default Router;
