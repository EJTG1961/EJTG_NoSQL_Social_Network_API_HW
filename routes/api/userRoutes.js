const router = require("express").Router();
const {
  getUsers,
  addUser,
  getUserById,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/userController");

// /api/users route
router.route("/")
  .get(getUsers)
  .post(addUser);

// /api/users/:id route
router.route("/:id")
 .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

// /api/users/Id/friends/:friendId route
router.route("/:id/friends/:friendId")
  .post(addFriend)
  .delete(deleteFriend);

module.exports = router;
