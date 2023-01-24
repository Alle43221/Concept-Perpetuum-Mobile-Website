import {FC} from "react";
import NavigationBar from "./navigationBar/NavigationBar";
import {Outlet} from "react-router-dom";
import Footer from "./footer/Footer";


const Layout: FC = () => {
    return (
        <>
            <NavigationBar/>
            <div style={{height: "200px"}}>
                <Outlet/>
            </div>
            <Footer/>
        </>
    );
}

export default Layout;
