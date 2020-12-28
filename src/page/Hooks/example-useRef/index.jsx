import React, { useRef, useState } from 'react';
function ExampleuseRef() {
    const inputEl = useRef(null)
    const onButtonClick = () => {
        inputEl.current.value = "hello"
    }
    console.log('xx')
    const [text, setText] = useState('js')
    return (
        <>
            <input ref={inputEl} type="text" />
            <button onClick={onButtonClick}>展示</button>
            {text}
            <input value={text} type="text" onChange={(e)=>{setText(e.target.value)}} />
        </>
    )
}
export default ExampleuseRef