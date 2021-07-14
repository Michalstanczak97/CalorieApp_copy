import React, {useEffect, useState} from 'react';
import '../scss/calculator.scss'
import {logDOM} from "@testing-library/react";
import history from "./history";
const Calculator = ({getResult}) => {
    const [error, setError] = useState({
        weight_error: false,
        sex_error: false,
        height_error: false,
        age_error: false
    })
    const [data, setData] = useState({
        height: "",
        weight: "",
        age: "",
        exercise: 1.2,
        sex: ""
    })
    const clear = () => {
        setData({
            height: "",
            weight: "",
            age: "",
            exercise: "siedzący",
            sex: ""
        })
    }

    useEffect(()=>{
        let result = 0;
        console.log(error)
        if (error.height_error === false && error.weight_error === false && error.age_error === false) {
            if (data.sex === "Mężczyzna") {
                result = (66 + (13.7 * data.weight) + (5 * data.height) - (6.8 * data.age)) * data.exercise;
            } else if(data.sex === "Kobieta") {
                result = (655 + (9.6 * data.weight) + (1.8 * data.height) - (4.7 * data.age)) * data.exercise;
            }    console.log(result)

        }
        getResult(Math.floor(result));

    })


    const handleCount = () => {
    if (data.height <= 0 || data.height > 260) {
        setError(prev => {
            return {
                ...prev,
                height_error: true
            }
        });
        return;
    } if (data.weight <=0 || data.weight > 300) {
        setError(prev=> {
            return {
                ...prev,
                weight_error:true
            }
        });
        return;
    } if (data.age <= 0 || data.age > 100) {
        setError(prev=> {
            return {
                ...prev,
                age_error:true
            }
        })
            return;
        }

        showProductTable()

    }
    const showProductTable = () => {
            history.push("/productTable")
    }
    // toDO use History - zastosować hook

    const handleChange = (e) => {
        e.preventDefault();
        const {name, value} = e.target;
        setData(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
        if (name === "height") {
            setError(prev => {
                return {
                    ...prev,
                    height_error: false
                }
            });
        } if (name === "weight") {
            setError (prev => {
                return {
                    ...prev,
                    weight_error: false
                }
            })
        } if (name === "age") {
            setError (prev => {
                return {
                    ...prev,
                    age_error: false
                }
            })
        }
    }


    return (
        <div className="calculator">
            <div className="calculator__container">
            <h1>Oblicz swoje zapotrzebowanie kaloryczne</h1>
            <div className="calculator__container_small">
            <div className="param">
                <h2>Ile masz wzrostu i ile ważysz?</h2>
                <div className="input">
                <input className={error.height_error ? "error":""} name="height" value={data.height} onChange={handleChange} type="number" placeholder="wzrost w cm"/>
                {/*{error.height_error ? {error}:""}*/}
                <input className={error.weight_error ? "error":""} name="weight" value={data.weight} onChange={handleChange} type="number" placeholder="waga w kg"/>
                {/*<p>{error.weight_error ? "błąd": ""}</p>*/}
                </div>
            </div>
            <div className="lifestyle">
                <h2>Podaj wiek oraz tryb życia</h2>
                <div className="param2">
                <input className={error.age_error ? "error":""} name="age" value={data.age} onChange={handleChange} type="number" placeholder="wiek"/>
                <p>{error.age_error ? "Twój wiek musi być w przedziale od 0 do 100" : ""}</p>
                <select value={data.exercise} name="exercise" onChange={handleChange} id="activity">
                    <option value={1.2}>siedzący</option>
                    <option value={1.375}>lekko aktywny</option>
                    <option value={1.55}>umiarkowny</option>
                    <option value={1.725}>aktywny</option>
                    <option value={1.9}>bardzo aktywny</option>
                </select>
            </div>
            </div>
            </div>
            <div className="sex">
                <h2>Podaj płeć</h2>
                <div className="sex__container">
                <button onClick={handleChange} value="Mężczyzna" name="sex">Meżczyzna</button>
                <button onClick={handleChange} value="Kobieta" name="sex" >Kobieta</button>
                </div>
            </div>

                <div className="submit__container">
                <h2>Oblicz!</h2>
                <div className="submit">
                <button className="btn" onClick={() => handleCount()}>Oblicz!</button>
                <button className="btn" onClick={clear}>Wyczyść!</button>
                </div>
            </div>

            </div>
        </div>
    );
};

export default Calculator;