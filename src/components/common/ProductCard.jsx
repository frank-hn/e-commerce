import React, { Component, Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import '../../styles/css/productCard.css'
import image from '../../styles/images/h.jpg'

class ProductCard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <Fragment >
                    <div className='cardholder'>
                        <div className='card'>
                            <img className='product-image' src={image} alt='' />
                            <div className='product-details'>
                            <p>Tailored Jeans</p>
                            <span className='product-description'>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum.</span>
                            <p className='action'><span className='price-strike'>$50</span><span className='current-price'>$19.99</span><span>
                            <button className='cart-btn'><FontAwesomeIcon icon={faCartPlus} /></button></span></p>
                            </div>
                        </div>
                        <div className='card'>
                            <img className='product-image' src={image} alt='' />
                            <div className='product-details'>
                            <p>Tailored Jeans</p>
                            <span className='product-description'>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum.</span>
                            <p className='action'><span className='price-strike'>$50</span><span className='current-price'>$19.99</span><span>
                            <button className='cart-btn'><FontAwesomeIcon icon={faCartPlus} /></button></span></p>
                            </div>
                        </div>
                        <div className='card'>
                            <img className='product-image' src={image} alt='' />
                            <div className='product-details'>
                            <p>Tailored Jeans</p>
                            <span className='product-description'>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum.</span>
                            <p className='action'><span className='price-strike'>$50</span><span className='current-price'>$19.99</span><span>
                            <button className='cart-btn'><FontAwesomeIcon icon={faCartPlus} /></button></span></p>
                            </div>
                        </div>
                        <div className='card'>
                            <img className='product-image' src={image} alt='' />
                            <div className='product-details'>
                            <p>Tailored Jeans</p>
                            <span className='product-description'>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum.</span>
                            <p className='action'><span className='price-strike'>$50</span><span className='current-price'>$19.99</span><span>
                            <button className='cart-btn'><FontAwesomeIcon icon={faCartPlus} /></button></span></p>
                            </div>
                        </div>
                        <div className='card'>
                            <img className='product-image' src={image} alt='' />
                            <div className='product-details'>
                            <p>Tailored Jeans</p>
                            <span className='product-description'>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum.</span>
                            <p className='action'><span className='price-strike'>$50</span><span className='current-price'>$19.99</span><span>
                            <button className='cart-btn'><FontAwesomeIcon icon={faCartPlus} /></button></span></p>
                            </div>
                        </div>
                        <div className='card'>
                            <img className='product-image' src={image} alt='' />
                            <div className='product-details'>
                            <p>Tailored Jeans</p>
                            <span className='product-description'>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum.</span>
                            <p className='action'><span className='price-strike'>$50</span><span className='current-price'>$19.99</span><span>
                            <button className='cart-btn'><FontAwesomeIcon icon={faCartPlus} /></button></span></p>
                            </div>
                        </div>
                    </div>
        </Fragment>
        );
    }
}
 
export default ProductCard;