import { articlesConstants,} from "../actions/constants";

const initState = {
    searchTerm: null,
    articles: [],
    loading: false,
    error: null,
    requested: false
}

export default (state = initState, action) => {
    switch (action.type) {
        case articlesConstants.CHANGE_SEARCH_TERM:
            state = {
              ...state,
              searchTerm: action.payload.searchTerm
            };
            break;
      case articlesConstants.GET_ARTICLES_REQUEST:
        state = {
          ...state,
          loading: true,
        };
        break;
      case articlesConstants.GET_ARTICLES_SUCCESS:
        state = {
          ...state,
          loading: false,
          articles: action.payload.articles,
          requested: true
        };
        break;
      case articlesConstants.GET_ARTICLES_FAILURE:
        state = {
          ...state,
          loading: false,
          error: action.payload.error
        };
        break;
        case articlesConstants.RESET_ARTICLES:
          state = initState;
          break;
    }
    return state;

}