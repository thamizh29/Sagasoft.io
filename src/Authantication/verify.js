
import { useState } from 'react';
import axios from 'axios';
import './sign_in.css';
import { useLocation, useNavigate } from 'react-router';
export default function Verification() {
    const [verify, setverify] = useState(1);
    const location = useLocation();
    const email = location.state?.email || '';
    const navigate = useNavigate();
    const handleForm = async (e) => {
        e.preventDefault();
        const url = `http://192.168.1.18:8000/api/method/sagasuite.customer_api.fetch_value?email_id=${email}`
         //Api call to get the data from backend
        try {
            const result = await axios.get(url);
            if (Number(result.data.message.verification_code) === verify) {
         //Verify the code 
                const result = await axios.post(`http://192.168.1.18:8000/api/method/sagasuite.customer_api.update_email_ID?email_id=${email}`)
                navigate('/signin')
            }
            else {
                window.alert("Invalid code")
            }
        }
        catch (error) { console.log(error) }
    }
    const Resend = async (e) => {
        e.preventDefault();
        //update the value email verification is true
        try {
            const result = await axios.post(`http://192.168.1.18:8000/api/method/sagasuite.customer_api.update?email_id=${email}`);
        }
        catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="v-card">
            <h1>Email verification</h1>
            <form onSubmit={handleForm}>
                <input type="number" onChange={(e) => (setverify(Number(e.target.value)))} placeholder="Enter verification code" />
                <button className='v-btn' onClick={Resend} >Resend verification code</button>
                <button className='s-btn' type="submit">Submit</button>
            </form>
        </div>
    )
}