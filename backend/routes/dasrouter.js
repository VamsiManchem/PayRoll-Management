const express = require("express");

const DaController = require("../controllers/dascontroller");

const checkAuth = require("../middleware/check-auth");


const router = express.Router();

router.post("", checkAuth,  DaController.createDa);

router.put("/:id", checkAuth,  DaController.updateDa);

router.get("", DaController.getDas);

router.get("/:id", DaController.getDa);

router.delete("/:id", checkAuth, DaController.deleteDa);

module.exports = router;


