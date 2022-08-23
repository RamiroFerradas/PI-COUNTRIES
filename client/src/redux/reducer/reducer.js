const initialState = {
  countries: [],
  allCountries: [],
  allCountriesAux: [],
  activities: [],
  details: [],
  page: 1,
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_COUNTRIES":
      return {
        ...state,
        countries: action.payload,
        allCountries: action.payload,
        allCountriesAux: action.payload,
        page: 1,
      };

    case "GET_ACTIVITIES":
      return {
        ...state,
        activities: action.payload,
        page: 1,
      };
    case "SEARCH_COUNTRIE_GLOBAL":
      const filt = state.countries.filter((ele) =>
        ele.name.toLowerCase().includes(action.payload.toLowerCase())
      );
      return {
        ...state,
        countries: filt,
        page: 1,
      };

    case "SEARCH_COUNTRIE":
      return {
        ...state,
        countries: action.payload,
        page: 1,
      };

    case "SET_CURRENT_PAGE":
      return {
        ...state,
        page: action.payload,
      };

    case "ACTIVITY_BY_NAME":
      let filtA = state.activities.filter((ele) =>
        ele.countries.map((ele = ele.name))
      );
      let filtB = filtA.filter((ele) => ele.action.payload);
      return {
        ...state,
        Countries: filtB,
      };

    case "FILTER_ACTIVITIE":
      const allCountries2 = state.allCountries;
      const activitiesFiltered =
        action.payload === "default"
          ? allCountries2
          : allCountries2.filter(
              // (ele) => console.log(ele.activities[0].name, "PAYLOAD")
              (ele) => ele.activities[0]?.name.includes(action.payload)
            );

      return {
        ...state,
        countries: activitiesFiltered,
      };

    case "FILTER_CONTINENT":
      const allCountries3 = state.allCountries;
      console.log(allCountries3, "cntinent");
      const countriesFiltered =
        action.payload === "default"
          ? allCountries3
          : allCountries3.filter((ele) => ele.continent === action.payload);
      return {
        ...state,
        countries: countriesFiltered,
      };

    case "ORDER_AZ":
      let currentCountries = [...state.allCountriesAux];
      if (action.payload === "default") {
        return {
          ...state,
          countries: currentCountries,
        };
      }

      const aux = [...state.countries];
      if (action.payload === "asc") {
        console.log(aux);
        aux.sort((a, b) => (a.name < b.name ? -1 : 1));
        currentCountries = aux;
      }
      if (action.payload === "dsc") {
        aux.sort((a, b) => (a.name > b.name ? -1 : 1));
        currentCountries = aux;
      }
      return {
        ...state,
        countries: currentCountries,
      };

    case "FILTER_POPULATION":
      let currentCountries2 = [...state.allCountriesAux];
      if (action.payload === "default") {
        return {
          ...state,
          countries: currentCountries2,
        };
      }

      const aux2 = [...state.countries];
      if (action.payload === "min") {
        console.log(aux2);
        aux2.sort((a, b) => (a.population < b.population ? -1 : 1));
        currentCountries2 = aux2;
      }
      if (action.payload === "max") {
        aux2.sort((a, b) => (a.population > b.population ? -1 : 1));
        currentCountries2 = aux2;
      }
      return {
        ...state,
        countries: currentCountries2,
      };
    case "GET_COUNTRIES_DETAILS":
      return {
        ...state,
        details: action.payload,
      };
    case "CLEAN_CACHE":
      return {
        ...state,
        details: [],
      };
    default:
      return state;
  }
}
