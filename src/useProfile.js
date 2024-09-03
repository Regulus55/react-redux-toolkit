import axios from "axios";
import {useQuery} from "react-query";

const getProfileInfo = async () => {
    try{
        const userToken = localStorage.getItem("userToken")
        const config = {
            headers: {
                Authrization: `Bearer ${userToken}`
            },
        };
        const {data} = await axios.get('http://localhost:7070/api/auth',config)
        console.log('profileInfo', data.body)
        return data.body
    }catch(e){
        console.log(e)
    }
}

const useProfile = () => {
    return useQuery({
        queryKey: ['profileInfo'],
        queryFn: () => getProfileInfo()

    })
};

export default useProfile;