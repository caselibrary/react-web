import React, { useState, createContext, useContext, useEffect } from 'react';
import { ColorContext, UPDATE_COLOR } from "./color.jsx"
function Buttons() {
    const { dispatch } = useContext(ColorContext)
    return (
        <div>
            <button onClick={() => dispatch({ type: UPDATE_COLOR, color: "red" })}>黄色</button>
            <button onClick={() => dispatch({ type: UPDATE_COLOR, color: "yellow" })}>蓝色</button>
        </div>
    )
}
export default Buttons;