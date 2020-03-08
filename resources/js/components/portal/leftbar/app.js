import React, { useState, Component } from "react";
import ReactDOM from "react-dom";
import Menu from "./menu";
import Header from "./header";
import Footer from "./footer";

export default class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <Menu />
                <Footer />
            </React.Fragment>
        );
    }
}
