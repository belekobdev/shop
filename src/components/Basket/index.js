import React from 'react';
import {useSelector} from "react-redux";
import BasketCard from "./BasketCard";

const Basket = () => {
    const {basket} = useSelector(state => state.basket)
    const total = basket.reduce((acc, el) => {
        return acc + el.count * el.price
    }, 0)
    return (
        basket.length === 0 ? <h1 className="text-red-600 text-center text-[30px]">NO LIST</h1> :
        <div className="py-5 relative overflow-x-auto shadow-md sm:rounded-lg w-4/5 mx-auto my-5 ">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        img

                    </th>
                    <th scope="col" className="px-6 py-3">
                        Product name

                    </th>
                    <th scope="col" className="px-6 py-3">
                        count

                    </th>
                    <th scope="col" className="px-6 py-3">
                        Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Action
                    </th>
                </tr>
                </thead>
                <tbody>
                {
                    basket.map(el => (
                        <BasketCard el={el}/>
                    ))
                }
                </tbody>
            </table>
            <div>
                <h1 className="text-white text-xl">{total} $</h1>
            </div>
        </div>
    );
};

export default Basket;