import Navbar from "../components/navbar"
import "./signup.css"
import { Link, useNavigate } from "react-router-dom"

function Signup() {
    let navigate = useNavigate();
    return (
        <>
            
            <Navbar />
            <div className="loginImg">
                <img src="https://images.unsplash.com/photo-1604403428907-673e7f4cd341?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="LoginImage" />

            </div>
            <div className="loginCard">
                <h2>SIGNUP</h2>

                <input placeholder="Username" />
                <input placeholder="Password" />
                <button onClick={() => {
                    navigate('/')
                }} >Submit</button>
                <p><Link to="/login"> Already have an account? LOGIN </Link></p>
            </div>

        </>
    )
}

export default Signup;