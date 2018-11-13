import React, { Component } from 'react'
import './App.css'
import Person from './components/Person/Person'

const persons = [
  { name: 'Jose Luis', age: 41 },
  { name: 'Elle McPherson', age: 54 }
]

class App extends Component {
  state = {
    persons,
    visible: true
  }

  nameChangeHandler = event => {
    console.log('change')
    this.setState({
      persons: persons.map(i => {
        return {
          name: event.target.value,
          age: i.age
        }
      })
    })
  }

  fistreHandler = idx => {
    persons[idx].name = 'Es un fistro'
    this.setState({ persons })
  }

  toggleHandler = () => {
    this.setState({ visible: !this.state.visible })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    return (
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <button style={style} onClick={this.fistreHandler.bind(this, 0)}>
          Fistrea
        </button>
        <button onClick={this.toggleHandler} style={style}>
          Toggle
        </button>
        {this.state.visible ? (
          <div>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
              delegate={this.fistreHandler.bind(this, 0)}
              updateDelegate={this.nameChangeHandler}
            />
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              delegate={this.fistreHandler.bind(this, 1)}
              updateNameDelegate={this.nameChangeHandler}
            >
              My hobbies: modelling
            </Person>
          </div>
        ) : null}
      </div>
    )
  }
}

export default App
