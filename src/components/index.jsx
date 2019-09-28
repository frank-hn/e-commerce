/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component, Fragment } from 'react'
import NavBar from './common/navBar';
import '../styles/css/index.css'
import image from '../styles/images/hey.jpg'
import Products from './Products';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
      articlePerPage: 4,
         }
    }

    handleClick = event => {
    this.setState({
      currentPage: Number(event.target.id),
    });
  };
    
    render() { 
        return (
            <Fragment >
                <NavBar />
                <div className='HomeImage'>
                    <img id='welcomeImage' src={image} alt='home' />
                </div>
                <div className='container'>
                    <p className='homeCardTitle'>
                    <FontAwesomeIcon icon={faAlignJustify} />
                    <span className='homeCardTitle'> <select className="select-category">
                      <option>Featured</option>
                      <option>Featured</option>
                      <option>Featured</option>
                    </select></span>
                    </p>
                    
                    <Products />
                </div>
        </Fragment>
        );
    }
}
 
export default Index;