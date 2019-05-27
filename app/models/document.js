import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr("string"),
  contents: DS.attr("string"),
  size: DS.attr("number"),

  owner: DS.belongsTo("user")
});
