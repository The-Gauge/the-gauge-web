import axios from "../helpers/axios";
import { featuredConstants,  } from "./constants";



export const getFeaturedArticles = () => {
    return async dispatch => {
        dispatch({ type: 
            featuredConstants.GET_FEATURED_REQUEST
        });
        const res = await axios.get(`/article`
        //, {params: {search: 'first'}}
        );
        console.log(res);
        if(res.status === 200){

            const  {article } = res.data;

            dispatch({
                type: featuredConstants.GET_FEATURED_SUCCESS,
                payload: { articles: article }
            });
        }else{
            dispatch({
                type: featuredConstants.GET_FEATURED_FAILURE,
                payload: { error: "Could not Fetch data" }
            });
        }
    }
}

