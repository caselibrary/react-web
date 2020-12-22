import React, { useState, createContext, useContext, useEffect } from 'react';
import { ColorContext } from "./color.jsx"
function ExampleView(props) {
    const { color } = useContext(ColorContext)
    return (
        <div style={{ color }}>213123</div>
    )
}
export default ExampleView;