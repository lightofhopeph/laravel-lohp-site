import React, { useState, Component } from "react";
import ReactDOM from "react-dom";

export default class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Leftbar />
                <Main />
            </React.Fragment>
        );
    }
}

if (document.getElementById("portal")) {
    ReactDOM.render(<App />, document.getElementById("portal"));
}
