import './dash.css'
import AddDomain from './adomain'
import { useState , useEffect } from 'react'
import ViewDomain from './vdomain';
import EditDomain from './edomain';
import DeleteDomain from './ddomain';
import AddEmail from './email/email';
import ViewEmail from './email/v-d-email';
import axios from 'axios';
export default function MainDashboard() {

    const [activeComponent, setActiveComponent] = useState(null);
    const email = sessionStorage.getItem('email');
    const [data, setdata] = useState('')
    const handelData = async () => {
        const url = `http://192.168.1.18:8000/api/method/sagasuite.dom_name_api.fetch_value?user_name=${email}`;
        try {
            const result = await axios.get(url);
            setdata(result.data.message[0].domain_name)

        }
        catch (error) { console.log(error) }
    }
    // handelData();
    useEffect(() => {
        handelData();
    }, []);

    sessionStorage.setItem('domain', data)
    
    const handleClick = (component) => {
        setActiveComponent(component);
    }
    return (
        <div>
            <div className="left-panel">
                <div className="title">Dashboard</div>
                <div>
                    <div className="h-tile">Domain</div>
                    <div className="d-list" onClick={() => handleClick('d-add')}>Add Domain</div>
                    <div className="d-list" onClick={() => handleClick('d-view')}>View Domain</div>
                    <div className="d-list" onClick={() => handleClick('d-edit')}>Edit Domain</div>
                </div>
                <div>
                    <div className="h-tile">Mail Box</div>
                    <div className="d-list" onClick={() => handleClick('e-add')}>Add Mail</div>
                    <div className="d-list" onClick={() => handleClick('e-view')}>View Mail</div>
                    <div className="d-list" onClick={() => handleClick('e-add')}>Edit Mail</div>
                </div>
            </div>
            <div className="right-panel">
                <div className='right-panel-header'>
                    <button className='logout'>LogOut</button>
                </div>
                <div className='right-panel-window'>
                    {activeComponent === 'd-add' && <AddDomain />}
                    {activeComponent === 'd-view' && <ViewDomain />}
                    {activeComponent === 'd-edit' && <EditDomain />}
                    {activeComponent === 'e-add' && <AddEmail />}
                    {activeComponent === 'e-view' && <ViewEmail />}
                    {activeComponent === 'd-delete' && <DeleteDomain />}
                    {activeComponent === 'd-delete' && <DeleteDomain />}

                </div>

            </div>
        </div>
    )
}