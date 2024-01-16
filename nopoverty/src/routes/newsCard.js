import { Component } from "react";
import "./newscard.css"

class NewsCard extends Component {
    render() {
        return (
         
                <div className="newsCard" key={this.props.id} >
                    <img src={this.props.img} alt="cardImage" />
                    <h4>{this.props.title}</h4>
                    <p className="Newstext">{this.props.text}</p>
                    <a className="anchr" href={this.props.url} >
                        <button >Read News</button>
                    </a>
                    <div className="date">
                        <p > Date
                            : {this.props.date}</p>
                    </div>

                </div>

        )
    }
}
export default NewsCard;