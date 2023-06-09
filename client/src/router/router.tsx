import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";


const Router:React.FC = () => {

    return (
      <Routes>
        <Route path="/Login" element={< Login/>} />
        <Route path="/Register" element={< Register/>} />
      </Routes>
    );
  }
  
  export default Router;