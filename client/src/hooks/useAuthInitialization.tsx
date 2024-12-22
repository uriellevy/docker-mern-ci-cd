import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setAuthToken } from '../features/users/authSlice';
import Cookies from 'js-cookie';

const useAuthInitialization = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        const authToken = Cookies.get('authToken');
        authToken && dispatch(setAuthToken(authToken))

    },[dispatch])
}

export default useAuthInitialization