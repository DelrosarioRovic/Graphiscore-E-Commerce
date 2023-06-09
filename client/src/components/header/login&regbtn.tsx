import { Link } from "react-router-dom"

const LoginRegBtn =()=> {

    return (
        <div className="flex gap-x-3">
            <Link className="bg-white py-1 px-2 rounded-sm" to="/login">Login</Link>
            <Link className="bg-green-700 text-white py-1 px-2 rounded-sm" to="/register">Register</Link>
        </div>
    )
}

export default LoginRegBtn;