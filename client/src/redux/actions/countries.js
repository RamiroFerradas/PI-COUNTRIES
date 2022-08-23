import axios from "axios";

export function getCountries() {
  return async function (dispatch) {
    try {
      let json = (await axios(`http://localhost:3001/countries`)).data;
      return dispatch({
        type: "GET_COUNTRIES",
        payload: json,
      });
    } catch (error) {
      console.error(
        error.message,
        "error en el pedido de todos los countries: actions"
      );
    }
  };
}

export function getCountriesDetails(id) {
  return async function (dispatch) {
    try {
      let json = (await axios(`http://localhost:3001/countries/${id}`)).data;
      return dispatch({
        type: "GET_COUNTRIES_DETAILS",
        payload: json,
      });
    } catch (error) {
      console.error(
        error.message,
        "error en el pedido de todos los countries: actions"
      );
    }
  };
}

export function searchCountrieGlobal(name) {
  return {
    type: "SEARCH_COUNTRIE_GLOBAL",
    payload: name,
  };
}

export function searchCountrie(name) {
  return async function (dispatch) {
    try {
      let json = (await axios(`http://localhost:3001/countries?name=${name}`))
        .data;

      return dispatch({
        type: "SEARCH_COUNTRIE",
        payload: json,
      });
    } catch (error) {
      console.error(error, "Error en la busqueda: actions");
      alert(error.request.response);
    }
  };
}
