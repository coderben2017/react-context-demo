import React from 'react';
import { Consumer} from "../App";

export default class User extends React.Component{
  render() {
    return (
      <div style={{'text-align': 'center'}}>
        <h3>此处是User组件</h3>
        <Consumer>{({val}) => <h5>{val}</h5>}</Consumer>
      </div>
    );
  }
}
