import { Route, Switch, Redirect } from 'react-router-dom'

import Login from "@/page/Login"
import Home from "@/page/Home"
import Mine from "@/page/Mine"
import Next from "@/page/Next"
import Next1 from "@/page/Next/next1"
import Next2 from "@/page/Next/next2"

import Hooks from "@/page/Hooks"

import Testmobx from "@/page/testmobx"

import useHooks from "@/page/Hooks/use-hooks.jsx"
// import Template from "@/page/template"
import Errors from "@/page/errors"

let routes = [
    // {
    //     path: '/home',
    //     component: Home,
    //     children: [
    //         {
    //             path: '/next',
    //             component: Next
    //         }, {
    //             path: '/home/mine',
    //             component: Mine
    //         },
    //     ]
    // }, 
    {
        path: '/home',
        name:"home",
        component: Home,
    },
    {
        path: '/next',
        name:"next",
        component: Next,
        children: [
            {
                path: '/next/next1',
                name:"next1",
                component: Next1
            }, {
                path: '/next/next2',
                name:"next2",
                component: Next2
            },
        ]
    },
    {
        path: '/hooks',
        name:"Hooks",
        component: Hooks,
        children: [
            {
                path: '/hooks/use-hooks',
                name:"useHooks",
                component: useHooks
            }
        ]
    },
    {
        path: '/testmobx',
        name:"testmobx",
        component: Testmobx,
    },
    {
        path: '/mine',
        name:"mine",
        component: Mine,
    },
    {
        path: '/errors',
        name:"errors",
        hidden: true,
        component: Errors,
    },
    { path: '**', redirect: '/errors', hidden: true }
]
// 此处暂时值判断登录权限
// let router = [
//     {
//         path: '/',//首页默认加载的页面
//         redirect: '/home',
//         hidden: true,
//         exact: true //是否为严格模式
//     },
//     // 必要时在做嵌套路由

//     // {
//     //     path: '/layout',
//     //     componentName: Layout,
//     //     routes: [  /** 嵌套路由  User下面又有两个子页面*/
//     //         {
//     //             path: '/home/',
//     //             componentName: Home,
//     //             exact: false
//     //         },
//     //     ]
//     // },
//     {
//         path: '/home',
//         componentName: Home,
//         // permissionId: '10001',
//         exact: true,//是否为严格模式
//     },
//     {
//         path: '/mine',
//         componentName: Mine,
//         // permissionId: '10001',
//         exact: true,//是否为严格模式
//     },
//     {
//         path: '/next',
//         componentName: Next,
//         // permissionId: '10001',
//         exact: true,//是否为严格模式
//     },
//     {
//         path: '/errors',
//         componentName: Errors,
//         hidden: true,
//         exact: true //是否为严格模式
//     },
//     // 重定向
//     {
//         path: '**',
//         hidden: true,
//         redirect: '/errors'
//     },
// ];

export const isLoginView = <Switch>
    <Route path="/login" component={Login} exact />
    < Route path="**" >
        <Redirect to="/login" />
    </Route >
</Switch >
export const routerMain = routes


