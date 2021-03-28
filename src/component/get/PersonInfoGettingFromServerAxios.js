import React,{useEffect,useState} from 'react'
import axios from "axios";
import {Link} from 'react-router-dom'

const PersonInfoGettingFromServerAxios=()=>{
    const [personAxios,setPersonAxios]=useState([])
    useEffect(
        ()=>{axios.get('http://localhost:8080/person')
            .then((res=>{console.log(res)
            setPersonAxios(res.data)}
            )
            )
        },[]
    )
    
    return(
        <div>
            ewttttewt
            {personAxios.map(
                person=>
                    <div key={person.id}>
                        <Link id={person.id} to={'/maininfo/'+person.id}>{person.name}</Link>
                    </div>
            )}
        </div>
    )
}
export default PersonInfoGettingFromServerAxios;