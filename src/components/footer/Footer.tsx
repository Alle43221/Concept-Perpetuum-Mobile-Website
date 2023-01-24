import "./Footer.css"

function Footer(){
    return (
        <div className="Footer">
            <div className="SocialButtons">
                <a  href="https://www.facebook.com/perpetuummobilefirsttech"><img alt="" src="/facebookicon.png"></img></a>
                <a  href="https://www.instagram.com/perpetuummobileftc/"><img alt="" src="/instagramicon.png"></img></a>
                <a  href=""><img alt="" src="/discordicon.png"></img></a>
                <a  href=""><img alt="" src="/githubicon.png"></img></a>
                <a  href=""><img className="PrintablesIcon" alt="" src="/printablesicon.png"></img></a>
                <a  href=""><img alt="" src="/emailicon.png"></img></a>
            </div>
            <h1>
                Copyright© 2022-2023 Perpetuum Mobile. All rights reserved. Made with 🖤 by <a  href="">Alex David</a> and <a  href="https://github.com/Alle43221">Alexandra Moroz</a>.
            </h1>
        </div>
    )
}

export default Footer