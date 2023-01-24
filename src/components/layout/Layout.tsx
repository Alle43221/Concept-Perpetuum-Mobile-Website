import {FC} from "react";
import NavigationBar from "./navigationBar/NavigationBar";
import {Outlet} from "react-router-dom";
import Footer from "./footer/Footer";
import CoffeeButton from "./CoffeeButton/CoffeeButton";


const Layout: FC = () => {
    return (
        <>
            <NavigationBar/>
            <CoffeeButton/>
            <div style={{height: "200px"}}>
                <Outlet/>
            </div>
            <Footer/>
        </>
    );
}

export default Layout;
