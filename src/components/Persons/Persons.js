/**
 * STATE COMPONENT
 */
import React, { Component } from 'react'
import Person from './Person/Person'

class Persons extends Component {
  render() {
    return this.props.persons.map((person, index) => (
      <Person
        name={person.name}
        age={person.age}
        delegate={() => this.props.deletePersonHandler(index)}
        key={person.id}
        updateDelegate={event => this.props.nameChangeHandler(event, person.id)}
      />
    ))
  }
}

export default Persons
