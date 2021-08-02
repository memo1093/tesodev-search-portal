import {
  CHANGE_PAGE,
  GET_ALL_USERS,
  ORDER_BY,
  SEARCH_USERS,
} from "../actions/userActions";

const initialState = {
  users: {},
  searchResults: {
    users: {},
    searchText: "",
    totalPages: 1,
    currentPage: 1,
    orderBy: "Name Ascending",
  },
};

export default function userReducer(state = initialState, { payload, type }) {
  switch (type) {
    case GET_ALL_USERS:
      return {
        ...state,
        users: payload,
      };
    case SEARCH_USERS:
      return {
        ...state,
        searchResults: {
          ...state.searchResults,
          users: [
            ...state.users.data
              .filter(
                (user) =>
                  user[0].includes(payload) ||
                  user[2].includes(payload) ||
                  user[3].includes(payload) ||
                  user[4].includes(payload) ||
                  user[5].includes(payload)
              ),
          ],
          searchText: payload,
          totalPages: Math.ceil(
            state.users.data.filter(
              (user) =>
                user[0].includes(payload) ||
                user[2].includes(payload) ||
                user[3].includes(payload) ||
                user[4].includes(payload) ||
                user[5].includes(payload)
            ).length / 5
          ),
          currentPage: 1,
        },
      };
    case CHANGE_PAGE:
      return {
        ...state,
        searchResults: {
          ...state.searchResults,
          currentPage: payload,
        },
      };
      case ORDER_BY:
        return {
          ...state,
          searchResults: {
            ...state.searchResults,
            users:[
              
              ...state.searchResults.users.sort((a,b)=>sortBy(a,b,payload))
              
            ],
            orderBy:payload
          },
        };

    default:
      return state;
  }
}

const sortBy=(a,b,orderBy)=> {
  if (orderBy==='Name Ascending')
      return nameAscending(a,b)
  if(orderBy==='Name Descending')
   return nameDescending(a,b)
  if(orderBy==='Year Ascending')
  return  yearAscending(a,b)
  if(orderBy==='Year Descending')
  return  yearDescending(a,b)
  
}
const nameAscending=(a, b)=>{
let nameA = a[0].toUpperCase();
let nameB = b[0].toUpperCase();
return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
}
const nameDescending=(a, b)=> {
  let nameA = a[0].toUpperCase();
  let nameB = b[0].toUpperCase();
return nameA > nameB ? -1 : nameA < nameB ? 1 : 0;
}
const yearAscending=(a, b)=> {
  let yearA = a[3].slice(a[3].lastIndexOf("/") + 1, a[3].length);
  let yearB = b[3].slice(b[3].lastIndexOf("/") + 1, b[3].length);
return yearA < yearB ? -1 : yearA > yearB ? 1 : 0;
}
const yearDescending=(a, b)=> {
  let yearA = a[3].slice(a[3].lastIndexOf("/") + 1, a[3].length);
  let yearB = b[3].slice(b[3].lastIndexOf("/") + 1, b[3].length);
return yearA > yearB ? -1 : yearA < yearB ? 1 : 0;
}

