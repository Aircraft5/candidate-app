export default function () {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  this.namespace = '/api'; // make this `/api`, for example, if your API is namespaced
  this.timing = 500; // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.4.x/shorthands/
  */

  this.get("/organizations");
  this.get("/organizations/:id");
  this.get("/organizations/:id/users");

  this.get("/users");
  this.post("/users");

  this.get("/users/:id");
  this.del("/users/:id");
  this.patch("/users/:id");

  this.get("/users/:id/documents");
  this.post("/users/:id/documents");

  this.get("/documents");
  this.post("/documents");

  this.get("/documents/:id");
  this.del("/documents/:id");
}
