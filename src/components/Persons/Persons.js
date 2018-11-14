/**
 * STATE COMPONENT
 */
import React, { Component } from 'react'
import Person from './Person/Person'

class Persons extends Component {
  constructor(props) {
    super(props)
    this.lastPersonRef = React.createRef()
  }
  componentWillMount() {
    console.log('[Persons.js] componentWillMount()')
  }
  componentDidMount() {
    console.log('[Persons.js] componentDidMount()')
    this.lastPersonRef.current.focus()
  }
  componentWillReceiveProps(nextProps) {
    console.log('[Persons.js] componentWillReceiveProps', nextProps)
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Persons.js] shouldComponentUpdate', nextProps, nextState)
    return true
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('[Persons.js] componentWillUpdate', nextProps, nextState)
  }
  componentDidUpdate() {
    console.log('[Persons.js] componentDidUpdate()')
  }

  render() {
    console.log('[Persons.js] render()')
    return this.props.persons.map((person, index) => (
      <Person
        name={person.name}
        age={person.age}
        delegate={() => this.props.deletePersonHandler(index)}
        position={index}
        key={person.id}
        updateDelegate={event => this.props.nameChangeHandler(event, person.id)}
      />
    ))
  }
}

export default Persons
