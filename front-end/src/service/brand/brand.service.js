import axios, {AxiosError} from 'axios'
import { AppsConst } from '../../shared/AppsConst'

export const CreateBrandService = async (data) => {
    try {
        console.log('data brand', data);
        const res = await axios.post( `${AppsConst.baseUrl}/brand/create-brand`, data, {
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


export const getAllBrand = async () => {
    try {
        const res = await axios.get(`${AppsConst.baseUrl}/brand/get-all-brand`, {
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