const express = require("express");

const PmatrixController = require("../controllers/pmatrixscontroller");

const checkAuth = require("../middleware/check-auth");


const router = express.Router();


router.get("", PmatrixController.getPmatrixs);

router.get("/:id", PmatrixController.getPmatrix);



module.exports = router;


