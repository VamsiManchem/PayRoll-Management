const express = require("express");

const GroupController = require("../controllers/groupscontroller");

const checkAuth = require("../middleware/check-auth");


const router = express.Router();

router.post("", checkAuth,  GroupController.createGroup);

router.put("/:id", checkAuth,  GroupController.updateGroup);

router.get("", GroupController.getGroups);

router.get("/:id", GroupController.getGroup);

router.delete("/:id", checkAuth, GroupController.deleteGroup);

module.exports = router;


