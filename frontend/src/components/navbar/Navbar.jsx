import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar(props) {
    return (
        <header className='header'>
            <div>
                <h1>
                    <Link to="/" className='logo'>
                        Fruit Kart
                    </Link>
                </h1>
            </div>

            <div className='header-links'>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul>

                <ul>
                    <li>
                        <Link to="/signup">Signup</Link>
                        <i className='fas fa-shopping-cart' />
                        <span className='cart-length'>
                            {props.cartItems.length}
                        </span>
                    </li>
                </ul>

            </div>

            <div >

            </div>
        </header>
    )
}

export default Navbar