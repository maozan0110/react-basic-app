import React from 'react';
import"./product-table.style.css";
import ProductCategoryROW from '../Product-Category-Row/Product-Category-Row.comp';
import ProductROW from '../product-row/Product-row.comp';


const ProductTable = () => {
return ( 

<div className="product-table-container">

<ProductCategoryROW categoryName="Sporting Goods"/>
<ProductROW product={{
    name:"football",
    price:49.99,
    stock:15,

}}/>
<ProductROW product={{
    name:"Baseball",
    price:9.99,
    stock:11,

}}/>
<ProductROW product={{
    name:"Basketball",
    price:29.99,
    stock:0,

}}/>
<ProductCategoryROW categoryName="Electronics"/>
<ProductROW product={{
    name:"Ipodtouch",
    price:99.99,

}}/>
<ProductROW product={{
    name:"Iphone 5",
    price:399.99,

}}/>
<ProductROW product={{
    name:"Nexus 7",
    price:9.99,

}}/>

</div>
);
    
}
export default ProductTable;