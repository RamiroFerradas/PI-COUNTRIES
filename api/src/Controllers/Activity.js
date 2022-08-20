const axios = require("axios");
const { Activity, Country } = require("../db");
const {
  getCountryModel,
  getActivitiesModel,
} = require("../Utils/formatCountry");

const getActivity = async (req, res) => {
  try {
    let activity = await Activity.findAll({
      include: {
        model: Country,
        attributes: ["name"],
      },
    });
    activity.countries = activity.map(
      (ele) => ele.dataValues.countries[0].name
    );

    console.log(activity);
    res.json(activity);
    // res.json(allActivities.map((ele) => ele.dataValues));
  } catch (error) {
    console.log(error.message, "error en el pedido de activities a la db");
  }
};

const postActivty = async (req, res) => {
  let { name, difficulty, duration, season, countries } = req.body;
  try {
    const postActivity = await Activity.create({
      name,
      difficulty,
      duration,
      season,
      countries,
    });

    await postActivity.addCountry(countries);
    let activity = (
      await Activity.findByPk(postActivity.id, {
        include: {
          model: Country,
          attributes: ["name"],
          through: {
            attributes: [], // limpia de axios
          },
        },
      })
    ).dataValues;

    activity.countries = activity.countries.map((ele) => ele.dataValues.name);
    console.log(activity);

    res.json(activity);

    // res.status(200).send(postActivity);
  } catch (error) {
    console.log(error.message, "error en el post");
  }
};

module.exports = {
  postActivty,
  getActivity,
};
