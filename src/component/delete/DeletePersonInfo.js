import React, {useEffect, useState} from "react";
import PersonInfoDataDelete from "./DeletePersonInfoDataDelete";
import axios from "axios";

const DeletePersonInfo=()=>{
    const [person,setPerson]=useState([])
    useEffect(
        ()=>{loadData()
        },[]
    )
    const DeleteHandle=(id)=> {
console.log(id)
        axios.delete('http://localhost:8080/person/'+id)
            .then(
                (response)=>{console.log(response)
                if(response.status===200){
                    console.log(response.data,"before")
                    setPerson(response.data)
                }}
            )
    }
    const loadData=async()=>{
        const response=await fetch('http://localhost:8080/person')
        const data=await response.json();
        setPerson(data)
    }
    return(
        <div>
            lllllllll
            {person.map(
                (r,id)=>(
                    <PersonInfoDataDelete ondelete={()=>DeleteHandle(r.id)} key={id} id={r.id} name={r.name} familyName={r.familyName}/>
                )
            )}
        </div>
    )




}


export default DeletePersonInfo