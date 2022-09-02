import axios from "axios";

export function getCountries() {
  return async function (dispatch) {
    try {
      let json = (await axios(`/countries`)).data;
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
      let json = (await axios(`/countries/${id}`)).data;
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
      let json = (await axios(`/countries?name=${name}`)).data;

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
export function postCountrie(payload) {
  return async function (dispatch) {
    try {
      let json = (await axios.post(`/activities`, payload)).data;
      return dispatch({
        type: "POST_COUNTRIE",
        payload: json,
      });
    } catch (error) {
      console.error(error, "Error en el post: actions");
      alert(error.message);
    }
  };
}
