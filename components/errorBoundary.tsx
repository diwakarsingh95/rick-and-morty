import { Component, ErrorInfo, ReactNode } from 'react'
import { withRouter } from 'next/router'
import { WithRouterProps } from 'next/dist/client/with-router'

interface Props extends WithRouterProps {
  children?: ReactNode
}

interface State {
  hasError: boolean
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)

    // Define a state variable to track whether is an error or not
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI

    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can use your own error logging service here
    console.log({ error, errorInfo })
  }

  redirectToHome = () => {
    this.setState({ hasError: false })
    this.props.router.replace('/')
  }

  render() {
    // Check if the error is thrown
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div>
          <h2>Oops, Something went wrong!</h2>
          <button type='button' onClick={this.redirectToHome}>
            Home
          </button>
        </div>
      )
    }

    // Return children components in case of no error
    return this.props.children
  }
}

export default withRouter(ErrorBoundary)
