import {useNavigate} from "react-router-dom";
import UserContext from "../../Context/UserContext/UserContext.jsx";
import { useContext } from "react";


function HomePage(){
    const {logout} = useContext(UserContext);
    const navigate = useNavigate();

    function handleLogout(){
        logout();
        navigate("/auth", { replace: true });
    }

    return(
        <>
        <h1>Hello HomePage</h1>
        <p>This is for developing college chits</p>
        <button onClick={handleLogout}>logout</button>
        </>
    )
}

export default HomePage
