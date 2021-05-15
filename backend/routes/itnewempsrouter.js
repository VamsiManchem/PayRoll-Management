const express = require("express");

const ItnewempController = require("../controllers/itnewempscontroller");

const checkAuth = require("../middleware/check-auth");


const router = express.Router();

router.post("", checkAuth,  ItnewempController.createItnewemp);

router.put("/:id", checkAuth,  ItnewempController.updateItnewemp);

router.get("", ItnewempController.getItnewemps);

router.get("/:id", ItnewempController.getItnewemp);

/* router.delete("/:id", checkAuth, ItnewempController.deleteItnewemp); */

module.exports = router;

