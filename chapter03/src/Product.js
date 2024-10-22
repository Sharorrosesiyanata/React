import React, { Component } from 'react';

//here we have our class which is product and is extending to component
class Products extends Component {
    render() {
        const products = [
            "Learn React",
            "Pro React",
            "Beginning React"
        ];
        const listProducts = products.map((product) =>
            <li key={product.toString()}>{product}</li>
        );
        return (
            <div>
                <h2>Products</h2>
                <ul>{listProducts}</ul>
            </div>
        );
    }
}

export default Products;