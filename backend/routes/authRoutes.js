const express = require("express");
const router = express.Router();

// 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
const checkAuth = require("../middleware/checkAuth");
const checkAdmin = require("../middleware/checkAdmin");
const {
  fetchCurrentUser,
  loginUser,
  registerUser,
  verifyOTP,
  handleAdmin
} = require("../controllers/authController");


router.post("/register", registerUser);

router.post("/login_with_phone", loginUser);


router.post("/verify", verifyOTP);

router.get("/me", checkAuth, fetchCurrentUser);

router.get("/admin", checkAuth, checkAdmin, handleAdmin);

module.exports = router;