import axios from "axios";
import {type} from "@testing-library/user-event/dist/type";

const initialState = {
    product: [],
}


export const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_PRODUCT": {
            return {...state, product: action.payload}
        }
        default:
            return state
    }
}


export const getProduct = () => async (dispatch) => {
    const url = await axios(`https://api.escuelajs.co/api/v1/products`)
    const {data} = await url
    dispatch({type: "ADD_PRODUCT", payload: data.slice(0,50)})
}


