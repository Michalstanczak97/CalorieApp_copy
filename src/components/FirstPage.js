import React, {useState} from 'react';
import Banner from "./Banner";
import Metabolism from "./Metabolism";
import Chapter from "./Chapter";
import FoodComponents from "./FoodComponents";
import Calculator from "./Calculator";
import Result from "./Result";
import {BrowserRouter as Router} from "react-router-dom";

const FirstPage = ({getResult, finishResult}) => {
    // const [result, setResult] = useState("")
    return (
        <>
    <Banner/>
    <Metabolism/>
    <Chapter/>
    <FoodComponents/>
    <Calculator getResult={getResult}/>
    <Result finishResult={finishResult}/>
        </>
    );
};

export default FirstPage;