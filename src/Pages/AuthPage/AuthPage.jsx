import { useState } from "react";
import { register } from "../../../services/auth.service";

function AuthPage(){
    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    async function handleRegister(e){
        e.preventDefault();
        const data = {
            username,
            email,
            password
        }
        const result = await register(data);
        alert(result.message);
    }

    return(
       <>
        <h1>Login Page</h1>

        <div>
            <input type="text" placeholder="username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
            <input type="email" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <button onClick={handleRegister}>submit</button>
        </div>
       </>
    );
}

export default AuthPage