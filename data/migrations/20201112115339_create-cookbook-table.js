
exports.up = function(knex) {
  return (knex.schema
    .createTable('recipes', recipes => {
        recipes.increments('id');
        recipes.string('recipe_name').notNullable();
        recipes.string('description');
        recipes.json('instructions').defaultTo([]);
        recipes.json('ingredients').defaultTo([]);
    }))
};

exports.down = function(knex) {
  return (knex.schema
    .dropTableIfExist('recipes')
    )
};
