import axios from "axios";
export function OrderByAz(payload) {
  return {
    type: "ORDER_AZ",
    payload: payload,
  };
}
export function filterActivities(payload) {
  return {
    type: "FILTER_ACTIVITIE",
    payload: payload,
  };
}

export function filterContinent(payload) {
  return {
    type: "FILTER_CONTINENT",
    payload: payload,
  };
}
export function filters(payload) {
  return {
    type: "FILTERS",
    payload: payload,
  };
}

export function filterActivity(name) {
  return async function (dispatch) {
    const json = await axios.get(
      `http://localhost:3001/activities?name=${name}`
    );
    return dispatch({ type: "ACTIVITY_BY_NAME", payload: json.data });
  };
}
