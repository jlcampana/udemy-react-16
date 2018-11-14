/**
 * @module
 * State component type
 */
import React, { PureComponent } from 'react'
import classes from './Person.css'
import PropTypes from 'prop-types'

class Person extends PureComponent {
  componentWillMount() {
    console.log('[Person.js] componentWillMount()')
  }
  componentDidMount() {
    console.log('[Person.js] componentDidMount()')
    if (this.props.position === 0) {
      this.inputElement.focus()
    }
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
          ref={inp => {
            this.inputElement = inp
          }}
          type="text"
          onChange={this.props.updateDelegate}
          value={this.props.name}
        />
      </div>
    )
  }
}

Person.propTypes = {
  updateDelegate: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  delegate: PropTypes.func
}
export default Person
