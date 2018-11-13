import React from 'react'
import Person from './Person/Person'

const persons = props =>
  props.persons.map((person, index) => {
    return (
      <Person
        name={person.name}
        age={person.age}
        delegate={() => props.deletePersonHandler(index)}
        key={person.id}
        updateDelegate={event => props.nameChangeHandler(event, person.id)}
      />
    )
  })

export default persons
