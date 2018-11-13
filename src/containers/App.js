import React, { Component } from 'react'
import classes from './App.css'
import Persons from '../components/Persons/Persons'
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary'
const persons = [
  { name: 'Jose Luis', age: 41, id: 'fistro1' },
  { name: 'Elle McPherson', age: 54, id: 'fistro2' }
]

class App extends Component {
  state = {
    persons,
    visible: false
  }

  nameChangeHandler = (event, id) => {
    console.log(id, event.target.value)
    const personIdx = this.state.persons.findIndex(p => p.id === id)
    const person = { ...this.state.persons[personIdx] }
    person.name = event.target.value

    const personList = [...this.state.persons]
    personList[personIdx] = person
    this.setState({ persons: personList })
  }

  fistreHandler = idx => {
    persons[idx].name = 'Es un fistro'
    this.setState({ persons })
  }

  toggleHandler = () => {
    this.setState({ visible: !this.state.visible })
  }

  deletePersonHandler = idx => {
    const tmpPersons = [...this.state.persons]
    tmpPersons.splice(idx, 1)
    this.setState({ persons: tmpPersons })
  }

  render() {
    let btnClass = ''
    let personRender = null

    if (this.state.visible) {
      personRender = (
        <div>
          <Persons
            persons={this.state.persons}
            deletePersonHandler={this.deletePersonHandler}
            nameChangeHandler={this.nameChangeHandler}
          />
        </div>
      )
      btnClass = classes.Red
    }

    const assignedClasses = []

    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.red)
    }
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.bold)
    }

    return (
      <ErrorBoundary>
        <div className={classes.App}>
          <h1>Hi, I'm a react app</h1>
          <p className={assignedClasses.join(' ')}>Fistros</p>
          {/* <button style={style} onClick={this.fistreHandler.bind(this, 0)}>
          Fistrea
        </button> */}
          <button onClick={this.toggleHandler} className={btnClass}>
            Toggle
          </button>
          {personRender}
        </div>
      </ErrorBoundary>
    )
  }
}

export default App
