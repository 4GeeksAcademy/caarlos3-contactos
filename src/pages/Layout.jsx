import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {

    return (
        <div>
            <header>
                Mi lista de contactos
            </header>

            <main>
                <Outlet />
            </main>
        </div>
    )
};

export default Layout;