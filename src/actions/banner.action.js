import axios from "../helpers/axios";
import { bannerConstants } from "./constants";



export const getBannerArticles = () => {
    return async dispatch => {
        dispatch({ type: 
            bannerConstants.GET_BANNER_REQUEST
        });
        const res = await axios.get(`/articles/banner`);
        console.log(res);
        if(res.status === 200){

            const  articles  = res.data.results;

            dispatch({
                type: bannerConstants.GET_BANNER_SUCCESS,
                payload: { articles: articles }
            });
        }else{
            dispatch({
                type: bannerConstants.GET_BANNER_FAILURE,
                payload: { error: "Could not Fetch data" }
            });
        }
    }
}

