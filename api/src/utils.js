const getcountryModel = (ele) => {
  return {
    id: ele.cca3,
    name: ele.name.common,
    flag: ele.flags[0],
    continent: ele.continents[0],
    capital: ele.capital ? ele.capital[0] : "doesnt have capital",
    subregion: ele.subregion,
    area: ele.area,
    population: ele.population,
    maps: ele.maps.googleMaps,
    unMember: ele.unMember,
    officialName: ele.name.official,
    region: ele.region,
    timezones: ele.timezones,
  };
};

module.exports = {
  getcountryModel,
};
