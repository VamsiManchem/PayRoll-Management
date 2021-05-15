const express = require("express");

const BasictypeController = require("../controllers/basictypescontroller");

const checkAuth = require("../middleware/check-auth");


const router = express.Router();

router.post("", checkAuth,  BasictypeController.createBasictype);

router.put("/:id", checkAuth,  BasictypeController.updateBasictype);

router.get("", BasictypeController.getBasictypes);

router.get("/:id", BasictypeController.getBasictype);

router.delete("/:id", checkAuth, BasictypeController.deleteBasictype);

module.exports = router;


