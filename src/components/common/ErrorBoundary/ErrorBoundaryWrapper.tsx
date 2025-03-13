import React, { Component, ErrorInfo } from "react";

interface Props {
  children: React.ReactNode;
  onError: (error: Error, errorInfo: ErrorInfo) => void;
}

interface State {
  hasError: boolean;
}

class ErrorBoundaryWrapper extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.props.onError(error, errorInfo);
  }

  render(): React.ReactNode {
    return this.props.children;
  }
}

export { ErrorBoundaryWrapper };
