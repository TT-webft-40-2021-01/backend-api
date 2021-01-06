const db = require("../api/config");

module.exports = {
  get,
  getById,
  post,
  update,
  remove,

};
//Find all posts data
function get() {
  return db("posts").select("id", "name", "description", "photo_url", "price", "owner_id", "renter_id");
}

//Find rental by id
function getById(id) {
  return db("posts")
    .select("id", "title", "description", "photo_url")
    .where({ id })
    .first();
}

//add new rental
function post(newPost) {
  return db("posts")
    .insert(newPost)
    .returning(["id", "name", "description", "photo_url", "price"]);
}

//update a rental by id
function update(changes, id) {
  return db("posts").where({ id }).update(changes); //updates the record with 'changes' where the id matches
}

//remove rental from database
function remove(id) {
  return db('rentals').where({ id }).del();
}

