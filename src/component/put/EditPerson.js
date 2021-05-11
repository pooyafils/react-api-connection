import React from 'react'

const EditPerson=(props)=>{

    return(
        <div>
            <table>
                <tr>
                    <td>{props.id}</td>
                    <td>{props.name}</td>
                    <td>{props.familyName}</td>
                    <td><button onClick={props.onUpdates}>edit</button></td>
                </tr>
            </table>
        </div>
    )


}
export default EditPerson