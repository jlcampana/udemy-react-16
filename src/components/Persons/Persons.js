/**
 * STATE COMPONENT
 */
import React, { Component } from 'react'
import Person from './Person/Person'

class Persons extends Component {
  componentWillMount() {
    console.log('[Persons.js] componentWillMount()')
  }
  componentDidMount() {
    console.log('[Persons.js] componentDidMount()')
  }
  render() {
    console.log('[Persons.js] render()')
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
