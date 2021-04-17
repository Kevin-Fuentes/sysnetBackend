const express = require("express");
const router = express.Router();



router.get('/', (req, res) => res.send('Api:/api/sysnet'))

module.exports = router;
