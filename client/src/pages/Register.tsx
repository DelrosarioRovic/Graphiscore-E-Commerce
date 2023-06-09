import React from "react";
import LoginImg from "../assets/login.jpg";

const Register:React.FC = () => {
    return (
    <div className="pt-24 px-10 flex">
        <div className="flex w-full rounded-md overflow-hidden shadow-md">
            <div className="flex flex-col w-2/5 gap-y-10 bg-gray-200 p-10">
                <h1 className="text-gray-800 font-semibold text-2xl">Register</h1>
                <form className="flex flex-col">
                    <div className="flex flex-col">
                        <label htmlFor="DisplayName" className="font-light mb-1">Display Name</label>
                        <input 
                            type="text"
                            id="displayName"
                            className="p-1 font-light border"
                            placeholder="Enter your Display Name" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="Email" className="font-light mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            id="Email"
                            className="p-1 font-light border"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="flex flex-col mb-10">
                        <label htmlFor="Password" className="font-light mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            id="Password"
                            className="p-1 font-light"
                            placeholder="Enter your password"
                        />
                    </div>
                    <button type="submit" className="bg-gray-500 text-white rounded-lg py-2">Register</button>
                </form>
            </div>
            <div
                className="w-3/5 h-[500px] bg-center bg-cover"
                style={{
                backgroundImage: `url(${LoginImg})`,
                }}
            ></div>
        </div>
    </div>
    )
}

export default Register;