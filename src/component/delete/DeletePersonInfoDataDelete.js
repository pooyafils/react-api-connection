import React from 'react'
const PersonInfoDataDelete=(props)=>{
    return(
        <div>
            <table>
                <tr>
                    <td>{props.id}</td>
                    <td>{props.name}</td>
                    <td>{props.familyName}</td>
                    <td><button onClick={props.ondelete}>delete</button></td>
                </tr>
            </table>
        </div>
    )
}

export default PersonInfoDataDelete;