
exports.seed = function (knex) {
  const rentals = [
    {
      //  id: 1,
      price: 35.99, 
      owner_id: 1,
      renter_id: 5,
      name: "DLSR Camera",
      description: "Takes a lot of great photos. One took a picture of a really big fish.",
      photo_url: "https://images.unsplash.com/photo-1542492026-44f6489c8c28?ixlib=rb-1.2.1&auto=format&fit=crop&w=1018&q=80"
    },

    {
       //id: 2,
      price: 150.00, 
      owner_id: 2,
      renter_id: 3,
      name: "Lenovo Thinkpad",
      description: "A workhorse of a laptop",
      photo_url: "https://images.unsplash.com/photo-1494783367193-149034c05e8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
    },

    {
      //id: 3,
      price: 322.33, 
      owner_id: 1,
      renter_id: 4,
      name: "Macbook Pro, 16 inch",
      description: "This is a 2020 model, baseline components.",
      photo_url: "https://images.unsplash.com/photo-1449182325215-d517de72c42d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1017&q=80"
    },

    {
      //id: 4,
      price: 500.50, 
      owner_id: 2,
      renter_id: 5,
      name: "RED camera",
      description: "if you know, you know.",
      photo_url: "https://images.unsplash.com/photo-1445966275305-9806327ea2b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    },
    
  ];
  return knex('rentals').insert(rentals);
};
