import {FC} from "react";
import NavigationBar from "./navigation-bar/NavigationBar";
import {Outlet} from "react-router-dom";
import Footer from "./footer/Footer";
import CoffeeButton from "./coffee-button/CoffeeButton";
import "./Layout.css"


const Layout: FC = () => {
    return (
        <>
            <NavigationBar/>
            <CoffeeButton/>
            <div className={"ContentHeight"}>
                <Outlet/>
            </div>
            <Footer/>
        </>
    );
}

export default Layout;
