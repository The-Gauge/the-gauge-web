import { articleConstants } from "../actions/constants"


const initState = {
    data: null,
    loading: false,
    error: null,
    requested: false
}

export default (state = initState, action) => {
    switch (action.type) {
      case articleConstants.GET_ARTICLE_FAILURE:
        state = {
          ...state,
          loading: true,
        };
        break;
      case articleConstants.GET_ARTICLE_SUCCESS:
        state = {
          ...state,
          loading: false,
          data: action.payload.data,
          requested: true
        };
        break;
      case articleConstants.GET_ARTICLE_FAILURE:
        state = {
          ...state,
          loading: false,
          error: action.payload.error
        };
        break;
    }
    return state;

}