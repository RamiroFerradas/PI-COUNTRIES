const { Router } = require("express");

const { getCountries } = require("../Controllers/Country");
const { getCountriesId } = require("../Controllers/Country");
const router = Router();

router.get("/", getCountries);
router.get("/:id", getCountriesId);

module.exports = router;
