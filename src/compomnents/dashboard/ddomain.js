import { useState } from 'react'
import './dash.css'
import axios from 'axios';
export default function DeleteDomain(){
    const [data,setdata]=useState('');
    const email = sessionStorage.getItem('email')
    const handledomain = async (e) => {
        const url =``;
        try{
            const result = await axios.post(url);
            console.log(result)
        }
        catch(error){
            console.log(error)
        }
            
    }
    console.log(email)
    return(
        <div className="window">
            <div>DeleteDomain</div>
            {
                
            }
        </div>
    )
}