import React, { Component } from 'react'
// import $ from 'jquery';
import axios from 'axios';
import { Link } from 'react-router-dom'



class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: ''
        };
        this.handleClick = this.handleClick.bind(this);
    }

    async handleClick(e) {
        e.preventDefault()

        const data = {
            email: 'hayden.nesbit@campusoutreach.org',
            password: 'sankey37'
        };

        await axios.post('http://127.0.0.1:8000/api/login', data)
            .then(response => {
                console.log(response.data.user);
                this.setState({
                    user: response.data.user
                })
            })
            .catch(errors => {
                console.log(errors)
            });

        console.log(this.state.user)
    }

    render() {

        return (
            <div >
                <nav className="navbar navbar-expand-lg navbar-light px-5 pt-3">
                    <Link to={'/dashboard'}>
                        <a id="brand" className="navbar-brand text-light" href="#">good<b>reads</b></a>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <Link to={'/'}>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Home</a>
                                </li>
                            </Link>
                            <li className="nav-item">
                                <a className="nav-link" href="#"></a>
                            </li>
                        </ul>
                        <form>
                            <div class="form-row align-items-center">
                                <div class="col-auto">
                                    <input type="text" class="form-control mb-2" id="inlineFormInput" placeholder="Name"></input>
                                </div>
                                <div class="col-auto">
                                    <input type="text" class="form-control mb-2" id="inlineFormInput" placeholder="Email address"></input>
                                </div>
                                <div class="col-auto">
                                    <button onClick={this.handleClick} type="submit" class="btn btn-secondary mb-2">Sign in</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </nav>

            </div>
        )
    }
}

export default Navbar;