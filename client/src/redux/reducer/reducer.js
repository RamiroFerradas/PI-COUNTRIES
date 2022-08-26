const initialState = {
  countries: [],
  allCountries: [],
  activities: [],
  details: [],
  page: 1,
  countriesPerPage: 10,
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_COUNTRIES":
      return {
        ...state,
        countries: action.payload,
        allCountries: action.payload,
        page: 1,
      };

    case "GET_ACTIVITIES":
      return {
        ...state,
        activities: action.payload,
        page: 1,
      };

    case "SEARCH_COUNTRIE_GLOBAL":
      const filt = [...state.allCountries].filter((ele) =>
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

    case "FILTERS":
      let { activities, continent } = action.payload;

      let allCountries2 = [...state.allCountries];

      if (continent && continent !== "default")
        allCountries2 = allCountries2.filter((c) => c.continent === continent);

      if (activities && activities !== "default")
        allCountries2 = allCountries2.filter((c) => {
          const activities2 = c.activities.filter((acc) => {
            return acc.name === activities;
          });
          return activities2.length ? activities : false;
        });

      return {
        ...state,
        countries: allCountries2,
      };

    case "LIMPIO_COUNTRIE":
      let filtroCreate = [...state.countries].filter(
        (ele) => ele.name !== action.payload
      );

      return {
        ...state,
        countries: filtroCreate,
      };

    case "ADD_COUNTRIE":
      console.log(action.payload, "HOLAAA");
      // let addCountrie = state.countries.push(selector);

      return {
        ...state,
        countries: [...state.countries, action.payload],
      };

    case "ORDER_AZ":
      let currentCountries = [...state.allCountries];
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
        countries:
          action.payload === "default"
            ? [...state.allCountries]
            : currentCountries,
      };

    case "FILTER_POPULATION":
      let currentCountries2 = [...state.allCountries];

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
        countries:
          action.payload === "default"
            ? [...state.allCountries]
            : currentCountries2,
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
    case "COUNTRIES_PER_PAGE":
      return {
        ...state,
        countriesPerPage: action.payload,
      };
    case "POST_COUNTRIE":
      return {
        ...state,
        countries: [...state.countries, action.payload],
      };
    case "DELETE_ACTIVITIES":
      return {
        ...state,
      };

    default:
      return state;
  }
}

// case "FILTER_ACTIVITIE":
//   let allCountries2 = state.allCountries;

//   let filter = allCountries2
//     .filter((ele) => ele.activities.length)
//     .filter((ele) =>
//       ele.activities
//         .map((ele) => Object.values(ele)[0])
//         .includes(action.payload)
//     );
//   // allCountries2 = filter;

//   return {
//     ...state,
//     countries: action.payload === "default" ? allCountries2 : filter,
//   };

// case "FILTER_CONTINENT":
//   let allCountries3 = state.allCountries;

//   const countriesFiltered = allCountries3.filter(
//     (ele) => ele.continent === action.payload
//   );

//   return {
//     ...state,
//     countries:
//       action.payload === "default" ? allCountries3 : countriesFiltered,
//   };
