const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

//router
const authRouter = require("../auth/auth-router");
const rentalsRouter = require("../rentals/rentals-router");
const userRouter = require("../users/users-router")

//mwauthorization
const restrictedmw = require("../auth/auth-middleware");

//server
const server = express();

//router
server.use(cors());
server.use(express.json());
server.use("/", helmet());
server.use("/", morgan("--API testing for Rent My Tech Stuff--"));

//routes
server.use("/api/auth", authRouter);
server.use("/api/users", userRouter)
server.use("/api/rentals", restrictedmw, rentalsRouter);
server.get("/", (req, res) => {
  res.status(200).json({ server: "Rent My Tech BuildWeek" });
});

module.exports = server;
