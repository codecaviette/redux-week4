import React from "react";
import "./App.css";
import AddUser from "./AddUser";
import Users from "./Users";
import { Provider } from "react-redux";
import store from "./store";

import { Spring } from "react-spring/renderprops";

class App extends React.Component {
  render() {
    return (
      // the provider wraps the applicaiton
      <Provider store={store}>
        <div className="App">
          <Spring
            from={{ opacity: 0, marginLeft: 100 }}
            to={{ opacity: 1, marginLeft: 0 }}
            config={{ duration: 1000, delay: 200 }}
          >
            {(props) => (
              <header className="App-header" style={props}>
                <h1>Form State, Spread Syntax, Ternary Operator</h1>
              </header>
            )}
          </Spring>

          <Spring
            from={{ opacity: 0, marginRight: 100 }}
            to={{ opacity: 1, marginRight: 0 }}
            config={{ duration: 1000, delay: 200 }}
          >
            {(props) => (
              <div style={props}>
                <AddUser />
                <hr />
                <Users />
              </div>
            )}
          </Spring>
        </div>
      </Provider>
    );
  }
}

export default App;

// npm i redux react-redux redux-thunk
