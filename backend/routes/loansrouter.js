const express = require("express");

const LoanController = require("../controllers/loanscontroller");

const checkAuth = require("../middleware/check-auth");


const router = express.Router();

router.post("", checkAuth,  LoanController.createLoan);

router.put("/:id", checkAuth,  LoanController.updateLoan);

router.get("", LoanController.getLoans);

router.get("/:id", LoanController.getLoan);

router.delete("/:id", checkAuth, LoanController.deleteLoan);

module.exports = router;


