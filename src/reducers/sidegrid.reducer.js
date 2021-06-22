import { sideGridConstants } from "../actions/constants";


const initState = {
    articles: [],
    loading: false,
    error: null,
    requested: false
}

export default (state = initState, action) => {
    switch (action.type) {
      case sideGridConstants.GET_SIDEGRIDS_REQUEST:
        state = {
          ...state,
          loading: true,
        };
        break;
      case sideGridConstants.GET_SIDEGRIDS_SUCCESS:
        state = {
          ...state,
          loading: false,
          articles: action.payload.categories,
          requested: true
        };
        break;
      case sideGridConstants.GET_SIDEGRIDS_FAILURE:
        state = {
          ...state,
          loading: false,
          error: action.payload.error
        };
        break;
    }
    return state;

}