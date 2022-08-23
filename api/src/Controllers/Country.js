const axios = require("axios");
const e = require("express");
const { getCountriesName, getCountries } = require("./getCountry");
const { getCountriesId } = require("./getCountryId");

// const getCountries = async (req, res) => {
//   let { name } = req.query;

//   const countriesDb = await Country.findAll({
//     include: {
//       model: Activity,
//       attributes: ["name"],
//       through: {
//         attributes: [],
//       },
//     },
//   });

//   try {
//     if (countriesDb.length) {
//       if (name) {
//         // const data = await countriesDb.filter((ele) =>
//         //   ele.name.toLowerCase().includes(name.toLowerCase())
//         // );
//         // console.log("name por query");
//         // data.length
//         //   ? res.json(data)
//         //   : res.json([
//         //       {
//         //         name: "El nombre de la busqueda no coincide con ningun Pais",
//         //       },
//         //     ]);
//         let find = await Country.findAll(
//           { where: { name: { [Op.iLike]: `%${name}%` } } },
//           { order: "name" },
//           { include: [Activity] }
//         );
//         res.json(find);
//       }
//       console.log("Countries traidos de la db!");
//       res.status(200).json(countriesDb);
//     } else {
//       if (name) {
//         let pedidoName = (
//           await axios(`https://restcountries.com/v3/name/${name}`)
//         ).data;
//         pedidoName = pedidoName.map((ele) => getCountryModel(ele));
//         console.log("traje name query de la api");
//         res.json(pedidoName);
//       }
//       const pedido = await axios(`https://restcountries.com/v3/all`);
//       let mapApi = pedido.data.map((ele) => getCountryModel(ele));

//       console.log("Countries traidos de api y guardados");
//       res.json(await Country.bulkCreate(mapApi));
//     }
//   } catch (error) {
//     console.log(error.message, "error en en el pedido");
//   }
// };

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
