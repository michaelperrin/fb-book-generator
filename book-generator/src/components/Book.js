import React from "react";

export default class Book extends React.Component {
  constructor() {
    super();
    this.state = {
      title: 'Welcome to Book generator!',
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
      </div>
    );
  }
}
