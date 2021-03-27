import React,{Component} from 'react'

class PersonInfoWithClassAndFetch extends Component{
    state={
        persons:[]
    }
    componentDidMount() {
        fetch('http://localhost:8080/person')
            .then(
                (response)=>response.json()
            )
            .then(personList=>{this.setState({persons:personList})})
    }

    render() {
        return(
            <div>
                <ul>
                {this.state.persons.map((person)=>(
                    <li key={person.id}>{person.name}</li>
                ))}
                </ul>
            </div>
        )

    }
}

export default PersonInfoWithClassAndFetch;