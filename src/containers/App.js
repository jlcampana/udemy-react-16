import React, { PureComponent } from 'react'
import classes from './App.css'
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
import WithClass from '../components/Aux/WithClass'
import Aux from '../components/Aux/Aux'
const persons = [
  { name: 'Jose Luis', age: 41, id: 'fistro1' },
  { name: 'Elle McPherson', age: 54, id: 'fistro2' }
]

// By using PureComponent, you don't need to control the shouldUpdate
// Use always PureComponents
// Use Components when you know your component won't be updated
class App extends PureComponent {
  constructor(props) {
    super(props)
    console.log('[App.js] constructor', props)
    this.state = {
      persons,
      visible: false,
      toggleClicked: 0
    }
  }

  componentWillMount() {
    console.log('[App.js] componentWillMount()')
  }
  componentDidMount() {
    console.log('[App.js] componentDidMount()')
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[App.js] shouldComponentUpdate', nextProps, nextState)
  //   return (
  //     nextProps.persons !== this.props.persons ||
  //     nextState.visible !== this.state.visible
  //   )
  // }
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
    this.setState((prevState, props) => {
      return {
        visible: !this.state.visible,
        toggleClicked: prevState.toggleClicked + 1
      }
    })
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
      <Aux>
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
      </Aux>
    )
  }
}

export default WithClass(App, classes.App)
