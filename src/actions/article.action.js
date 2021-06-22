import axios from "../helpers/axios";
import { articleConstants  } from "./constants";

export const getArticleById = (id) => {
    return async dispatch => {
        dispatch({ type: 
            articleConstants.GET_ARTICLE_FAILURE
        });
        const res = await axios.get(`/article/${id}`);
        console.log(res);
        if(res.status === 200){

            const { article } = res.data;

            dispatch({
                type: articleConstants.GET_ARTICLE_SUCCESS,
                payload: { data: article }
            });
        }else{
            dispatch({
                type: articleConstants.GET_ARTICLE_FAILURE,
                payload: { error: "Could not Fetch data" }
            });
        }
    }
}

