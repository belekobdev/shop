import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getProduct} from "../../redux/reducers/ProductReducer";
import ProductCard from "./ProductCard";


const Home = () => {
    const dispatch = useDispatch()
    const {product} = useSelector(state => state.main)
    useEffect(() => {
        dispatch(getProduct())
    }, [])


    return (
        <div className="container">

            <div className="flex  flex-wrap gap-24  py-10">
                {
                    product.map((el) => (
                        <ProductCard el={el}/>
                    ))
                }
            </div>
        </div>

    );
};

export default Home;