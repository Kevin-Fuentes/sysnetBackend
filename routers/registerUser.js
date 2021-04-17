const express = require("express");
const router = express.Router();
const registerUser = require("../controllers/registerUserController");


router.get('/',registerUser.getUser
)
router.get('/:id',registerUser.getUserById
)
router.post("/",
registerUser.createUser
);

router.put("/:id",
registerUser.updateUser
);

router.delete("/:id",
registerUser.deleteUser
);


module.exports = router;
