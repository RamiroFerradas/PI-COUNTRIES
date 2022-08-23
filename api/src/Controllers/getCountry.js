const axios = require("axios");
const e = require("express");
const { Country, Activity } = require("../db");
const { getCountryModel } = require("../Utils/formatCountry");
const { Op } = require("sequelize");

const getCountries = async () => {
  const countriesDb = await Country.findAll({
    include: {
      model: Activity,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });

  try {
    if (countriesDb.length) {
      console.log("Countries traidos de la db!");
      return countriesDb;
    } else {
      const pedido = await axios(`https://restcountries.com/v3/all`);
      let mapApi = pedido.data.map((ele) => getCountryModel(ele));

      console.log("Countries traidos de api y guardados");
      return await Country.bulkCreate(mapApi);
    }
  } catch (error) {
    console.log(error.message, "error en en el pedido");
  }
};

const getCountriesName = async (name) => {
  try {
    console.log("Name db");
    let find = await Country.findAll(
      { where: { name: { [Op.iLike]: `%${name}%` } } },
      { order: "name" },
      { include: [Activity] }
    );
    if (find) {
      return find;
    } else {
      let pedidoName = (
        await axios(`https://restcountries.com/v3/name/${name}`)
      ).data;
      pedidoName = pedidoName.map((ele) => getCountryModel(ele));
      console.log("traje name query de la api");

      return pedidoName;
    }
  } catch (error) {
    console.error(error.message, "error en el pedido por name");
  }
};

module.exports = { getCountries, getCountriesName };
