import React, { Component } from 'react';
import Products from './Products';

class App extends Component {
  formatName(user) {
    return user.firstName + " " + user.lastName;
  };

  render() {
    const user = {
      firstName: "Sharon-Rose",
      lastName: "Siyanata"
    };

    return (
      <div>
        {/* <h1>My First React App!</h1> */}
        <Products />

        {/* <h1>Hello there, {this.formatName(user)}!</h1> */}
      </div>
    );
  }
}

export default App;