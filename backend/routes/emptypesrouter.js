const express = require("express");

const EmptypeController = require("../controllers/emptypescontroller");

const checkAuth = require("../middleware/check-auth");


const router = express.Router();

router.post("", checkAuth,  EmptypeController.createEmptype);

router.put("/:id", checkAuth,  EmptypeController.updateEmptype);

router.get("", EmptypeController.getEmptypes);

router.get("/:id", EmptypeController.getEmptype);

router.delete("/:id", checkAuth, EmptypeController.deleteEmptype);

module.exports = router;


