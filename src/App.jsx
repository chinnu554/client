import AuthPage from "./Pages/AuthPage/AuthPage.jsx";
import HomePage from "./Pages/HomePage/HomePage.jsx"
import {Routes , Route} from "react-router-dom";
function App(){
  return(
     <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/auth" element={<AuthPage/>}/>
     </Routes>
  )
}

export default App;