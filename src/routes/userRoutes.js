const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");
const authorize = require("../middleware/roleMiddleware");

const {
  registerUser,
  loginUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

// Public routes
router.post("/register", registerUser);
router.post("/login", loginUser);

// Protected routes
router.get("/", protect, getUsers);
router.get("/:id", protect, getUserById);

router.put("/:id", protect, updateUser);
router.patch("/:id", protect, updateUser);

// Admin-only delete
router.delete("/:id", protect, authorize("admin"), deleteUser);

module.exports = router;
