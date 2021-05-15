const express = require("express");

const DesigController = require("../controllers/desigscontroller");

const checkAuth = require("../middleware/check-auth");


const router = express.Router();

router.post("", checkAuth,  DesigController.createDesig);

router.put("/:id", checkAuth,  DesigController.updateDesig);

router.get("", DesigController.getDesigs);

router.get("/:id", DesigController.getDesig);

router.delete("/:id", checkAuth, DesigController.deleteDesig);

module.exports = router;


