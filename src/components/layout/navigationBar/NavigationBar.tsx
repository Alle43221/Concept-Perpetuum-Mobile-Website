import "./NavigationBar.css"


function NavigationBar(){
    return (

        <div className="NavigationBar">
            <h1 className="TeamName">Perpetuum Mobile</h1>
            <div className="NavigationOptions">
                <h1>Home</h1>
                <h1>Events</h1>
                <h1>Sponsors</h1>
                <h1>Contact</h1>
            </div>
        </div>
    )
}

export default NavigationBar