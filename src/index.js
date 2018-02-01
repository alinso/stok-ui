import React from "react";
import  ReactDom from 'react-dom';
import AppNavbar from './component/AppNavbar';
import AppRouter from './AppRouter';


// render NavBar
ReactDom.render(
    <AppNavbar/>,
    document.getElementById("navbar")
);

ReactDom.render(
    <div className="col-md-8">
        <AppRouter/>
    </div>,
    document.getElementById("root")
)

