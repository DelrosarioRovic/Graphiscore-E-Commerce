import React, { useState } from "react";
import LoginImg from "../assets/login.jpg";
import axios from "axios";

const Login: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const url = "http://localhost:3000/auth/login";
            const res = await axios.post(url, {
                email: email, 
                password: password, 
                });
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className="pt-24 px-10 flex
                        max-md:px-0
                        max-md:pt-[4.5rem]">
            <div className="flex w-full rounded-3xl overflow-hidden shadow-md
                            max-md:rounded-none
                            max-md:flex-col-reverse">
                <div className="flex flex-col w-2/5 gap-y-10 bg-gray-200 p-5
                                max-md:w-full">
                    <h1 className="text-gray-800 font-semibold text-2xl">Login</h1>
                    <form onSubmit={handleSubmit} className="flex flex-col">
                        <div className="flex flex-col">
                            <label htmlFor="Email" className="font-light mb-1">
                                Email
                            </label>
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                id="Email"
                                className="p-1 font-light outline outline-1 outline-gray-400"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="flex flex-col mb-10">
                            <label htmlFor="Password" className="font-light mb-1">
                                Password
                            </label>
                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                id="Password"
                                className="p-1 font-light outline outline-1 outline-gray-400"
                                placeholder="Enter your password"
                            />
                        </div>
                        <button type="submit" className="bg-gray-500 text-white rounded-lg py-2">Login</button>
                    </form>
                </div>
                <div
                    className="w-3/5 h-[500px] bg-center bg-cover
                                max-md:h-[50vh]
                                max-md:w-full"
                    style={{
                    backgroundImage: `url(${LoginImg})`,
                    }}
                ></div>
            </div>
        </div>
    );
};

export default Login;
