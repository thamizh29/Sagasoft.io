
import { NavLink, useNavigate , Route, Routes} from "react-router-dom";
import axios from 'axios';
import './sign_in.css'
import { useState } from 'react'
import Verification from './verify';
export default function SignUp() {
    //const [data, setdata] = useState([]);
    const [email, setemail] = useState('');
    const [company, setcompany] = useState('');
    const [mobile, setmobile] = useState('');
    const [password, setpassword] = useState('');
    const navigate = useNavigate()
    const handleSignup = async (e) => {
        e.preventDefault()
        const url = `http://192.168.1.18:8000/api/method/sagasuite.customer_api.insert_value?customer_name=${company}&customer_type=&email_id=${email}&password=${password}&status=&premium_customer=&phone_number_verified=&email_id_verified=&subscription_plan=`;
        try {
            const result = await axios.post(url);
            //console.log(result)
            if(result.data.message[0] === "This mail id was already exist please go to login page"){
            window.alert(result.data.message[0])
            navigate('/signin')
            }
            //setdata(result.data.message);
            else{
            navigate('/verification',{ state: { email: email } })
            }
        }
        catch (error) { console.log(error) }
}
return (
    <div>

        <div className="u-card">
            <h1>Create account</h1>
            <div className="sub-card">
                <form onSubmit={handleSignup}>
                    <div className='txt'>Company Name</div>
                    <input type='name' onChange={(e) => (setcompany(e.target.value))} placeholder='Enter your company name' required />
                    <div className="txt">Email</div>
                    <input type="email" onChange={(e) => (setemail(e.target.value))} placeholder="Enter your email" required />
                    <div className="txt">Mobile number</div>
                    <input type="number" onChange={(e) => (setmobile(e.target.value))} placeholder="Enter your mobile no" required />
                    <div className="txt">Password</div>
                    <input type="password" onChange={(e) => setpassword(e.target.value)} placeholder="Enter your password" required />
                    <div className="txt">Confirm Password</div>
                    <input type="password" placeholder="Re-Enter your password" required />
                    <button className="i-btn" type="submit">SignUp</button>
                    <p>i already have an account<NavLink to={'/signin'}>SignIn</NavLink></p>
                </form>
            </div>
        </div>
    </div>
)
}