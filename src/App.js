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
        <span className="text-center"> A </span>
        <NodeB />
        <NodeC />
      </div>
    );
  }
}

const NodeB = () => {
  return (
    <div className="Tree element">
      <span className="text-center"> B</span>
      <NodeD />
    </div>
  );
};

const NodeC = () => {
  return (
    <div className="Tree element">
      <span className="text-center"> C </span>
      <NodeE />
    </div>
  );
};

const NodeD = () => {
  return (
    <div className="Child element">
      <span className="text-center"> D </span>
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
      <span className="text-center"> E </span>
      <Consumer>{({val}) => <p>{val}</p>}</Consumer>
    </div>
  );
};
