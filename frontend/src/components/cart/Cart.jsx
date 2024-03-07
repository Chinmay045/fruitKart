import React from 'react';
import './Cart.css';

function Cart(props) {

    const totalPrice = props.cartItems.reduce((price, item) => {
        return price + (item.quantity * item.price)
    }, 0);

    return (
        <div className='cart-items'>
            <h2 className='cart-items-header'>Cart Items</h2>
            <div className='clear-cart'>
                {props.cartItems.length >= 1 && (
                    <button className='clear-cart-button' onClick={props.handleCartClearence}>Clear Cart</button>
                )}
            </div>
            {props.cartItems.length === 0 &&
                <div >
                    No Items are added in the cart
                </div>
            }
            <div >
                {props.cartItems.map(item => {
                    return (<div key={item.id} className='cart-items-list'>
                        <img className='cart-item-image'
                            src={item.image}
                            alt={item.name} />
                        <div className='cart-items-name'>
                            {item.name}
                        </div>
                        <div className='cart-items-function'>
                            <button className='cart-items-add' onClick={() => props.handleAddProduct(item)} >+</button>
                            <button className='cart-items-remove' onClick={() => props.handleRemoveProduct(item)}>-</button>
                        </div>
                        <div className='cart-items-price'>
                            {item.quantity} x Rs.{item.price}
                        </div>
                    </div>)
                })}
            </div>
            <div className='cart-items-total-price-name'>
                Total Price
                <div className='cart-items-total-price'>Rs.{totalPrice}</div>
            </div>
        </div>
    )
}

export default Cart
