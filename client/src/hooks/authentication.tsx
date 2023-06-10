import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthState } from "../redux/authReducer";
import axios from "axios";


const authentication = async () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState<boolean>(false);
    const authenticated = useSelector((state: { authReducer: AuthState }) => state.authReducer.authenticated);

    const checkAuth = async () => {
        setLoading(true);

        let token = localStorage.getItem('token');

        if (token) {
            const url = "http://localhost:3000/route/user";
            const res = await axios.get(url, {
              headers: { Authorization: token },
            });
            if (res.status === 200) {
                dispatch({ type: 'SET_AUTHENTICATED', payload: true });     
            }
          }
    }

    useEffect(() => {
        checkAuth();
      }, [dispatch, authenticated]);

      return { authenticated }
} 

export default authentication;