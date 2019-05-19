// dependencies
import React, { Component } from 'react';

class MessagesThread extends Component {
  render() {
    const { id } = this.props.match.params

    return (
      <div>
        <div>id: {id}</div>
      </div>
    )
  }
}

export default MessagesThread;
