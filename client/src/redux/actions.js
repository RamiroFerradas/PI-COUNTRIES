import axios from "axios";

export function getCountries() {
  return async function (dispatch) {
    try {
      let json = (await axios(`http://localhost:3001/countries`)).data;
      return dispatch({
        type: "GET_COUNTRIES",
        payload: json,
      });
    } catch (error) {}
  };
}
