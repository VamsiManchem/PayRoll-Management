const express = require("express");

const PbillreportController = require("../controllers/pbillreportscontroller");

const checkAuth = require("../middleware/check-auth");


const router = express.Router();

/* router.post("", checkAuth,  EmpController.createEmp);

router.put("/:id", checkAuth,  EmpController.updateEmp); */

router.get("", PbillreportController.getPbillreports);

router.get("/:id", PbillreportController.getPbillreport);
/* 
router.delete("/:id", checkAuth, EmpController.deleteEmp); */

module.exports = router;


