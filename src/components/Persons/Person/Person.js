/**
 * @module
 * State component type
 */
import React, { PureComponent } from 'react'
import classes from './Person.css'

class Person extends PureComponent {
  componentWillMount() {
    console.log('[Person.js] componentWillMount()')
  }
  componentDidMount() {
    console.log('[Person.js] componentDidMount()')
  }
  componentDidUpdate() {
    console.log('[Person.js] componentDidUpdate()')
  }
  render() {
    console.log('[Person.js] render()')

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
