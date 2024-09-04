import { useState , useEffect } from 'react'
import './dash.css'
import axios from 'axios';
export default function ViewDomain() {
    const [data, setdata] = useState([]);
    const email = sessionStorage.getItem('email')
    const handledomain = async (e) => {
        //const url =`192.168.1.18:8000/api/method/sagasuite.dom_name_api.fetch_value?user_name=${email}`;
        const url = `http://192.168.1.18:8000/api/method/sagasuite.dom_name_api.fetch_value?user_name=${email}`
        try {
            const result = await axios.get(url);
            setdata(result.data.message)
        }
        catch (error) {
            console.log(error)
        }

    }
    useEffect(() => {
        handledomain();
    }, []);
    const handleDelete = async (click) => {

        const url = `http://192.168.1.18:8000/api/method/sagasuite.dom_name_api.remove_domname?user_name=${email}&domain_name=${click}`
        try {
            const result = await axios.delete(url);
            console.log("delete success")
            handledomain();

        }
        catch (error) {
            console.log(error)
            window.alert("server not connected")
        }
    }
    //console.log(email)
    //console.log(click)
    return (
        <div className="window">
            <div>ViewDomain</div>
            {/* <button className='view-btn' onClick={handledomain}>Show the domain</button> */}

            {
                data.map((item, index) => {
                    return(
                    item.domain_name && (
                    <>
                        <table>
                            <thead>
                                <tr>
                                    <th>Domain Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr key={index}>
                                    <td>{item.domain_name}</td>
                                    <td className='t-dlt' onClick={() => handleDelete(item.domain_name)}>Delete</td>
                                </tr>
                            </tbody>
                        </table>
                    </>
                    )
                )})
            }

        </div>
    )
}
