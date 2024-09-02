import { NavLink } from "react-router-dom";

export default function Home(){
    return(
        <div className="h-card">
            <div className="nav">
                    <h1>Saga Suite</h1>
                    <div className="block-elements">
                        <NavLink to={'/signin'}><div className="f-btn">Get free account</div></NavLink>
                    </div>
            </div>
        </div>
    )
}