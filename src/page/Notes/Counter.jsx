import React, { useState, createContext, useContext,useEffect } from 'react';
import { ConuntContext } from "./use-hooks.jsx"
function Counter(props) {
    useEffect(() => {
        // 使用浏览器的 API 更新页面标题
       console.log(props)
      },[])
    let count = useContext(ConuntContext)
    return <h2>子{props.s}</h2>
}
export default Counter;