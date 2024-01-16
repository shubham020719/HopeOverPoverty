import "./youtube.css";
import { Component } from "react";

class Youtube extends Component {
    render() {
        return (
            <div className="yuotube-div">
                <h1> {this.props.title} </h1>
                <p> {this.props.text} </p>
                <iframe width="75%" height="415" src={this.props.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        )
    }
}
export default Youtube;