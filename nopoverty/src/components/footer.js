import "./footer.css"


const Footer = () => {
    return (
        <div className="footer">
            <div className="top">
                <div>
                    <h1>HOPE OVER POVERTY</h1>
                    <p>THE GLOBAL GOALS</p>
                </div>
                <div>
                    <a href="/">
                        <i className="fa-brands fa-facebook-square"></i>
                        <i className="fa-brands fa-instagram-square"></i>
                        <i className="fa-brands fa-behance-square"></i>
                        <i className="fa-brands fa-twitter-square"></i>
                    </a>
                </div>
            </div>

            <div className="lower">
                <div>
                    <img className="footer-img" alt="img" src="https://www.globalgoals.org/static/images/logo-eba30efeb6af50ec06b4590bac56770b.svg"/>
                </div>
                <div>
                    <h4>NAVIGATION</h4>
                    <a href="/">Home</a>
                    <a href="/">The 17 Goals</a>
                    <a href="/">Take Action</a>
                    <a href="/">News</a>
                    <a href="/">Podcast</a>
                </div>
                <div>
                    <h4>SHORTCUTS</h4>
                    <a href="/">School</a>
                    <a href="/">Business</a>
                    <a href="/">Press</a>
                    <a href="/">Project</a>
                    <a href="/">Contact us</a>
                </div>
                <div>
                    <h4>OTHERS</h4>
                    <a href="/">Term of Services</a>
                    <a href="/">Privacy Policy</a>
                    <a href="/">Licence</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;