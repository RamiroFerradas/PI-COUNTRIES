const { Router } = require("express");

const { postActivty, getActivity } = require("../Controllers/Activity");
const router = Router();

router.post("/", postActivty);
router.get("/", getActivity);

// router.get("/name", getCountriesQuery);

module.exports = router;
