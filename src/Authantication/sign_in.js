import { useState } from "react"
import './sign_in.css';
import { NavLink, useNavigate} from "react-router-dom";
import axios from "axios";

export default function SignIn() {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const navigate = useNavigate()
    const handleEmail = (e) => {
        setemail(e.target.value)
    }
    const handlePassword = (e) => {
        setpassword(e.target.value)
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = `http://192.168.1.18:8000/api/method/sagasuite.customer_api.fetch_value?email_id=${email}`
       ;
        //Get the data from backend
        try {
            const result = await axios.get(url);
            const user = result.data.message[0]
            if (user.email_id === email && user.password === password) {
                if (user.email_id_verified === "1") {
                    navigate('/dashboard');
                } else if (user.email_id_verified === "0") {
                    navigate('/verification',{ state: { email: email } });
                }
            }
            else {
                window.alert("No User please create account")
                navigate('/signup')
            }
        }
        catch (error) { console.log(error)
            window.alert("server error")
         }
    }
    sessionStorage.setItem('email', email)
    return (
        <div className="card">
            <h1>LogIn</h1>
            <div className="sub-card">
                <form onSubmit={handleSubmit}>
                    <div className="txt">Email</div>
                    <input type="email" onChange={handleEmail} placeholder="Enter your email" required />
                    <div className="txt">Password</div>
                    <input type="password" onChange={handlePassword} placeholder="Enter your password" required />
                    <button className="i-btn" type="submit">SignIn</button>
                    <p>don't have an account<NavLink to={'/signup'}>SignUp</NavLink></p>
                </form>
            </div>
        </div>
    )
}