import React from 'react';
import"./Product-Row.style.css";


const ProductROW = (props) => {
return ( 

<div className="product-row-container">

{props.product.stock === 0
?
<span className="product-without-stock">{props.product.name}</span>
:
<span>{props.product.name} </span>
}    

{"   "}{props.product.price}
</div>

);
    
}
export default ProductROW;