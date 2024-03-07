import React, { useEffect, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import './Products.css';
import { DropdownButton } from 'react-bootstrap';


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

    function sortAlphabetAscending() {
        let productsCopy = [...products.productList];
        let sorted = productsCopy.sort((a, b) => {
            return (a.name.toLowerCase() < b.name.toLowerCase()) ? -1 : 1;
        });
        setProducts({ flag: true, productList: sorted });
    }

    function sortAlphabetDescending() {
        let productsCopy = [...products.productList];
        let sorted = productsCopy.sort((a, b) => {
            return (a.name.toLowerCase() < b.name.toLowerCase()) ? 1 : -1;
        })
        setProducts({ flag: true, productList: sorted });
    }

    function sortPriceAscending() {
        let productsCopy = [...products.productList];
        let sorted = productsCopy.sort((a, b) => a.price - b.price);
        setProducts({ flag: true, productList: sorted })
    }

    function sortPriceDescending() {
        let productsCopy = [...products.productList];
        let sorted = productsCopy.sort((a, b) => b.price - a.price);
        setProducts({ flag: true, productList: sorted })
    }

    return ((products.flag) ?
        <div className="products-container">
            <div className='sort-button'>
                <DropdownButton variant="success" title="Sort By">
                    <Dropdown.Item eventKey='1' onClick={sortAlphabetAscending}>A-Z</Dropdown.Item>
                    <Dropdown.Item eventKey='2' onClick={sortAlphabetDescending}>Z-A</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey='3' onClick={sortPriceAscending}>Low to High</Dropdown.Item>
                    <Dropdown.Item eventKey='4' onClick={sortPriceDescending}>High to Low</Dropdown.Item>
                </DropdownButton>
            </div>

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
