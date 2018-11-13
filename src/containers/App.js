import React, { Component } from 'react'
import classes from './App.css'
import Persons from '../components/Persons/Persons'
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary'
import Cockpit from '../components/Cockpit/Cockpit'

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

    return (
      <div className={classes.App}>
        <Cockpit
          showPersons={this.state.visible}
          persons={this.state.persons}
        />
        {persons}
      </div>
    )
  }
}

export default App
