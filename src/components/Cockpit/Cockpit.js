import React from 'react'
import classes from './Cockpit.css'

const cockpit = props => {
  const assignedClasses = []
  let btnClass = ''

  if (props.persons.length <= 1) {
    assignedClasses.push(classes.red)
  }
  if (props.persons.length <= 2) {
    assignedClasses.push(classes.bold)
  }

  return (
    <div className={classes.Cockpit}>
      <h1>Hi, I'm a react app</h1>
      <p className={assignedClasses.join(' ')}>Fistros</p>
      <button onClick={this.toggleHandler} className={btnClass}>
        Toggle
      </button>
    </div>
  )
}

export default cockpit
