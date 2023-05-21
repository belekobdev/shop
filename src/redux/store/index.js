import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {ProductReducer} from "../reducers/ProductReducer";
import {BasketReducer} from "../reducers/BasketReducer";
import {FavoriteReducer} from "../reducers/FavoriteReducer";
import {ValueReducer} from "../reducers/ValueReducer";


const rootState = combineReducers({
    main: ProductReducer,
    basket: BasketReducer,
    favorite: FavoriteReducer,
    value: ValueReducer
})

export const store = createStore(rootState, composeWithDevTools(applyMiddleware(thunk)))