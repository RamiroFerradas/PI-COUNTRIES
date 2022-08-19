const axios = require("axios");
const { Activity, Country } = require("../db");
const { getcountryModel } = require("../utils");

const getCountries = async (req, res) => {
  try {
    let countriesDb = await Country.findAll();
    if (!countriesDb.length) {
      const pedido = await axios(`https://restcountries.com/v3/all`);
      let mapApi = pedido.data.map((ele) => getcountryModel(ele));
      console.log("Countries traidos de api y guardados");
      res.json(await Country.bulkCreate(mapApi));
    } else {
      console.log("Countries traidos de la db!");
      res.status(200).json(countriesDb);
    }
  } catch (error) {
    console.log(error.message, "error en en el pedido");
  }
};

const getCountriesId = async (req, res) => {
  let { id } = req.params;
  try {
    const detail = await Country.findByPk(id.toUpperCase(), {
      include: [Activity],
    });
    if (detail) {
      console.log("detail en db");
      res.json(detail);
    } else {
      let pedido = await axios.get(`https://restcountries.com/v3/name/${id}`);
      let limpieza = pedido.data.map((ele) => getcountryModel(ele));
      res.json(limpieza);
      console.log("detail en api");
    }
  } catch (error) {
    console.log(error.message, "error en el pedido por id");
  }
};

const getCountriesQuery = () => {};

module.exports = {
  getCountries,
  getCountriesId,
};
