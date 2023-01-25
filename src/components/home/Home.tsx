import "./Home.css"

function  Home(){
    return (
        <div className={"Home"}>
            <div className={"Section1"}>
            <img className="Logo" alt="" src="/logoechipa.svg"></img>
            <div className={"Slideshow"}>
                <img alt="" src={"/pictures/image2.jpg"} className={""}></img>
                <a className="prev" >&#10094;</a>
                <a className="next" >&#10095;</a>
            </div>
            </div>
        </div>
    )
}

export default Home