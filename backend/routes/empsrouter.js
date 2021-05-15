const express = require("express");

const EmpController = require("../controllers/empscontroller");

const checkAuth = require("../middleware/check-auth");


const router = express.Router();

router.post("", checkAuth,  EmpController.createEmp);

router.put("/:id", checkAuth,  EmpController.updateEmp);

router.get("", EmpController.getEmps);

router.get("/:id", EmpController.getEmp);

router.delete("/:id", checkAuth, EmpController.deleteEmp);

module.exports = router;


