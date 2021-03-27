import React ,{useState,useEffect} from 'react'
import axios from 'axios'

const SinglePersonInfoGettingFormServerAxios=()=>{
    const[personAxios,setPersonAxios]=useState({})
    const [id,setId]=useState(1)
    useEffect(
        ()=>{axios.get('http://localhost:8080/person/'+id)
            .then(res=>{console.log(res)
            setPersonAxios(res.data)}
            )
            .catch(
                err=>{console.log(err)
                }
            )
        },[id]
    )

    return(
        <div>
            <input text="text" value={id} onChange={e=> setId(e.target.value)}/>

            {personAxios.name}
            {personAxios.familyName}
        </div>
    )

}

export default SinglePersonInfoGettingFormServerAxios;