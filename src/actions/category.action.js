import axios from "../helpers/axios";
import { categoriesConstants } from "./constants";


export const getAllCategory = () => {
    return async dispatch => {
        dispatch({ type: 
            categoriesConstants.GET_CATEGORIES_REQUEST
        });
        const res = await axios.get(`category/getcategory`);
        console.log(res);
        if(res.status === 200){

            const { categoryList } = res.data;

            dispatch({
                type: categoriesConstants.GET_CATEGORIES_SUCCESS,
                payload: { categories: categoryList }
            });
        }else{
            dispatch({
                type: categoriesConstants.GET_CATEGORIES_FAILURE,
                payload: { error: "Could not Fetch data" }
            });
        }
    }
}

