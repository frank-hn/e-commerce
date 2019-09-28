/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component, Fragment } from 'react'
import NavBar from './common/navBar';
import { connect } from 'react-redux'
import '../styles/css/index.css'
import image from '../styles/images/hey.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Spinner from './common/spinner';
import { CheckCartAction } from '../redux/actions/addToCart'
import {faCartPlus, faCartArrowDown } from '@fortawesome/free-solid-svg-icons';

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.props.CheckCartAction()
    }

    mapProducts = (products) => {
        const productElements = products.map(item => (
            <div className='card' key={item.id}>
                <img className='product-image' src={image} alt={item.name} />
                <div className='product-details'>
                    <p>{item.name}</p>
                    <span className='product-description'>{item.description.substring(0, 100)}...</span>
                    <p className='action'><span className='price-strike'>{item.price * 2}</span><span className='current-price'>${item.price}</span></p>
                </div>
            </div>
        ))
        return productElements;
    }
    render() {
        const { products } = this.props.products;
        if (products !== undefined) {
            return (
                <Fragment>
                <NavBar />
                <div className='container'>
                    <p className='homeCardTitle'>
                    <FontAwesomeIcon icon={faCartArrowDown} />
                    <span className='homeCardTitle'> Available Products in Your Cart</span>
                    <span className='homeCardTitle'>
                        <button type="button"> Checkout</button>
                    </span>
                    </p>
                    <div className='cardholder'>
                        {this.mapProducts(products)}
                    </div>
                    </div>
                </Fragment>
            );
        }
        return (
            <div>
                <Spinner />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    products: state.products
})
export default connect(
    mapStateToProps,
    { CheckCartAction }
)(Cart);