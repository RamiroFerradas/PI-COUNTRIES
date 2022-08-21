const initialState = {
  countries: [],
  allCountries: [],
  page: 1,
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
    default:
      return state;
  }
}
