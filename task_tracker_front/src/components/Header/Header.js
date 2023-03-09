import React from 'react';
import "./Header.css"

const Header = () => {
    return (
        <div className={"header_wrapper"}>

            <div className={"header_main_menu"}>
                <div className={"header_el_wrapper"}>
                    <a className={"header_el"} href={"/"}> Home </a>
                </div>

                <div className={"header_el_wrapper"}>
                    <a className={"header_el"} href={"/todos"}> My tasks </a>
                </div>
            </div>


            <div className={"header_add_menu"}>
                <div className={"header_el_wrapper"}>
                    <a className={"header_el"} href={'/todos/add'}>Add task</a>
                </div>
            </div>

            <div className={"header_login_menu"}>
                <div className={"header_el_wrapper"}>
                    <a className={"header_el"} href={"/auth"}> Login </a>
                </div>
            </div>

        </div>
    );
};

export default Header;