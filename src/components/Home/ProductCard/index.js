import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {BsBasketFill} from "react-icons/bs";
import { Link} from "react-router-dom";
import {AiFillHeart} from "react-icons/ai";

const ProductCard = ({el}) => {
    const {value} = useSelector(state => state.value)
    const {basket} = useSelector(state => state.basket)
    const {favorite} = useSelector(state => state.favorite)
    const bas = basket.some(some => some.id === el.id)
    const heart = favorite.some(some => some.id ===  el.id)
    const dispatch = useDispatch()
    const addBasket = () => {
        const baskets = [...basket, {...el, count: 1}]
        localStorage.setItem("basket", JSON.stringify(baskets))
        dispatch({type: "ADD_BASKET", payload: el})
    }
    const addFav = () => {
        const favorites = [...favorite, {...el, count: 1}]
        localStorage.setItem("favorite", JSON.stringify(favorites))
        dispatch({type: "ADD_FAVORITE", payload: el})
    }
    return (
        <>
            {
                el.title.includes(value) ?
                    <div
                        className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img className="rounded-t-lg" src={el.images} alt=""/>
                        </a>
                        <div className="p-5">
                            <h1>
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{el.title}</h5>
                            </h1>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{el.description}</p>
                            <a href="#"
                               className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                {el.price}$
                            </a>
                            {bas ? <Link to={'/basket'}>
                                    <button
                                        className="ml-2.5 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                        <BsBasketFill/>
                                    </button>
                                </Link> :
                                <button
                                    onClick={addBasket}
                                    className="ml-2.5 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                    add
                                </button>}
                            <button
                                onClick={addFav}
                                className="ml-2.5 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                <AiFillHeart className={heart ? "text-red-600" : ""}/>
                            </button>
                        </div>
                    </div>
                    : ""
            }
        </>
    );
};

export default ProductCard;