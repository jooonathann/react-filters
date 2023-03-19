const initialState = {
  name: [],
  lastname: [],
  age: [],
  favoritecolor: [],
  country: [],
  hobbie: [],
};

export default function categoriesInUseReducer(state = initialState, action) {
  switch (action.type) {
    case "categories/addToName": {
      return {
        ...state,
        name: [...state.name, action.payload],
      };
    }
    case "categories/deleteFromName": {
      return {
        ...state,
        name: [...state.name.filter((el) => el !== action.payload)],
      };
    }

    case "categories/addTolastname": {
      return {
        ...state,
        lastname: [...state.lastname, action.payload],
      };
    }
    case "categories/deleteFromlastname": {
      return {
        ...state,
        lastname: [...state.lastname.filter((el) => el !== action.payload)],
      };
    }

    case "categories/addToage": {
      return {
        ...state,
        age: [...state.age, action.payload],
      };
    }
    case "categories/deleteFromage": {
      return {
        ...state,
        age: [...state.age.filter((el) => el !== action.payload)],
      };
    }

    case "categories/addTofavoritecolor": {
      return {
        ...state,
        favoritecolor: [...state.favoritecolor, action.payload],
      };
    }
    case "categories/deleteFromfavoritecolor": {
      return {
        ...state,
        favoritecolor: [
          ...state.favoritecolor.filter((el) => el !== action.payload),
        ],
      };
    }

    case "categories/addTocountry": {
      return {
        ...state,
        country: [...state.country, action.payload],
      };
    }
    case "categories/deleteFromcountry": {
      return {
        ...state,
        country: [...state.country.filter((el) => el !== action.payload)],
      };
    }

    case "categories/addTohobbie": {
      return {
        ...state,
        hobbie: [...state.hobbie, action.payload],
      };
    }
    case "categories/deleteFromhobbie": {
      return {
        ...state,
        hobbie: [...state.hobbie.filter((el) => el !== action.payload)],
      };
    }
    case "categories/clearCategories": {
      return initialState;
    }

    default:
      return state;
  }
}
