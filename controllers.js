const Todo = require("./model");

function get(req, res) {
  try {
    Todo.find({})
      .then((res) => res)
      .then((data) => {
        res.send(data);
      });
  } catch (e) {
    res.status(404).send("data not found");
  }
}

function post(req, res) {
  const { name } = req.body;
  try {
    const todo = new Todo({ name, completed: false });
    todo.save().then(() => {
      Todo.find({})
        .then((res) => res)
        .then((data) => {
          res.send(data);
        });
    });
  } catch (e) {
    res.status(400).send("invalid request");
  }
}

function patch(req, res) {
  const { completed } = req.body;
  try {
    Todo.findByIdAndUpdate(req.params.id, { completed })
      .then(() => {
        Todo.find({})
          .then((res) => res)
          .then((data) => {
            res.send(data);
          });
      })
      .catch((e) => {
        console.log(e);
      });
  } catch (e) {
    res.status(400).send(e.message);
  }
}

function remove(req, res) {
  try {
    Todo.findByIdAndDelete(req.params.id).then(() => {
      Todo.find({})
        .then((res) => res)
        .then((data) => {
          res.send(data);
        });
    });
  } catch (e) {
    res.status(400).send(e.message);
  }
}

module.exports = { get, post, patch, remove };
