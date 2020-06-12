import React from "react";
import "./App.css";
import AddUser from "./AddUser";
import Users from "./Users";
import { Provider } from "react-redux";
import store from "./store";

class App extends React.Component {
  render() {
    return (
      // the provider wraps the applicaiton
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <h1>Form State, Spread Syntax, Ternary Operator</h1>
          </header>
          <AddUser />
          <hr />
          <Users />
        </div>
      </Provider>
    );
  }
}

export default App;

// npm i redux react-redux redux-thunk
