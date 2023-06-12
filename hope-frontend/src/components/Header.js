import { Link } from "react-router-dom";
import React, { Component } from "react";
import '../CSS/Header.css';
import { toast } from "react-toastify";
import swal from 'sweetalert';

const logo2 = require("../images/logo.png")
const user = sessionStorage.getItem("doctorId");
const uID = user ?? ' ' 

const name = sessionStorage.getItem("firstName");

export default class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            show: true,
        }
    }

    logout() {
        // sessionStorage.removeItem("token");
        sessionStorage.removeItem("doctorId");
        sessionStorage.removeItem("hospitalName");
        sessionStorage.removeItem("firstName");

        window.location.href = "http://localhost:3000";
        toast.success("Logged out Successfully!! Visit Again!!");
    }

    render() {

        return (
            <nav className="navbar navbar-expand-lg fixed-top " style={{ backgroundColor: "light blue" }}>
                <div className="container" >

                    <div ><Link to={'/'}><img src={logo2} alt="@" width={150} height={80} /></Link></div>

                    <button className="navbar-toggler border border-info text-info"
                        onClick={() => { this.setState({ show: !this.state.show }) }} >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={this.state.show ? 'collapse navbar-collapse' : 'collapse navbar-collapse active'}>

                        <ul className="navbar-nav ms-auto">

                            <li className="nav-item" style={{}}>
                                <Link className="nav-link text-dark" to={'/'} style={{ color: "#1B2430", fontFamily: "Uchen, serif" }}><h5>Home</h5></Link>
                            </li>

                            <li className="nav-item">
                                {uID === ' ' ? <Link className="nav-link text-dark" to={'/signIn'} style={{ color: "#1B2430", fontFamily: "Uchen, serif" }}><h5>Login</h5></Link> : ' '}
                            </li>
                            <li className="nav-item">
                                {uID === ' ' ? ' ' : <Link className="nav-link text-dark" to={'/userProfile'} style={{ color: "#1B2430", fontFamily: "Uchen, serif" }}><h5>Profile</h5></Link> }
                            </li>
                            <li className="nav-item ">
                                {uID === ' ' ? <Link className="nav-link text-dark" to={'/signUp'} style={{ color: "#1B2430", fontFamily: "Uchen, serif" }}><h5>Register</h5></Link> : ' '}
                            </li>

                            <li className="nav-item ">
                                <Link className="nav-link text-dark" to={'/medHistory'} style={{ color: "#1B2430", fontFamily: "Uchen, serif" }}><h5>MedH</h5></Link>
                            </li>

                            {uID === ' ' ? ' ' : <h5 style={{ marginTop: "8px", marginLeft: "2vw", fontFamily: "Georgia, serif", color: "#143F6B" }}> &nbsp;&nbsp;&nbsp;&nbsp;<b>Welcome,&nbsp;{name}</b> </h5>}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                            {uID === ' ' ? ' ' : <Link className="btn btn-danger" onClick={this.logout} to={'/'} type="submit" style={{ height: "5.5vh", }} > Logout </Link>}

                        </ul>
                    </div>
                </div>
            </nav>

        )
    }
}

