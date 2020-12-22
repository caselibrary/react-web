import '@/App.css';
import React, { Component } from 'react';
import { routerMain, isLoginView } from '@/router'
import { BrowserRouter, NavLink, Route, Redirect, Switch } from 'react-router-dom'
import Layout from "@/page/Layout"
import RouterView from "@/router/routerView.jsx"

class App extends Component {
  handleMenthods(msg) {
    console.log(msg)
  }
  render() {
    let isShow = true
    return (
      isShow ? <BrowserRouter >
        <div className="App">
          {/* 路由 */}
          <Layout></Layout>
        </div>

      </BrowserRouter > : < BrowserRouter >
          <div className="App">
            {/* 未登录界面 */}
            {isLoginView}

          </div>
        </BrowserRouter >
    );
  }

}

export default App;
