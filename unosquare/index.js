/*
Users API
  You are in charge of implementing the users API module.

  Create the following endpoints:
  * List all users                                  /users
  * Get user by id                                  /users/{id}
  * Sort alphabetically asc/desc by name            /users/sorted?mode=asc
  * Filter by a given prop [name, email, username]  /users/filter?key={key}&value={value}
  * 
  * 
  * Nice to have
  * 
  * Unit tests (
  *   to run the tests, 
  *   you have to create a new terminal editor in the top right
  *   from the editor terminal, the 'plus symbol'
  *   then run "npm test" command)
  * 
  * Create a logger using singleton pattern that prints out by console 
  * the endpoint visited, e.g. (/users/id) outputs "requesting single user"
*/

const express = require("express");
const users = require("./data/users");
var qs = require("qs");
const console = require("console");

const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("Welcome to the Node Challenge!");
});

// list all users
app.get("/users", (req, res) => {
  res.send(users.getUsers());
});

// sort
app.get("/users/sorted", (req, res) => {
  // TODO
  // sort by name asc/desc
  let { mode } = req.query;
  const usersSorted = users.sortByName(mode);
  res.json(usersSorted);
});

// filter users by [name or email or username]
app.get("/users/filter", (req, res) => {
  // TODO [name, email, username]
  // console.log(req.query);
  //const { key, value} = req.query;
  console.log(req.query);
});

// get user by id
app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  res.json(users.getUserById(id));
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
