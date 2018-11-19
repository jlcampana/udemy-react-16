import React, { Component } from 'react'

import AuthContext from '../auth-context'

class Login extends Component {
  static contextType = AuthContext //le dice a React qué Contexto debe conectar

  componentDidMount() {
    console.log(this.context)
  }

  render() {
    return (
      <button onClick={this.context.toggleAuth}>
        {this.context.isAuth ? 'Logout' : 'Login'}
      </button>
    )
  }
}

export default Login
