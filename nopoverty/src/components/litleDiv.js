import "./homeTitle.css"
import { Component } from "react";

class LitleData extends Component {
    render() {
        return(
            <div>
                <h2> {this.props.head} </h2>
                <p> {this.props.Text} </p>
                <button className="LitleDataButton" > <a href="https://worldslargestlesson.globalgoals.org/">START LEARNING
                </a> </button>
            </div>
            )
     }
}

export default LitleData