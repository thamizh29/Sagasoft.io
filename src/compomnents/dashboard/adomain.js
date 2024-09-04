import { useState } from 'react'
import './dash.css'
import axios from 'axios';
export default function AddDomain(){
    const [data,setdata]=useState('');
    const email = sessionStorage.getItem('email')
    const handledomain = async (e) => {
        const url =`http://192.168.1.18:8000/api/method/sagasuite.dom_name_api.insert_value?domain_name=${data}&user_name=${email}`;
        try{
            const result = await axios.post(url);
            console.log(result)
            window.alert("Domain added succesfully")
        }
        catch(error){
            console.log(error)
        }
            
    }
    //sessionStorage.setItem('domain',data)
    return(
        <div className="window">
            <div>AddDomain</div>
            <input type="text" onChange={(e)=>setdata(e.target.value)}placeholder="Enter your domain name"/>
            <button className="a-btn"onClick={handledomain}>Add Domain</button>
        </div>
    )
}