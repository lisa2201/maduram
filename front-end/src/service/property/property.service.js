import axios, {AxiosError} from 'axios'
import { AppsConst } from '../../shared/AppsConst'

export const CreatePropertyService = async (data) => {
    try {
        console.log('data property', data);
        const res = await axios.post( `${AppsConst.baseUrl}/property/create-property`, data, {
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

export const getAllProperty = async () => {
    try {
        const res = await axios.get(`${AppsConst.baseUrl}/property/get-all-property`, {
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

export const deleteProps = async (index) => {
    try { 

        const res = await axios.get(`${AppsConst.baseUrl}/property/delete`,{ params: { index: index } }, {
            withCredentials: true
        })
        return res.data.data

    } catch (error) {
        if ((error).response?.status === 500) {

            console.error(error.response?.data?.msg)
        } else {

            console.error(error)
        }
        return false
    }
}