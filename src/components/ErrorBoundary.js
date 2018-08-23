import React from 'react';

export default class ErrorBoundary extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true, error, errorInfo: info });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <p>
            <strong>Something went wrong.</strong>
          </p>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }
    return this.props.children;
  }
}
