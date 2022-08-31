const getCountryModel = (ele) => {
  return {
    id: ele.cca3,
    name: ele.name.common,
    flag: ele.flags[0],
    continent: ele.continents[0],
    capital: ele.capital ? ele.capital[0] : "doesnt have capital",
    subregion: ele.subregion,
    area: ele.area,
    population: ele.population,
    maps: ele.maps.googleMaps
      ? ele.maps.googleMaps
      : `https://www.google.com/maps/place/${ele.name.common}`,
    unMember: ele.unMember,
    officialName: ele.name.official,
    region: ele.region,
    timezones: ele.timezones[0],
    activities: ele.activities?.map(
      (ele) => ele.name[0].toUpperCase() + ele.name.slice(1)
    ),
    latlng: ele.latlng.map((ele) => ele),
  };
};

const getActivitiesModel = (ele) => {
  return {
    name: ele.name,
    id: ele.id,
    difficulty: ele.difficulty,
    duration: ele.duration,
    season: ele.season,
    countries: ele.countries.map((ele) => ele.name),
  };
};

// let activity = (
//   await Activity.findByPk(postActivity.id, {
//     include: {
//       model: Country,
//       attributes: ["name"],
//       through: {
//         attributes: [], // limpia de axios
//       },
//     },
//   })
// ).dataValues;

// activity.countries = activity.countries.map((ele) => ele.dataValues.name);
// console.log(activity);

module.exports = {
  getCountryModel,
  getActivitiesModel,
};
