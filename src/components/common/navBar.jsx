import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import categoriesActions from '../../redux/actions/categories.action'
import '../../styles/css/navBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
// import { Redirect } from 'react-router'
import Spinner from './spinner';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.props.categoriesActions()
        this.state = {
            search: '',
            link: '',
            cartBtn: false
        }
        this.confirmCart()
    }
    mapCategories(categories) {
                const categoryArray = categories.map(category => (
                <li><a href="#contact">{category.name}</a></li>
            ))
            return categoryArray
    }

     handleChange = e => {
    this.setState({ search: e.target.value });
  };

  confirmCart = () => {
      const cartId = localStorage.getItem('cartID')
      if (cartId !== null) {
          this.state.cartBtn = true
      }
  }

  cartBtnShow = () => {
      return (
          <Link to="/cart">
                        <FontAwesomeIcon icon={faCartArrowDown} />
            </Link>
      )
  } 

    search = (event) => {
        event.preventDefault();
        this.state.link = `/search?term=${this.state.search}`
        console.log(this.state.link)
        if (this.state.search !== '') { 
        return window.location.assign(this.state.link)
        }
        }
    render() {
        const { categories } = this.props
        let categoriesArray
        if (categories !== undefined) {
           categoriesArray = categories
        return (
            <div className="topnav" id="myTopnav">
                <Link to="/" id='brand'>SHOPMATE</Link>
                <div className='menu'>
                    <div className='search-field'>
                        <form className='search_form' onSubmit={this.search}>
                            <input className='search' type='text' placeholder='search shop mate' onChange={this.handleChange} value={this.state.search} />
                            <button className='search-btn' type='submit' value='search'>
                                <FontAwesomeIcon icon={faSearch} />
                            </button>
                        </form>
                    </div>
                    {categoriesArray.length >0 ? this.mapCategories(categoriesArray): ''}
                    {this.state.cartBtn === true ? this.cartBtnShow() : ''}
                    <Link to="/login">
                        <FontAwesomeIcon icon={faUser} />
                    </Link>
                </div>
            </div>
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
    categories: state.categories
})

export default connect(
    mapStateToProps, { categoriesActions })(NavBar);