import React from 'react';
import { Consumer } from "../App";

export default () => (
  <div style={{textAlign: 'center', fontSize: '28px'}}>
    <p>Alone</p>
    <Consumer>{({ val }) => <p>{ val }</p>}</Consumer>
  </div>
)
