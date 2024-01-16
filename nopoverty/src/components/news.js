import "./homeTitle.css"
import { Component } from "react";

class NewsData extends Component {
    render() {
        return (
            <div className="news-data">
                <img className="titleImge" alt="imger" src={this.props.img} />
                <p>{this.props.date}</p>
                <h2> {this.props.head} </h2>
                <p> {this.props.text} </p>
            </div>
        )
    }
}

export default NewsData;