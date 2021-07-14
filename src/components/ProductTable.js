import React, {useEffect, useState} from 'react';
import Result from "./Result";
import '../scss/productTable.scss'
import Product from "./Product";
import '../scss/myChart.scss'
import Chapter from "./Chapter";
import MyChart from "./MyChart";



const ProductTable = ({finishResult}) => {
    const [query, setQuery] = useState("")
    const [productsList, setProductsList] = useState([])
    const [summaryMacro, setSummaryMacro] = useState({
        totalCalories: 0,
        totalProtein: 0,
        totalCarbs: 0,
        totalFat: 0
    });


    useEffect(()=>{
        if (productsList.length > 0) {
            let caloriesSum = productsList.reduce((total, nextP) => {
                console.log(total);
                console.log(nextP.calories);
                return total + nextP.calories;
            },0)
            let proteinSum = productsList.reduce((total, nextP) => {
                return (total + nextP.protein_g)
            },0)
            let carbsSum = productsList.reduce((total, nextP) => {
                return total + nextP.carbohydrates_total_g
            },0)
            let fatSum = productsList.reduce((total, totalP) => {
                return total + totalP.fat_total_g
            },0)
            console.log(caloriesSum)
            setSummaryMacro({...summaryMacro, totalCalories: caloriesSum, totalProtein: proteinSum, totalCarbs: carbsSum, totalFat: fatSum})
            console.log("productsList w useEffect w compontet productTabla");
            console.log(productsList);
        }

    },[productsList])


    const getApi = () => {
        const baseURL = `https://calorieninjas.p.rapidapi.com/v1/nutrition?query=${query}`
        fetch(baseURL, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "7c34178d6dmshf4859ef0c41e4d3p1e8fc5jsnf4195341edbc",
                "x-rapidapi-host": "calorieninjas.p.rapidapi.com"
            }
            })
            .then(response => response.json())
            .then(data => {
                if (data.items.length !== 0) {
                setProductsList(prev => [...prev, data.items[0]])
                }
            })

            .catch(err => {
                console.error(err);
            });

    };

        const getValue = (e) => {
           const inputValue = e.target.value;
           setQuery(inputValue);
        }

    const clearDataProduct = (id) => {
        let newArray = productsList.filter((el,key) => key !== id);
        setProductsList(newArray);
        console.log("productsList w komponencie productTable po użyciu funcji clearDataProduct");
        console.log(productsList)
        console.log(id)
    }



    return (
        <>
        <div>
            <Result finishResult={finishResult}/>
        </div>
    <div className="product__table">
        <div className="your__product_container">
            <div className="search">
                <h1>Policz ile jesz w ciągu dnia</h1>
                <input onChange={getValue} onKeyDown={getValue} type="text" placeholder="wpisz swój produkt po angielsku"/>
            </div>
            <h2>Produkty:</h2>
            <div className="product__list">
                <ul>
                    {productsList.map((product, key) => {
                        return <Product setProductsList={setProductsList} clearDataProduct={clearDataProduct} productData={{...product, productId: key}}/>
                        }
                    )}
                </ul>
                </div>
                <div className="add__cancel__button">
                    <button onClick={getApi} className="btn__">Dodaj Produkt</button>
                </div>
            <div className="summary__table_container">
                <div className="summary__table">
                    <p className="sum">kcal: {summaryMacro.totalCalories}</p>
                    <p className="protein__sum">białko: {summaryMacro.totalProtein}</p>
                    <p className="carbs__sum">węglowodany: {summaryMacro.totalCarbs}</p>
                    <p className="fat__sum">tłuszcz: {summaryMacro.totalFat}</p>
                </div>
            </div>
            </div>
        {/*</div>*/}
        </div>
            <Chapter/>
            <MyChart totalUsedCalories={summaryMacro.totalCalories} necessaryCalories={finishResult} totalUsedProtein={summaryMacro.totalProtein} necessaryProtein={Math.round((finishResult * 0.25) /4)} totalUsedCarbs={summaryMacro.totalCarbs} necessaryCarbs={Math.round((finishResult * 0.5) /4)} totalUsedFat={summaryMacro.totalFat} necessaryFat={Math.round((finishResult * 0.25) /9)} />
        </>
    );
}

export default ProductTable;