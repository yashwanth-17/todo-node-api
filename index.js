const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./router");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/", router);

mongoose.connect(
  "mongodb+srv://test:test@react-graphql.uqwsm.mongodb.net/db?retryWrites=true&w=majority",
  { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false }
);

mongoose.connection.once("open", () => console.log("connected to db"));

const port = process.env.port || 5000;

app.listen(port, () => console.log("server running on port 5000"));
