import axios from "../helpers/axios";
import { articlesConstants } from "./constants";



export const searchArticles = (searchTerm) => {

    return async dispatch => {
        dispatch({ type: 
            articlesConstants.CHANGE_SEARCH_TERM,
            payload: {searchTerm}
        });

        dispatch({ type: 
            articlesConstants.GET_ARTICLES_REQUEST
        });
        const res = await axios.get(`/article`
        , {params: {search: searchTerm}}
        );
        console.log(res);
        if(res.status === 200){

            const  {article } = res.data;

            dispatch({
                type: articlesConstants.GET_ARTICLES_SUCCESS,
                payload: { articles: article }
            });
        }else{
            dispatch({
                type: articlesConstants.GET_ARTICLES_FAILURE,
                payload: { error: "Could not Fetch data" }
            });
        }
    }
}

export const getCategoryArticles = (categoryId) => {

    return async dispatch => {
    
        dispatch({ type: 
            articlesConstants.GET_ARTICLES_REQUEST
        });
        const res = await axios.get(`/article/category/${categoryId}`
        );
        console.log(res);
        if(res.status === 200){

            const  {article } = res.data;

            dispatch({
                type: articlesConstants.GET_ARTICLES_SUCCESS,
                payload: { articles: article }
            });
        }else{
            dispatch({
                type: articlesConstants.GET_ARTICLES_FAILURE,
                payload: { error: "Could not Fetch data" }
            });
        }
    }
}

export const resetArticles = () => {
    return dispatch => {
        dispatch({ type: 
            articlesConstants.RESET_ARTICLES
        });
    }
}
    


