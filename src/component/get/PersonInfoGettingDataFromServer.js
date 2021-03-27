import React, {useEffect,useState} from 'react'
import PersonInfoData from "./PersonInfoData";
const PersonInfoGettingDataFromServer=()=>{
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
    return(
        <div>

            {person.map(
                (r,id)=>(
                    <PersonInfoData key={id} id={r.id} name={r.name} familyName={r.familyName}/>
                )
            )}
        </div>
    )

}
export default PersonInfoGettingDataFromServer;