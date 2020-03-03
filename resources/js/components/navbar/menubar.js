import React, { useState } from "react";
import ReactDOM from "react-dom";

function Menubar() {
    const [open, setStatus] = useState(false);

    const menus = (
        <React.Fragment>
            <a
                href="#services"
                className="uppercase text-white my-2 hover:text-green-500 lg:px-4 py-1 transition duration-500 ease-in-out tracking-wider"
            >
                advocacy
            </a>
            <a
                href="#activities"
                className="uppercase text-white my-2 hover:text-green-500 lg:px-4 py-1 transition duration-500 ease-in-out tracking-wider"
            >
                activities
            </a>

            <a
                href="#patrons"
                className="uppercase text-white my-2 hover:text-green-500 lg:px-4 py-1 transition duration-500 ease-in-out tracking-wider"
            >
                our patron
            </a>
            <a
                href="#getinvolved"
                className="uppercase text-white my-2 hover:text-green-500 lg:px-4 py-1 transition duration-500 ease-in-out tracking-wider"
            >
                get involved
            </a>
        </React.Fragment>
    );

    return (
        <React.Fragment>
            <div className="flex items-center justify-between py-4 ">
                <div>
                    <div>
                        <a href="/">
                            <h1
                                className="text-white hover:text-green-500 text-lg"
                                style={{ fontFamily: "Kaushan Script" }}
                            >
                                Light of Hope Project Philippines
                            </h1>
                        </a>
                    </div>
                </div>
                <div>
                    <div className="hidden lg:flex"> {menus} </div>
                    <button
                        onClick={() => setStatus(!open)}
                        className="text-white p-4 lg:hidden"
                    >
                        {open ? (
                            <i className="fas fa-times"></i>
                        ) : (
                            <i className="fas fa-bars"></i>
                        )}
                    </button>
                </div>
            </div>
            <div className="px-0 pb-2 lg:hidden">
                {open ? (
                    <React.Fragment>
                        <hr />
                        <div className="flex flex-col justify-start text-left pb-4 pl-4 pt-4 ">
                            {menus}
                        </div>
                    </React.Fragment>
                ) : (
                    <React.Fragment></React.Fragment>
                )}
            </div>
        </React.Fragment>
    );
}

export default Menubar;

if (document.getElementById("nav-menu")) {
    ReactDOM.render(<Menubar />, document.getElementById("nav-menu"));
}
