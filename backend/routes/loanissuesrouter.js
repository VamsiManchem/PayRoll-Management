const express = require("express");

const LoanissueController = require("../controllers/loanissuescontroller");

const checkAuth = require("../middleware/check-auth");


const router = express.Router();

router.post("", checkAuth,  LoanissueController.createLoanissue);

router.put("/:id", checkAuth,  LoanissueController.updateLoanissue);

router.get("", LoanissueController.getLoanissues);

router.get("/:id", LoanissueController.getLoanissue);

router.delete("/:id", checkAuth, LoanissueController.deleteLoanissue);

module.exports = router;


