import { useState } from 'react'
import '../dash.css'
import axios from 'axios';
export default function AddEmail() {
    const [data, setdata] = useState('');
    const [userpassword, setuserpassword] = useState('');
    const [domain, setdomain] = useState('')
    //const defaultDomain = sessionStorage.getItem('domain')
    const email = sessionStorage.getItem('email')
    const handledomain = async (e) => {
        const url = `http://192.168.1.18:8000/api/method/sagasuite.email_acc_api.add_email_accs?domain_name=${domain}&email_id=${data}&forward_email_id=&password=${userpassword}`;
        try {
            const result = await axios.post(url);
            if(result.data.message[0] === "this Email ID Already Exixts in The Email Accounts"){
                window.alert(result.data.message[0])
            }
            else{
            console.log(result)
            window.alert("Email added succesfully")
            }
        }
        catch (error) {
            console.log(error)
            window.alert("server error")
        }                                                    

    }
    //sessionStorage.setItem('domain',domain)
    //console.log(email)
    return (
        <div className="window">
            <div>Add Email</div>
            <div>
                <input type="text" onChange={(e) => setdomain(e.target.value)} placeholder='Enter the domain name' />
            </div>
            <input type="text" onChange={(e) => setdata(e.target.value)} placeholder="Create your Email id" />
            <div>
                <input type="password" onChange={(e) => setuserpassword(e.target.value)} placeholder='Enter the password' />
            </div>
            <button className="e-btn" onClick={handledomain}>Add Email</button>
        </div>
    )
}