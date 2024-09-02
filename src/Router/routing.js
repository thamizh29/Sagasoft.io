import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "../compomnents/home";
import SignIn from "../Authantication/sign_in";
import SignUp from "../Authantication/sign_up";
import Verification from '../Authantication/verify';
import Error from '../compomnents/error';
import MainDashboard from '../compomnents/dashboard/dashboard';
export default function Routing(){
    return(
        <>
        <Router>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="*" exact element={<Error />} />
                <Route path="/signin" exact element={<SignIn />}/>
                <Route path="/signup" exact element={<SignUp />}/>
                <Route path="/verification" element={<Verification />}/>
                <Route path="/dashboard" element={<MainDashboard />}/>

            </Routes>
        </Router>
        
        </>
    )
}