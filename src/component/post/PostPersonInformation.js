import React, {useEffect, useState} from "react";
import axios from "axios";
import PersonInfoDataDelete from "../delete/DeletePersonInfoDataDelete";
import PersonInformation from "./PersonInformation";

const PostPersonInformation=()=>{
    const [name,setName]=useState([])
    const [familyName,setFamilyname]=useState([])
    const [person,setPerson]=useState([])

    useEffect(
        ()=>{loadData()
        },[]
    )

    const loadData=async()=>{
        const response=await fetch('http://localhost:8080/person')
        const data=await response.json();
        setPerson(data)
    }
    const add=()=>{
        console.log(name,'this is family name',familyName);
        fetch('http://localhost:8080/person',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(
                {
                    name:name,
                    familyName:familyName
                }
            )
            }

        ).then((respone=>{return respone.json()})
            ).then((responseJson=>{console.log(responseJson)}))
    }
    return(
        <div>
            lllllllll
            {person.map(
                (r,id)=>(
                    <PersonInformation  key={id} id={r.id} name={r.name} familyName={r.familyName}/>
                )
            )}
            <div className="container">
                <input value={name} onChange={(e)=>setName(e.target.value)} className="input-group"/>
                <input value={familyName} onChange={(e)=>setFamilyname(e.target.value)} className="input-group"/>
                <button onClick={add} className="btn btn-info">add</button>
            </div>
        </div>
    )




}

export default PostPersonInformation;