import { categoriesConstants } from "../actions/constants"

const initState = {
    categories: [],
    loading: false,
    error: null,
    requested: false
}

export default (state = initState, action) => {
    switch (action.type) {
      case categoriesConstants.GET_CATEGORIES_REQUEST:
        state = {
          ...state,
          loading: true,
        };
        break;
      case categoriesConstants.GET_CATEGORIES_SUCCESS:
        state = {
          ...state,
          loading: false,
          categories: action.payload.categories,
          requested: true
        };
        break;
      case categoriesConstants.GET_CATEGORIES_FAILURE:
        state = {
          ...state,
          loading: false,
          error: action.payload.error
        };
        break;
    }
    return state;

}