const router = require("express").Router();

const Users = require("./users-model");
const Rentals= require('../rentals/rentals-model')
const restricted = require("../auth/auth-middleware");
const { isValid } = require("./users-service");


router.get("/", restricted, (req, res) => {
  Users.find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => res.send(err));
});

router.get("/:id/rentals", (req, res) => {
  Users.getAllUsersOwned(req.params.id)
    .then((rentals) => {
      if (rentals.length) {
        res.status(200).json(rentals);
      } else {
        res
          .status(404)
          .json({
            message: `No rentals`,
            error: err.message,
          });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed To Get Users Rentals" });
    });
});

router.post("/", isValid, (req, res) => {
  Users.add(req.body)
    .then(user => {
      res.status(201).json(user);
    })
    .catch(() => {
      res.status(500).json({
        error: "There was an error saving new user"
      })
    });
});


module.exports = router;