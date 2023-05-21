import React from 'react';
import {useSelector} from "react-redux";
import ProductCard from "../Home/ProductCard";

const Fovorite = () => {
    const {favorite} = useSelector(state => state.favorite)
    return (
        favorite.length === 0 ? <h1 className="text-red-600 text-center text-[30px]">NO LIST</h1> :
            <div className="container">
            <div className="flex  flex-wrap gap-24  py-10">
                {
                    favorite.map((el => (
                        <ProductCard el={el}/>
                    )))
                }
            </div>
        </div>
    );
};

export default Fovorite;