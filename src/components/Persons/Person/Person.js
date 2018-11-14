/**
 * @module
 * State component type
 */
import React, { Component } from 'react'
import classes from './Person.css'

class Person extends Component {
  render() {
    return (
      <div className={classes.Person}>
        <p onClick={this.props.delegate}>
          Me llamo {this.props.name} y tengo {this.props.age} años.
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.updateDelegate}
          value={this.props.name}
        />
      </div>
    )
  }
}

export default Person
