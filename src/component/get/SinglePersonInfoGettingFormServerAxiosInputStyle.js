import React,{useEffect,useState} from "react";
import axios from 'axios'

const SinglePersonInfoGettingFormServerAxiosInputStyle
=()=>{
    const[personAxios,setPersonAxios]=useState({})
    const [id,setId]=useState(1)
        const[idFormButton,setIdFormButton]=useState(1)
        const handelClick=()=>{
            setIdFormButton(id)
        }
        useEffect(
            ()=> {
                axios.get('http://localhost:8080/person/' + idFormButton)
                    .then(
                        res => {
                            console.log(res)
                            setPersonAxios(res.data)
                        }
                    ).catch(
                    err => {
                        console.log(err)
                    }
                )
            },[idFormButton]
            )

    return(
        <div>
            <input text="text" value={id} onChange={e=> setId(e.target.value)}/>
            <button type="button" onClick={handelClick}>Fetch host</button>
<br/>
            {personAxios.name}
            <br/>
            {personAxios.familyName}

        </div>
    )

}

export default SinglePersonInfoGettingFormServerAxiosInputStyle;