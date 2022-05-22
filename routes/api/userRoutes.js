const router = require("express").Router();
const {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controllers/userController");

// /api/users route
router.route("/").get(getAllUser).post(createUser);

// /api/users/:id route
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

// /api/users/:userId/friends/:friendId route
router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend);

module.exports = router;
