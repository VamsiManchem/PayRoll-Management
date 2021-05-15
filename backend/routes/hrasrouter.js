const express = require("express");

const HraController = require("../controllers/hrascontroller");

const checkAuth = require("../middleware/check-auth");


const router = express.Router();

router.post("", checkAuth,  HraController.createHra);

router.put("/:id", checkAuth,  HraController.updateHra);

router.get("", HraController.getHras);

router.get("/:id", HraController.getHra);

router.delete("/:id", checkAuth, HraController.deleteHra);

module.exports = router;


