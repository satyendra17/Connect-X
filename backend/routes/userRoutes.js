const express = require ("express")
const {registerUser, authUser,allUsers} = require("../controllers/userControllers");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router()

// to chain multiple requests router.route is used otherwise u can use router.get , postetc.

router.route('/').post(registerUser).get(protect, allUsers)
router.post('/login', authUser)



module.exports = router;