import React from 'react';
import "./App.css"
import Header from "../Header/Header";
import WorkSpace from "../WorkSpace/WorkSpace";

const App = () => {
    return (
        <div className="wrapper">
            <Header/>
            <WorkSpace className={"workspace"}/>
        </div>
    );
};

export default App;
