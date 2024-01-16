import { Component } from "react";
import "./homeTitle.css";
class TitleData extends Component{
    render() {
        return ( 
            <div className="fisrt-title">
                <div className="des-text">
                    <h2> {this.props.heading} </h2>
                    <p> {this.props.text} <br></br>
                        Find out how you get involved at <a href="globalgoals.org/halftime">here</a> or explore more about each of the Global Goals below.
                    </p>
                </div>
                <div className="title-img">
                    <img alt="img" src={this.props.img1} className="hoverImg" />
                    <img alt="img" src={this.props.img2} />
                </div>
            </div>
        )
    }
}

export default TitleData;