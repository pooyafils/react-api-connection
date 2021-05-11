import React, {useEffect, useState} from "react";
import PersonInformation from "../post/PersonInformation";
import EditPerson from "./EditPerson";
import axios from "axios";

const EditPersonInfo=()=>{
    const [name,setName]=useState('')
    const [familyName,setFamilyname]=useState('')
    const [person,setPerson]=useState([])
    const [Response,setResponse]=useState([])
    const[nameEdit,setNameEdit]=useState('')
    const[idnameEdit,setIdNameEdit]=useState(1)
    const[err,setErr]=useState('')

    useEffect(

        ()=>{loadData()
        },
        ()=>{add()
        },
        []
    )

    const loadData=async()=>{
        const response=await fetch('http://localhost:8080/person')
        const data=await response.json();
        setPerson(data)
    }
    let status
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
        ).then((respone)=>{
                status=respone.status
                return respone.json()

            }
        ).then((responseJson)=>{
                if(status===200){
                    console.log('400')
                    setResponse(responseJson)
                    setPerson(responseJson)
                    console.log(Response,'llllloooollll')
                    console.log(responseJson,"kkkkkkkkkkkkkkkkkkkk")
                }

            }
        )



    }
    const onUpdates=()=>{
        console.log(idnameEdit,'this is the id',nameEdit)
        axios("http://localhost:8080/person/"+idnameEdit,{
method:'PUT',
            headers:{'Content-Type':'application/json'},
            data:{name:nameEdit}
        }


        ).then((responseJson)=>{
                    console.log('400')
                    setPerson(responseJson.data)
                    console.log(responseJson,"kkkkkkkkkkkkkkkkkkkk")
            setErr('np')
            }
        ).catch(
            (e)=>{console.log(e.toString())},
            setErr('you must enter the name also more than 4 charters')
        )

    }
    return(
        <div>
            my edit person
            {person.map(
                (r,id)=>(
                    <EditPerson onUpdates={()=>{setIdNameEdit(r.id);setNameEdit(r.name)}}  key={id} id={r.id} name={r.name} familyName={r.familyName}/>
                )
            )}

            <div className="container">
                <input value={name} onChange={(e)=>setName(e.target.value)} className="input-group"/>
                <input value={familyName} onChange={(e)=>setFamilyname(e.target.value)} className="input-group"/>
                <button onClick={add} className="btn btn-info">add</button>
            </div>

            {Response.codes}
            <div className="container border border-info">
                <p>this is the edit section</p>
                <input value={nameEdit} onChange={(e)=>setNameEdit(e.target.value)} className="input-group"/>
                <button onClick={onUpdates} className="btn btn-info">edit</button>
                {Response.codes}
                <h1>{err}</h1>
            </div>
        </div>
    )




}


export default EditPersonInfo