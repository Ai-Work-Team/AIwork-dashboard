import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

export const useAxios = ({url = null, method = null, body = null}) => {
    const navigate = useNavigate()
    const [data, setData] = React.useState([])
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState({});
    // console.log(error.request.status);
    // if(error.request.status === 500) navigate("/login")
    const fetchData = async () => {
        try {
            let {data} = await axios({method, body, url})
            setData(data)
            setLoading(false)
            
        } catch (error) {
            console.log(error);
            setError(error)
            setLoading(false)
            if(error.request.status===500) return navigate("/login")
        }
    }

    React.useEffect(() => {
        if(url && method){
            fetchData()
        }
    },[url,body,method])

    return{
        data,
        loading,
        error
    }
}