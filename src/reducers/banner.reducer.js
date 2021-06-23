import { bannerConstants,  } from "../actions/constants";



const initState = {
    articles: [],
    loading: false,
    error: null,
    requested: false
}

export default (state = initState, action) => {
    switch (action.type) {
      case bannerConstants.GET_BANNER_REQUEST:
        state = {
          ...state,
          loading: true,
        };
        break;
      case bannerConstants.GET_BANNER_SUCCESS:
        state = {
          ...state,
          loading: false,
          articles: action.payload.articles,
          requested: true
        };
        break;
      case bannerConstants.GET_BANNER_FAILURE:
        state = {
          ...state,
          loading: false,
          error: action.payload.error
        };
        break;
    }
    return state;
}