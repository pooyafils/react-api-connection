import React,{useEffect} from "react";


const PersonInfoConsole=()=>{
    useEffect(()=>{
        fetch('http://localhost:8080/person'
            ,

            {

                method:'GET'

                ,
                /*
              headers:{},

              body:JSON.stringify(
                  {
                      email:"",
                      password:""
                  }
              )

*/
            }
        ).then(response=>{console.log(response)
            return response.json()})
            .then(responseJson=>{console.log('this is response json',responseJson)})
            .catch(
                (e)=>{}
            )
            .finally(
                ()=>{}
            )
    },[])

    return(

        <div>
            console app

        </div>
    )



}


export default PersonInfoConsole;