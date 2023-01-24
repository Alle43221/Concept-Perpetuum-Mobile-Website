import "./NavigationBar.css"
import {NavLink} from "react-router-dom";


function NavigationBar() {
    return (
        <div className="NavigationBar">
            <h1 className="TeamName">Perpetuum Mobile</h1>
            <div className="NavigationOptions">
                <NavLink to={"/"}><h1>Home</h1></NavLink>
                <NavLink to={"/events"}><h1>Events</h1></NavLink>
                <NavLink to={"/sponsors"}><h1>Sponsors</h1></NavLink>
                <NavLink to={"/contact"}><h1>Contact</h1></NavLink>
            </div>
        </div>
    )
}

export default NavigationBar
