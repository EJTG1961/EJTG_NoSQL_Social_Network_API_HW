// Import models
const { User } = require("../models");
// Create easy crud commands to grab info
const userController = {
  // Create user
  getUsers(req, res) {
    User.find({})
      .then((userData) => res.json(userData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },
  // add user
  addUser({ body }, res) {
    User.create(body)
      .then((userData) => res.json(userData))
      .catch((err) => res.status(400).json(err));
  },
  // get user by id
   getUserById({ params }, res) {
    User.findOne({ _id: params.id })
      .then((userData) => res.json(userData))
      .catch((err) => res.status(400).json(err));
  },
  // update user
  updateUser({ params, body }, res) {
    User.findOneAndUpdate({ _id: params.id }, body, {
      new: true,
      runValidators: true,
    })
      .then((userData) => {
        if (!userData) {
          res.status(404).json({ message: "No user with this ID!" });
          return;
        }

        res.json(userData);
      })
      .catch((err) => res.status(400).json(err));
  },
  // delete user
  deleteUser({ params }, res) {
    User.findOneAndDelete({ _id: params.id })
      .then((userData) => {
        if (!userData) {
          res.status(404).json({ message: "No user with this ID!" });
          return;
        }

        res.json(userData);
      })
      .catch((err) => res.status(400).json(err));
  },
  // add friend
  addFriend({ params }, res) {
    User.findOneAndUpdate(
      { _id: params.id },
      { $push: { friends: params.friendId } },
      { runValidators: true, new: true }
    )
      .then((userData) => {
        if (!userData) {
          res.status(404).json({ message: "No user with this ID!" });
          return;
        }
        res.json(userData);
      })
      .catch((err) => res.status(400).json(err));
  },
  //delete friend
  deleteFriend({ params }, res) {},
};

module.exports = userController;