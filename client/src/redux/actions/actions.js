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
