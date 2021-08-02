export const GET_ALL_USERS = "GET_ALL_USERS";
export const SEARCH_USERS = "SEARCH_USERS";
export const CHANGE_PAGE = "CHANGE_PAGE";
export const ORDER_BY = "ORDER_BY";

export const getAllUsers = () => {
  return {
    type: GET_ALL_USERS,
    payload: JSON.parse(localStorage?.getItem("users")),
  };
};
export const searchUsers = (searchText) => {
  return {
    type: SEARCH_USERS,
    payload: searchText,
  };
};
export const changePage = (pageNumber) => {
  return {
    type: CHANGE_PAGE,
    payload: pageNumber,
  };
};
export const orderBy = (order) => {
    return {
      type: ORDER_BY,
      payload: order,
    };
  };
