const { Router } = require("express");

const {
  postActivty,
  getActivity,
  deleteActivity,
  updateActivity,
  detailActivity,
} = require("../Controllers/Activity");
const router = Router();

router.post("/", postActivty);
router.get("/", getActivity);
router.get("/:id", detailActivity);
router.delete("/:id", deleteActivity);
router.put("/:id", updateActivity);

// router.get("/name", getCountriesQuery);

module.exports = router;
