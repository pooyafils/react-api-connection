import axios from "axios";
import React, {useEffect} from "react";

const  PersonInfoWithAxiosConsole=()=> {
    useEffect(
        ()=>{

    axios(
        {
            url: 'http://localhost:8080/person',
            method: 'GET',
            timeout: 3000,
            header: {},
            data: {}
        }
    ).then(response => {
        console.log(response)
    })
        .catch(
            (e) => {
            }
        )
        .finally(
            () => {
            }
        )
},[])

    return(
        <div>
            console App
        </div>
    )
}

export default  PersonInfoWithAxiosConsole;