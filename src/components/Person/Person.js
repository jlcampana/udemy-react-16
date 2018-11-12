/**
 * @class
 * Stateless component type
 * Utilizar siempre que se pueda!
 * No manipula el state de la aplicación
 */
import React from 'react'
import './Person.css'

const person = props => {
  return (
    <div className="Person">
      <p onClick={props.delegate}>
        Me llamo {props.name} y tengo {props.age} años.
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.updateDelegate} value={props.name} />
    </div>
  )
}

export default person
