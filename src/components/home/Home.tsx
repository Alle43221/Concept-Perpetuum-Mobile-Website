import "./Home.css"

function  Home(){
    return (
        <div className={"Home"}>
            <div className={"Section1"}>
            <img className="Logo" alt="" src="/logoechipa.svg"></img>
            <div className={"Slideshow"}>
                <img alt="" src={"/pictures/image2.jpg"} className={""}></img>
                <button className="prev" >&#10094;</button>
                <button className="next" >&#10095; </button>
                <div>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Home