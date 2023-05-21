import React from 'react';
import {useDispatch} from "react-redux";

const BasketCard = ({el}) => {
    const dispatch = useDispatch()
    const delBasket = () => {
        dispatch({type: "DEL_BASKET", payload: el})
    }
    const addBasket = () => {
        dispatch({type: "ADD_BASKET", payload: el})
    }
    const decBasket = () => {
        dispatch({type: "DEC_BASKET", payload: el})
    }

    return (
        <tr className=" bg-white my-5 border-b dark:bg-gray-900 dark:border-gray-700">
            <th scope="row" className=" flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <img src={el.images} width="100" className="rounded-2xl"/>
            </th>
            <td className="px-6 py-4">
                {el.title}
            </td>
            <th className=" px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <div className="flex items-center">
                    <button  onClick={decBasket} >-</button>
                    <p className="mx-2">{el.count}</p>
                    <button onClick={addBasket} >+</button>
                </div>
            </th>
            <td className="px-6 py-4">
                {el.price * el.count}$
            </td>
            <td className="px-6 py-4">
                <button
                    onClick={delBasket}
                    className="bg-cyan-400 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    delete
                </button>
            </td>
        </tr>

    );
};

export default BasketCard;