import React, { Component } from 'react'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'
const WithClass = (WrappedComponent, className) => {
  return class extends Component {
    render() {
      return (
        <ErrorBoundary>
          <div className={className}>
            <WrappedComponent {...this.props} />
          </div>
        </ErrorBoundary>
      )
    }
  }
}

export default WithClass
