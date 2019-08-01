import React, { useState } from "react"
import Alone from './components/Alone'
import "./App.css"

export const { Provider, Consumer } = React.createContext({
  inputValue: ""
})

export default () => {
  let [inputValue, setInputValue] = useState('')

  const onUserInput = newVal => {
    setInputValue(newVal)
  }

  return (
    <Provider
      value={{val: inputValue, onUserInput: onUserInput }}
    >
      <div className="app">
        <A />
      </div>

      <Alone />
    </Provider>
  )
}

const A = () => (
  <div className="child">
    <span className="title"> A </span>
    <B />
    <C />
  </div>
)

const B = () => (
  <div className="child">
    <span className="title"> B</span>
    <Consumer>
      {({ val, onUserInput }) => (
        <input
          type="text"
          style={{height: '20px'}}
          value={ val }
          onChange={e => onUserInput(e.target.value)}
        />
      )}
    </Consumer>
  </div>
)

const C = () => (
  <div className="child">
    <span className="title"> C </span>
    <Consumer>{({ val }) => <p>{ val }</p>}</Consumer>
  </div>
)
