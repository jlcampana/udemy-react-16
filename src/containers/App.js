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
  constructor(props) {
    super(props)
    console.log('[App.js] constructor', props)
    this.state = {
      persons,
      visible: false
    }
  }

  componentWillMount() {
    console.log('[App.js] componentWillMount()')
  }
  componentDidMount() {
    console.log('[App.js] componentDidMount()')
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate', nextProps, nextState)
    return (
      nextProps.persons !== this.props.persons ||
      nextState.visible !== this.state.visible
    )
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('[App.js] componentWillUpdate', nextProps, nextState)
  }
  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate()')
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

  deletePersonHandler = idx => {
    const tmpPersons = [...this.state.persons]
    tmpPersons.splice(idx, 1)
    this.setState({ persons: tmpPersons })
  }

  toggleHandler = () => {
    this.setState({ visible: !this.state.visible })
  }

  render() {
    console.log('[App.js] render()')
    let personRender = null

    if (this.state.visible) {
      personRender = (
        <Persons
          persons={this.state.persons}
          deletePersonHandler={this.deletePersonHandler}
          nameChangeHandler={this.nameChangeHandler}
        />
      )
    }

    return (
      <div className={classes.App}>
        <ErrorBoundary>
          <button
            onClick={() => {
              this.setState({ visible: true })
            }}
          >
            Show persons
          </button>
          <Cockpit
            toggleHandler={this.toggleHandler}
            persons={this.state.persons}
          />
          {personRender}
        </ErrorBoundary>
      </div>
    )
  }
}

export default App
