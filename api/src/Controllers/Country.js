const axios = require("axios");
const e = require("express");
const { getCountriesName, getCountries } = require("./getCountry");
const { getCountriesId } = require("./getCountryId");

const getCountriesFinal = async (req, res) => {
  let { name } = req.query;

  try {
    name
      ? res.json(await getCountriesName(name))
      : res.json(await getCountries());
  } catch (error) {
    console.error(error.message, "error en el pedido");
  }
};

const getCountriesIdParams = async (req, res) => {
  let { id } = req.params;
  try {
    res.send(await getCountriesId(id));
  } catch (error) {
    console.error(error.message, "error en el pedido por id");
  }
};

module.exports = {
  getCountriesFinal,
  getCountriesIdParams,
};
