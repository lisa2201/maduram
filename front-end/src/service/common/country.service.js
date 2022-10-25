import axios, {AxiosError} from 'axios'
import { AppsConst } from '../../shared/AppsConst'



export const getCodePostal = async (value) => {
    try {
        const res = fetch(`/assets/postal/france.json`, {
            withCredentials: true
        });
        console.log(res);
        return res;
    } catch(error) {
    
            console.error(error)
        return {
            status: false,
            msg: 'error'
        }
    }
}