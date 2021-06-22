import axios from "../helpers/axios";
import { sideGridConstants } from "./constants";



export const getSideGridArticles = () => {
    return async dispatch => {
        dispatch({ type: 
            sideGridConstants.GET_SIDEGRIDS_REQUEST
        });
        const res = await axios.get(`articles/sideGrid`);
        console.log(res);
        if(res.status === 200){

            const  articles  = res.data;

            dispatch({
                type: sideGridConstants.GET_SIDEGRIDS_SUCCESS,
                payload: { categories: articles }
            });
        }else{
            dispatch({
                type: sideGridConstants.GET_SIDEGRIDS_FAILURE,
                payload: { error: "Could not Fetch data" }
            });
        }
    }
}

