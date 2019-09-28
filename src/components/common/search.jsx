import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import productActions from '../redux/actions/product.actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import image from '../styles/images/h.jpg'
import '../styles/css/productCard.css'
import Spinner from './spinner';



class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            productsPerPage: 12
        }
        this.props.productActions()
    }
    render() {
        const { products } = this.props.products;
        if (products !== undefined) {}
        return (
            <div>
                <Spinner />
            </div>
        )
    }
} const mapStateToProps = state => ({
    products: state.products
})
export default connect(
    mapStateToProps,
    { productActions }
)(Search);
