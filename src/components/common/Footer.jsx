import React, { Component } from 'react';
import '../../styles/css/footer.css'

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="footer">
            <p>this is footer</p>
                <ul className='menu'>
                    <li><a href="#contact">Men</a></li>
                    <li><a href="#contact">Women</a></li>
                    <li><a href="#contact">Kids</a></li>
                    <li><a href="#contact">Shoes</a></li>
                    <li><a href="#contact">Brands</a></li>
                    <li><a href="#contact">search</a></li>
                    <li><a href="#about">Account</a></li>
                </ul>
                  <ul className='menu'>
                    <li><a href="#contact">Men</a></li>
                    <li><a href="#contact">Women</a></li>
                    <li><a href="#contact">Kids</a></li>
                    <li><a href="#contact">Shoes</a></li>
                    <li><a href="#contact">Brands</a></li>
                    <li><a href="#contact">search</a></li>
                    <li><a href="#about">Account</a></li>
                </ul>
                  <ul className='menu'>
                    <li><a href="#contact">Men</a></li>
                    <li><a href="#contact">Women</a></li>
                    <li><a href="#contact">Kids</a></li>
                    <li><a href="#contact">Shoes</a></li>
                    <li><a href="#contact">Brands</a></li>
                    <li><a href="#contact">search</a></li>
                    <li><a href="#about">Account</a></li>
                </ul>
                <ul className='menu'>
                    <ul >
                        <li><a href="#contact">Men</a></li>
                        <li><a href="#contact">Women</a></li>
                        <li><a href="#contact">Kids</a></li>
                    </ul>
                    <ul className='menu'>
                        <li><a href="#contact">Shoes</a></li>
                        <li><a href="#contact">Brands</a></li>
                        <li><a href="#contact">search</a></li>
                        <li><a href="#about">Account</a></li>
                    </ul>
                </ul>
            </div>
        );
    }
}
 
export default Footer;