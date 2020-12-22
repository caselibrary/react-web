import ReactDOM from 'react-dom';
import React, { useState, createContext, useContext } from 'react';
import { Color } from "./example/color"
import Buttons from "./example/button"
import ExampleView from "./example/exampleView"
function useHooks(props) {
  return (
    <div>
      <Color>
        <Buttons></Buttons>
        <ExampleView></ExampleView>
      </Color>
    </div>
  )
}
export default useHooks;