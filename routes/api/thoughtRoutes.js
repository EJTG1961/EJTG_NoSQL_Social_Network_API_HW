const router = require("express").Router();
const {
  getAllThought,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thoughtController");

// /api/thoughts route 
router.route("/").get(getAllThought).post(createThought);

// /api/thoughts/:id route
router
  .route("/:id")
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

// /api/reaction/:reactionId route
router.route("/:reactionId/reactions").post(addReaction);

// /api/reactions/:reactionId route
router.route("/:reactionId/reactions").delete(removeReaction);

module.exports = router;
