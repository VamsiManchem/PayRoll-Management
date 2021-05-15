const express = require("express");

const DeptController = require("../controllers/deptscontroller");

const checkAuth = require("../middleware/check-auth");


const router = express.Router();

router.post("", checkAuth,  DeptController.createDept);

router.put("/:id", checkAuth,  DeptController.updateDept);

router.get("", DeptController.getDepts);

router.get("/:id", DeptController.getDept);

router.delete("/:id", checkAuth, DeptController.deleteDept);

module.exports = router;


