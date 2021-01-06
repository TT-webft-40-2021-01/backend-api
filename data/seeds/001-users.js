exports.seed = function(knex) {

  // Inserts seed entries
  return knex('users').insert([
    {
      //id: 1,
      role: 'owner', //'owner'
      username: 'anya',
      password: 'password'
    },

    { //id: 2,
      role: 'owner', //'owner'
      username: 'jenny',
      password: 'password1'
    },

    { //id: 3,
      role: 'renter', //renter
      username: 'owen',
      password: 'password2'
    },

    { //id: 4,
      role: 'renter', //renter
      username: 'aesop',
      password: 'password3'
    },

    { //id: 5,
      role: 'renter', //renter
      username: 'helvetica',
      password: 'password4'
    },
  ]);

};