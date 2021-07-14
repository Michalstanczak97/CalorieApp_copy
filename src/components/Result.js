import React from 'react';
import '../scss/result.scss'

const Result = ({finishResult}) => {

        const protein = () => {
            let sum;
            sum = Math.floor((finishResult * 0.25) / 4);
            return sum;
        }
    const carbs = () => {
        let sum;
        sum = Math.floor((finishResult * 0.5) / 4);
        return sum;
    }
    const fat = () => {
        let sum;
        sum = Math.floor((finishResult * 0.25) / 9);
        return sum;
    }


    return (
        <div className="result__background">
            <div className="result__container">
            <div className="result">
                <h1>Twoje zapotrzebowanie:</h1>
                <h2>{finishResult} kcal</h2>
            </div>
             <hr/>
             <div className="macro__container">
                <div className="macro">
                <h1>Białko</h1>
                <h2>{protein()}</h2>
                </div>
                <hr/>
                <div className="macro">
                    <h1>Węglowodany</h1>
                    <h2>{carbs()}</h2>
                </div>
                <hr/>
                <div className="macro">
                    <h1>Tłuszcz</h1>
                    <h2>{fat()}</h2>
                </div>
             </div>
            </div>
        </div>

);
}

export default Result;