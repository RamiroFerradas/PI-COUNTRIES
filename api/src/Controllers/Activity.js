const axios = require("axios");
const { Activity, Country } = require("../db");

// import sequelize from "sequelize";
const { getActivitiesModel } = require("../Utils/formatCountry");

const getActivity = async (req, res) => {
  try {
    let activity = await Activity.findAll({
      order: ["id"],
      include: {
        model: Country,
        attributes: ["name"],
      },
    });

    let result = activity.map((ele) => getActivitiesModel(ele));

    res.json(result);
  } catch (error) {
    console.log(error.message, "error en el pedido de activities a la db");
  }
};

const detailActivity = async (req, res) => {
  let { id } = req.params;
  try {
    let oneActivity = await Activity.findByPk(id, {
      include: {
        model: Country,
        attributes: ["name"],
      },
    });
    res.json(oneActivity);
  } catch (error) {
    console.log(error.message, "error en el pedido por id");
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

    res.send("actividad creada correctamente!");

    // res.status(200).send(postActivity);
  } catch (error) {
    console.log(error.message, "error en el post");
  }
};

const deleteActivity = async (req, res) => {
  let { id } = req.params;
  try {
    const deleteAct = await Activity.destroy({
      where: {
        id,
      },
    });
    console.log(`Borraste ${deleteAct} actividad !`);
    res.send("Actividad borrada con exito !!");
  } catch (error) {
    console.log(error.message, "Error en el delete");
  }
};

const updateActivity = async (req, res) => {
  let { id } = req.params;
  let { name, difficulty, duration, season, countries } = req.body;
  try {
    console.log(countries);
    const updateAct = await Activity.update(
      {
        name,
        difficulty,
        duration,
        season,
        countries,
      },
      // {
      //   include: {
      //     model: Country,
      //     attributes: ["name"],
      //   },
      // },
      {
        where: {
          id: id,
        },
      }
    );

    console.log(updateAct, "holis update activity");

    console.log(`Actualizaste ${updateAct} actividad !`);
    res.send("Actividad actualiza con exito !!");
  } catch (error) {
    console.log(error.message, "Error en el update");
  }
};

module.exports = {
  postActivty,
  getActivity,
  deleteActivity,
  updateActivity,
  detailActivity,
};
