export function setCurrentPage(payload) {
  return {
    type: "SET_CURRENT_PAGE",
    payload: payload,
  };
}

export function cleanCache(payload) {
  return {
    type: "CLEAN_CACHE",
    payload,
  };
}

export function countriesPerPage(payload) {
  return {
    type: "COUNTRIES_PER_PAGE",
    payload,
  };
}
