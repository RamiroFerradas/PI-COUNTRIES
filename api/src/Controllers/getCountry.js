const axios = require("axios");
const e = require("express");
const { Country, Activity } = require("../db");
const { getCountryModel } = require("../Utils/formatCountry");
const { Op } = require("sequelize");

const getCountries = async () => {
  try {
    const countriesDb = (
      await Country.findAll({
        include: {
          model: Activity,
          attributes: ["name"],
          through: {
            attributes: [],
          },
        },
      })
    ).map((ele) => ele.dataValues);

    // countriesDb.forEach((ele) => {
    //   if (ele.activities.length) {
    //     ele.activities.forEach((ele) => (ele = ele.dataValues));
    //   }
    // });

    // let algo = countriesDb.map((ele) => {
    //   if (ele.name === "Argentina" || ele.name === "Brazil")
    //     return ele.activities;
    // });

    // console.log(countriesDb.json);
    if (countriesDb.length) {
      console.log("Countries traidos de la db!");
      return countriesDb;
    } else {
      const pedido = (await axios(`https://restcountries.com/v3/all`)).data.map(
        (ele) => getCountryModel(ele)
      );

      console.log("Countries traidos de api y guardados");
      return Country.bulkCreate(pedido);
    }
  } catch (error) {
    console.error(error.message, "error en en el pedido");
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
