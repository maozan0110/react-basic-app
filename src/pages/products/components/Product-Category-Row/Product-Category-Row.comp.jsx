import React from 'react';
import"./Product-Category-Row.style.css";


const ProductCategoryROW = (props) => {
return ( 

<div className="product-category-row-container">
{props.categoryName}
</div>

);
    
}
export default ProductCategoryROW;