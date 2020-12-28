import ReactDOM from 'react-dom';
import React, { useState, createContext, useContext } from 'react';
// import { Color } from "./example-redux/color"
// import Buttons from "./example-redux/button"
// import ExampleView from "./example-redux/exampleView"
// import Examplemont from "./example-usemont"
// import ExampleuseRef from "./example-useRef"
import useWinSize from "./create-hooks"




function useHooks(props) {
  const size = useWinSize()
  return (
    <div>
      {size.width}
      {/* <ExampleuseRef></ExampleuseRef> */}
      {/* <Color>
        <Buttons></Buttons>
        <ExampleView></ExampleView>
      </Color> */}
    </div>
  )
}
export default useHooks;