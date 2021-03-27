import React,{Component} from 'react'

class PersonInfoWithClassAndFetchOtherExample extends Component{

    state={
        persons:[]
    }
    fetchPersons=()=>{
        fetch('http://localhost:8080/person')
            .then((response)=>response.json())
            .then(personList=>{this.setState({persons:personList})})
    }
    render() {
        return(
            <div>
                <button onClick={this.fetchPersons}>Load Persons</button>
                {
                    <ul>
                        {this.state.persons.map(
                            (person)=>(<li key={person.id}>{person.name} and :
                                {person.familyName} </li>)
                        )}
                    </ul>
                }
            </div>
        )
    }
}
export default PersonInfoWithClassAndFetchOtherExample;