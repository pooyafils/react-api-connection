import React from "react";


const PersonInformation=(props)=>{

    return(
        <div>
            <table>
                <tr>
                    <td>{props.id}</td>
                    <td>{props.name}</td>
                    <td>{props.familyName}</td>
                </tr>
            </table>
        </div>
    )
}



export default PersonInformation