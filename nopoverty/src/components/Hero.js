import "./Hero.css"

function Hero(props) {
    return (
        <>
            <div className={props.cName}>
                <img atl="heroImg" src={props.img} />
                <div className="hero-text">              
                    <h1>{props.title}</h1>
                    <p>{props.text}</p>
                    <a href={props.url} target="_blank" className={props.buttonClass}> {props.buttonName}</a>
                </div>
          </div>
        </>
    )
}

export default Hero;