import React, {useEffect, useState} from 'react'
import axios from "axios";
import {Link} from "react-router-dom";

const PersonInfoDetail =({match})=>{
    const [personAxios,setPersonAxios]=useState([])
    useEffect(
        ()=>{
            fetchItem()
        },[]
    )
    const fetchItem=async ()=>{
        const fetchItem=await fetch('http://localhost:8080/person/'+match.params.id)
        const item=await fetchItem.json()
        setPersonAxios(item)
        console.log(item)
    }

    return(
        <div>
            <p> name is {personAxios.name} and the family name is {personAxios.familyName}
            </p>
        </div>
    )
}

export default PersonInfoDetail;