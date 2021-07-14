import React, {useState} from 'react';
import '../scss/product.scss'

const Product = ({productData, clearDataProduct, setProductsList}) => {
    const [defaultProductData, setNewProductData] = useState(productData)


    const changeGrammage = (e) => {
        let newGrammage = parseInt(e.target.value) || 0;
        setProductsList(prev => prev.map((el, key) => {
            return key === productData.productId ? {
                ...el,
                serving_size_g: newGrammage,
                calories: defaultProductData.calories * (0.01 * newGrammage),
                protein_g: defaultProductData.protein_g * (0.01 * newGrammage),
                carbohydrates_total_g: defaultProductData.carbohydrates_total_g * (0.01 * newGrammage),
                fat_total_g: defaultProductData.fat_total_g * (0.01 * newGrammage)
            }: el
            })
        )}



    return (
        <li>
            <div className="paragraph">
            <input value={productData.serving_size_g} className="grammage" onChange={changeGrammage}/>
            <p>g</p>
            </div>
            <div className="item">
                <h5>{productData.name}</h5>
                <div className="schedule">
                    <p>Kcal: {productData.calories}</p>
                    <p>Białko: {productData.protein_g}g</p>
                    <p>Węglowodany: {productData.carbohydrates_total_g}g</p>
                    <p>Tłuszcze: {productData.fat_total_g}g</p>
                </div>
            </div>
            <div className="button__container">
                <button className="btn__" onClick={() => clearDataProduct(productData.productId)}>Usuń!</button>
            </div>
        </li>
    );
};

export default Product;