//we import our react comfonent from react
import React, { Component } from 'react';
//we added our product route path
import Products from './Products';

// we have changed our react app to a state where we can see the user name and surname, product and our h1 tag.
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
{/* 
        <h1>Hello there, {this.formatName(user)}!</h1> */}
      </div>
    );
  }
}

export default App;


