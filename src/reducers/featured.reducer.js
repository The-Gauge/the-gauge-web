import { featuredConstants,  } from "../actions/constants";


const initState = {
    articles: [],
    loading: false,
    error: null,
    requested: false
}

export default (state = initState, action) => {
    switch (action.type) {
      case featuredConstants.GET_FEATURED_REQUEST:
        state = {
          ...state,
          loading: true,
        };
        break;
      case featuredConstants.GET_FEATURED_SUCCESS:
        state = {
          ...state,
          loading: false,
          articles: action.payload.articles,
          requested: true
        };
        break;
      case featuredConstants.GET_FEATURED_FAILURE:
        state = {
          ...state,
          loading: false,
          error: action.payload.error
        };
        break;
    }
    return state;

}