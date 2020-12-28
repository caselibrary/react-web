import React, { useState,useMemo} from 'react';

function Examplemont() {
    const [xiaohong, setxiaohong] = useState('小红在待机')
    const [xiaolan, setxiaolan] = useState("小蓝在待机")
    return (
        <>
            <button onClick={() => { setxiaohong(new Date().getTime()) }}>小红</button>
            <button onClick={() => { setxiaolan(new Date().getTime()) }}>小蓝</button>
            <ChildrenComponent name={xiaohong}>{xiaolan}</ChildrenComponent>
        </>
    )
}

function ChildrenComponent({ name, children }) {
    function changeXiaohong(name) {
        console.log('执行了')
        return name + "向我们走来"
    }
    console.log('xxx')
    const actionXiaohong = useMemo(()=>changeXiaohong(name),[name])
    return (
        <>
            <div>{actionXiaohong}</div>
            <div>{children}</div>
        </>
    )
}
export default Examplemont