import { Component } from "react";
import "./navbar.css";
import { MenuItems } from "./MenuItem"
import { Link } from "react-router-dom"


class Navbar extends Component {
    
    // str = this.props.url;
    state = { clicked: false };
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    // let navigate = useNavigate();
    render() {
        
        return (
            <nav className="NavbarItem">
                <h1 className="Nav-logo">HOPE OVER POVERTY</h1>
                <div className="menu-icons" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"} >
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link to={item.url} className={item.cName}>
                                    <i className={item.icon}></i>
                                    {item.title}
                                </Link>
                            </li>
                        )
                    })}

                    <button >
                        <Link className="Linkup" to="/signup">
                            SIGNUP
                        </Link>
                           
                    </button>

                </ul>

            </nav>
        )
    }
}
export default Navbar;