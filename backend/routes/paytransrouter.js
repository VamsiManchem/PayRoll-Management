const express = require("express");

const PaytransController = require("../controllers/paytranscontroller");

const checkAuth = require("../middleware/check-auth");


const router = express.Router();

router.post("", checkAuth,  PaytransController.createPaytrans);

router.get("", PaytransController.getPaytrans);

/* router.get("/:id", EmpController.getEmp); */

module.exports = router;
