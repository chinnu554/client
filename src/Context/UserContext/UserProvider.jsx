import UserContext from "./UserContext.jsx";
import { useState , useEffect} from "react";
import {getMe} from "../../services/auth.service.js"

function UserProvider({children}){
    const [user,setUser] = useState({});
    const [token,setToken] = useState(()=>localStorage.getItem("token"));

    function logout(){
        localStorage.removeItem("token");
        setToken(null);
        setUser({});
    }

    useEffect(()=>{
        if (!token) {
            setUser({});
            return;
        }

        let isCurrent = true;
        const handleAuthorization = async() =>{
            try {
                const response = await getMe(token);
                if (isCurrent && response?.success) {
                    setUser(response.data);
                }
            } catch (error) {
                if (isCurrent && error.status === 401) {
                    localStorage.removeItem("token");
                    setToken(null);
                    setUser({});
                } else if (isCurrent) {
                    console.error("Could not load the current user:", error);
                }
            }
        };

        handleAuthorization();
        return () => {
            isCurrent = false;
        };
    }, [token])


    return(
        <UserContext.Provider value={{user,setUser,token,setToken,logout}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider
