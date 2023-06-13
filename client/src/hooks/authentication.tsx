import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthState } from "../redux/authReducer";
import axios from "axios";
import { authInfoIf } from "../interfaceTs/hooks/authInfoIF";


const authentication = () => {
    const dispatch = useDispatch();
    const [currentUserInfo, setCurrentUserInfo] = useState<authInfoIf>({
      id: "",
      displayName: "",
      profilePicture: ""
    });

    const authenticated = useSelector((state: { authReducer: AuthState }) => state.authReducer.authenticated);

    const checkAuth = async () => {

        let token = localStorage.getItem('token');
        console.log(token)
        if (token) {
            const url = "http://localhost:3000/route/user";
            const res = await axios.get(url, {
              headers: { Authorization: token },
            });
            if (res.status === 200) {
                setCurrentUserInfo({
                  id: res.data.user._id,
                  displayName: res.data.user.displayName,
                  profilePicture: res.data.user.profilePicture
                })
                dispatch({ type: 'SET_AUTHENTICATED', payload: true });     
            }
          }
    }

    useEffect(() => {
        checkAuth();
      }, [dispatch, authenticated]);

      return { authenticated, currentUserInfo }
} 

export default authentication;