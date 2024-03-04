import React, { useEffect, useState } from 'react';
import './Products.css';


function Products(props) {
    const [products, setProducts] = useState({ flag: false, productList: null });

    async function getDown() {
        let backend_url = "http://localhost:3300/products";
        let response = await fetch(backend_url);
        let responseData = await response.json();
        console.log(responseData)
        setProducts({ flag: true, productList: responseData['productItems'] });
    }
    useEffect(() => { getDown() }, []);

    return ((products.flag) ?
        <div className="products-container">
            <div className="products">
                {products.productList.map(item => {
                    return (
                        <div className="card" key={item.name}>
                            <div>
                                <img className='product-image' src={item.image} alt='img' />
                            </div>

                            <div>
                                <h2 className='product-name'>
                                    {item.name}
                                </h2>
                            </div>
                            <div className='product-price'>
                                Rs.{item.price}/-
                            </div>
                            <div>
                                <button className='product-add-button' onClick={() => { props.handleAddProduct(item) }} >Add To Cart</button>
                            </div>
                        </div>
                    )
                }

                )}
            </div>

        </div> : <div>Loading...</div>
    )
}


















// <div className='products-container'>
//         <div className="products">
//             {products.productList.map(item => {
//                 return (
//                     <div className="classname" key={item.name}>
//                         <div>
//                             <img className='product-image' src={item.image} alt={item.image}></img>
//                             <div />
//                             <div>
//                                 <h2 className='product-name'>
//                                     {item.name}
//                                 </h2>
//                                 <div />
//                             </div>

//                         </div>
//                     </div>

//             )
//         }
//     }


export default Products
