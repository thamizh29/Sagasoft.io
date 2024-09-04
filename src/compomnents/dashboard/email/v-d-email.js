import { useState , useEffect} from 'react'
import '../dash.css'
import axios from 'axios';
export default function ViewEmail() {
    const [data, setdata] = useState([]);
    const email = sessionStorage.getItem('email')
    const domain = sessionStorage.getItem('domain')
    const handleEmail = async (e) => {
        //const url =`192.168.1.18:8000/api/method/sagasuite.dom_name_api.fetch_value?user_name=${email}`;
        const url = `http://192.168.1.18:8000/api/method/sagasuite.email_acc_api.fetch_value?domain_name=${domain}`
        try {
            const result = await axios.get(url);
            setdata(result.data.message)
        }
        catch (error) {
            console.log(error)
        }

    }
    useEffect(() => {
        handleEmail();
    }, [])
    const handleDelete = async (click) => {

        const url = `http://192.168.1.18:8000/api/method/sagasuite.dom_name_api.remove_domname?user_name=${email}&domain_name=${click}`
        try {
            const result = await axios.delete(url);
            console.log("delete success")
           // handleEmail();

        }
        catch (error) {
            console.log(error)
        }
    }
    //console.log(email)
    //console.log(click)
    return (
        <div className="window">
            <div>ViewEmail</div>
            {/* <button className='view-btn' onClick={handledomain}>Show the domain</button> */}
            <table>
                <thead>
                    <tr>
                        <th>Domain Name</th>
                        <th>Email id</th>
                        <th>password</th>
                    </tr>
                </thead>
                {
                    data.map((item, index) => (
                        item.domain_name && (
                            <>

                                <tbody>
                                    <tr key={index}>
                                        <td>{item.domain_name}</td>
                                        <td>{item.email_id}</td>
                                        <td>{item.password}</td>
                                        <td className='t-dlt' onClick={() => handleDelete(item.domain_name)}>Delete</td>
                                    </tr>
                                </tbody>

                            </>
                        )
                    ))
                }
            </table>
        </div>
    )
}
