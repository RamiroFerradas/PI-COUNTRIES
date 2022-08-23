const { Router } = require("express");

const { getCountriesFinal } = require("../Controllers/Country");
const { getCountriesIdParams } = require("../Controllers/Country");

const router = Router();

router.get("/", getCountriesFinal);
router.get("/:id", getCountriesIdParams);

module.exports = router;
