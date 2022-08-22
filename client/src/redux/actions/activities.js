import axios from "axios";

export function getActivities() {
  return async function (dispatch) {
    try {
      let json = (await axios(`http://localhost:3001/activities`)).data;
      return dispatch({
        type: "GET_ACTIVITIES",
        payload: json,
      });
    } catch (error) {
      console.error(
        error.message,
        "error en el pedido de todos las activities: actions"
      );
    }
  };
}
