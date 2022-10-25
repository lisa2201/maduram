import axios, {AxiosError} from 'axios'
import { AppsConst } from '../../shared/AppsConst'

export const registerService = async (data) => {
    try {
        console.log('data register service', data);
        const res = await axios.post( `${AppsConst.baseUrl}/register-user`, data, {
            withCredentials: true
        })
        return res.data
    } catch(error) {
        if ((error).response?.status === 500) {
            console.error(error.response?.data?.msg)
        } else {
            console.error(error)
        }
        return false
    }
}

export const loginService = async (data) => {
    try {
        const res = await axios.post(`${AppsConst.baseUrl}/login`, data, {
            withCredentials: true
        })
        
        return res.data

    } catch(error) {
        if ((error).response?.status === 500) {
            console.error(error.response?.data?.msg)
        } else {
            console.error(error)
        }

        return {
            status: false,
            msg: error.response?.data?.msg
        }
    }
}

export const getMeService = async () => {
    try {
        const res = await axios.get(`${AppsConst.baseUrl}/auth-user`, {
            withCredentials: true
        })
        return res.data
    } catch(error) {
        if ((error).response?.status === 500) {
            console.error(error.response?.data?.msg)
        } else {
            console.error(error)
        }

        return {
            status: false,
            msg: error.response?.data?.msg
        }
    }
}

export const logoutService = async () => {
    try {
        const res = await axios.get(`${AppsConst.baseUrl}/logout`, {
            withCredentials: true
        })
        return res.data
    } catch(error) {
        if ((error).response?.status === 500) {
            console.error(error.response?.data?.msg)
        } else {
            console.error(error)
        }

        return {
            status: false,
            msg: error.response?.data?.msg
        }
    }
}

export const clearAuthService = async ()=> {
    try {

        console.log('auth fn working');
        localStorage.removeItem(AppsConst.token)
        localStorage.removeItem(AppsConst.isAuth)
    }
    catch(err){
        console.log(err);
    }
}