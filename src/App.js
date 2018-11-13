import React, { Component } from 'react'
import './App.css'
import Person from './components/Person/Person'
import Radium, { StyleRoot } from 'radium' //Media queries & selectors
const persons = [
  { name: 'Jose Luis', age: 41, id: 'fistro1' },
  { name: 'Elle McPherson', age: 54, id: 'fistro2' }
]

class App extends Component {
  state = {
    persons,
    visible: true
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
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }

    let personRender = null
    if (this.state.visible) {
      personRender = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                delegate={() => this.deletePersonHandler(index)}
                key={person.id}
                updateDelegate={event =>
                  this.nameChangeHandler(event, person.id)
                }
              />
            )
          })}
        </div>
      )
    }

    const classes = []

    if (this.state.persons.length <= 1) {
      classes.push('red')
    }
    if (this.state.persons.length <= 2) {
      classes.push('bold')
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1>Hi, I'm a react app</h1>
          <p className={classes.join(' ')}>Fistros</p>
          {/* <button style={style} onClick={this.fistreHandler.bind(this, 0)}>
          Fistrea
        </button> */}
          <button onClick={this.toggleHandler} style={style}>
            Toggle
          </button>
          {personRender}
        </div>
      </StyleRoot>
    )
  }
}

export default Radium(App)
