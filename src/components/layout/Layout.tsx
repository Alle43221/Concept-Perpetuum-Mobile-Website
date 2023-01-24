import {FC} from "react";
import NavigationBar from "./navigation-bar/NavigationBar";
import {Outlet} from "react-router-dom";
import Footer from "./footer/Footer";
import CoffeeButton from "./coffee-button/CoffeeButton";


const Layout: FC = () => {
    return (
        <>
            <NavigationBar/>
            <CoffeeButton/>
            <div style={{height: "68.5vh"}}>
                <Outlet/>
            </div>
            <Footer/>
        </>
    );
}

export default Layout;
