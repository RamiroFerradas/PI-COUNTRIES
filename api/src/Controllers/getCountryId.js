const axios = require("axios");
const e = require("express");
const { Country, Activity } = require("../db");
const { getCountryModel } = require("../Utils/formatCountry");

const getCountriesId = async (id) => {
  try {
    const detail = await Country.findByPk(id.toUpperCase(), {
      include: [Activity],
    });
    if (detail) {
      console.log("detail en db");
      return detail;
    } else {
      let pedido = (
        await axios.get(`https://restcountries.com/v3/name/${id}`)
      ).pedido.data.map((ele) => getCountryModel(ele));
      console.log("detail en api");
      return Array(pedido);
    }
  } catch (error) {
    console.error(error.message, "error en pedido por params id");
  }
};
module.exports = {
  getCountriesId,
};
