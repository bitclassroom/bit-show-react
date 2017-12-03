import React, { Component } from 'react';

class Navigation extends Component {
    render() {
        return (
            <div className="light-blue darken-4 z-depth-1">
                <div className="container">
                    <nav className="light-blue darken-4 z-depth-0">
                        <div className="nav-wrapper">
                            <a href="#" className="brand-logo white-text">Logo</a>
                            <ul className="hide-on-med-and-down right">
                                <li>
                                    <div className="center row">
                                        <div className="col s12 " >
                                            <div className="row" id="topbarsearch">
                                                <div className="input-field col s6 s12 white-text">
                                                    <i className="white-text material-icons prefix">search</i>
                                                    <input type="text" placeholder="search" id="autocomplete-input" className="autocomplete white-text" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Navigation;