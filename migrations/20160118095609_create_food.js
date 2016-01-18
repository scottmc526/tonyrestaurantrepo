
exports.up = function(knex, Promise) {
  return knex.schema.createTable('food', function(table){
    table.increments();
    table.string('name');
    table.string('genre');
    table.string('location');
    table.integer('rating');
    table.text('description');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('food');
};
