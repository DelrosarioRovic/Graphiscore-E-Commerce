import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaEllipsisV } from 'react-icons/fa';

import LoginRegBtn from "./login&regbtn";
import authentication from "../../hooks/authentication";
import UserProfile from "./user/user-profile";

const Navigation = () => {
    const { authenticated } = authentication();
    const [isScreenBelow764, setScreenBelow764] = useState(window.innerWidth <= 764);
    const [handleCloseOpenNav, setHandleCloseOpenNav] = useState(false);
        
    useEffect(() => {
    const handleResize = () => {
        setScreenBelow764(window.innerWidth <= 764);
    };
    window.addEventListener("resize", handleResize);
    return () => {
        window.removeEventListener("resize", handleResize);
    };
    }, []);
      
    const nav = (
    <>
        <li className="list-none px-2"><Link to="">Product</Link></li>
        <li className="list-none px-2"><Link to="">About</Link></li>
        <li className="list-none px-2"><Link to="">Contact</Link></li>
    </>
    );
  
    return (
        <div className="flex gap-x-4 items-center">
            {isScreenBelow764 ? (
                <div className="relative">
                   <button onClick={() => setHandleCloseOpenNav(!handleCloseOpenNav)} 
                        className="text-white h-8">
                        <FaEllipsisV /> 
                    </button> 
                {handleCloseOpenNav && (
                    <div className="flex flex-col bottom-[-6rem] w-32 left-0 absolute text-black bg-white shadow-md rounded-md">
                        {nav}
                    </div>    
                    )}
                </div>
            ) : (
                <ul className="text-white flex gap-x-5">
                    {nav}
                </ul>
            )}
            
            <LoginRegBtn />
        </div>
    )
}

export default Navigation;