import React from "react";
import "./App.css";
import User from './components/User'

export const {Provider, Consumer} = React.createContext({
  inputValue: ""
});

export default class App extends React.Component {
  state = {
    inputValue: ""
  };

  onUserInput = newVal => {
    this.setState({ inputValue: newVal });
  };

  render() {
    return (
      <Provider
        value={{ val: this.state.inputValue, onUserInput: this.onUserInput }}
      >
        <div className="App">
          <NodeA />
        </div>

        <User></User>
      </Provider>
    );
  }
}

class NodeA extends React.Component {
  render() {
    return (
      <div className="Root element">
        <center> A </center>
        <NodeB />
        <NodeC />
      </div>
    );
  }
}

const NodeB = () => {
  return (
    <div className="Tree element">
      <center> B</center>
      <NodeD />
    </div>
  );
};

const NodeC = () => {
  return (
    <div className="Tree element">
      <center> C </center>
      <NodeE />
    </div>
  );
};

const NodeD = () => {
  return (
    <div className="Child element">
      <center> D </center>
      <Consumer>
        {({ val, onUserInput }) => (
          <textarea
            type="text"
            value={val}
            onChange={e => onUserInput(e.target.value)}
          />
        )}
      </Consumer>
    </div>
  );
};
const NodeE = () => {
  return (
    <div className="Child element ">
      <center> E </center>
      <Consumer>{({val}) => <p>{val}</p>}</Consumer>
    </div>
  );
};
