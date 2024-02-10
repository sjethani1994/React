import React, { Component } from 'react';
import '../App.css';

class Navbar extends Component {
    state = { clicked: false };

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    };

    render() {
        return (
            <nav>
                <div>
                    <ul id='navbar' className={this.state.clicked ? "navbar active" : "navbar"}>
                        <li>
                            <a className='active' href="index.html"> Home </a>
                        </li>
                        <li>
                            <a href="rest.html"> Food </a>
                        </li>
                        <li>
                            <a href="shop.html"> Market </a>
                        </li>
                        <li>
                            <a href="quest.html"> Questions </a>
                        </li>
                        <li>
                            <a href="contact.html"> Auction </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com">
                                <i className='fab fa-facebook'></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div id='mobile' onClick={this.handleClick}>
                    <i id='bar' className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
            </nav>
        );
    }
}

export default Navbar;
