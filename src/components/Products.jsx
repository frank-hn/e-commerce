import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import productActions from '../redux/actions/product.actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import image from '../styles/images/h.jpg'
import '../styles/css/productCard.css'
import Spinner from './common/spinner';
import { addToCartAction } from '../redux/actions/addToCart';



class ProductPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            productsPerPage: 12
        }
        this.props.productActions()
    }
    handleClick = event => {
    this.setState({
      currentPage: Number(event.target.id),
    });
  };

  addToCart = (product_id) => {
    let cartID = localStorage.getItem('cartID')
      if (cartID === undefined || cartID === null) {
      cartID = Math.floor(Math.random() * 1000) + 1000;
      localStorage.setItem('cartID', cartID)
      }
      this.props.addToCartAction(product_id)
      console.log(product_id, parseInt(cartID))
  }
    mapProducts(products) {
        const elements = products;
        const { currentPage, productsPerPage } = this.state;

        const indexOfLastProduct = currentPage * productsPerPage;
        const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
        const currentProduct = elements.slice(
            indexOfFirstProduct,
            indexOfLastProduct,
        );
        const productElements = currentProduct.map(item => (
            <div className='card' key={item.id}>
                <img className='product-image' src={image} alt={item.name} />
                <div className='product-details'>
                    <p>{item.name}</p>
                    <span className='product-description'>{item.description.substring(0, 100)}...</span>
                    <p className='action'><span className='price-strike'>{item.price * 2}</span><span className='current-price'>${item.price}</span><span>
                        <button className='cart-btn' type='button' onClick={() => this.addToCart(item.id)}><FontAwesomeIcon icon={faCartPlus} /></button></span></p>
                </div>
            </div>
        ))
        return productElements;
    }
    render() {
        const { products } = this.props.products;
        if (products !== undefined) {

            const pageNumbers = [];
            for (
                let i = 1;
                i <= Math.ceil(products.length / this.state.productsPerPage);
                i += 1
            ) {
                pageNumbers.push(i);
            }

            const renderPageNumbers = pageNumbers.map(number => {
                return (
                    <a
                        key={number}
                        id={number}
                        href="javascript:;"
                        onClick={this.handleClick}
                    >
                        {number}
                    </a>
                );
            });



            return (
                <Fragment>
                    <div className='cardholder'>
                        {this.mapProducts(products)}
                    </div>
                    <div className="paginate-section">
                        <div className="center">
                            <div className="pagination">{renderPageNumbers}</div>
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
} const mapStateToProps = state => ({
    products: state.products
})
export default connect(
    mapStateToProps,
    { productActions, addToCartAction }
)(ProductPage);
