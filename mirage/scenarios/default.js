export default function (server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  server.create('organization', {
    users: [
      server.create("user", {
        documents: [
          server.create("document"),
          server.create("document"),
          server.create("document")
        ]
      })
    ]
  });
}
