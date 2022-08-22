const axios = require("axios");
const e = require("express");
const { Country, Activity } = require("../db");
const { getCountryModel } = require("../Utils/formatCountry");

const getCountries = async (req, res) => {
  let { name } = req.query;
  const countriesDb = await Country.findAll({
    include: {
      model: Activity,
      attributes: ["name"],
    },
  });

  try {
    if (countriesDb.length) {
      if (name) {
        const data = await countriesDb.filter((ele) =>
          ele.name.toLowerCase().includes(name.toLowerCase())
        );
        console.log("name por query");
        data.length
          ? res.json(data)
          : res.json([
              {
                name: "El nombre de la busqueda no coincide con ningun Pais",
              },
            ]);
      }
      console.log("Countries traidos de la db!");
      res.status(200).json(countriesDb);
    } else {
      if (name) {
        let pedidoName = (
          await axios(`https://restcountries.com/v3/name/${name}`)
        ).data;
        pedidoName = pedidoName.map((ele) => getCountryModel(ele));
        console.log("traje name query de la api");
        res.json(pedidoName);
      }
      const pedido = await axios(`https://restcountries.com/v3/all`);
      let mapApi = pedido.data.map((ele) => getCountryModel(ele));

      console.log("Countries traidos de api y guardados");
      res.json(await Country.bulkCreate(mapApi));
    }
  } catch (error) {
    console.log(error.message, "error en en el pedido");
  }
};

const getCountriesId = async (req, res) => {
  let { id } = req.params;
  try {
    const detail = await Country.findByPk(id, {
      include: [Activity],
    });
    if (detail) {
      console.log("detail en db");

      return res.send(detail);
    } else {
      let pedido = await axios.get(`https://restcountries.com/v3/name/${id}`);
      let limpieza = pedido.data.map((ele) => getCountryModel(ele));
      res.json(limpieza);
      console.log("detail en api");
    }
  } catch (error) {
    console.log(error.message, "error en el pedido por id");
  }
};

module.exports = {
  getCountries,
  getCountriesId,
};
