import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
class routerView extends Component {
  render() {
    let rdArr = this.props.routes.filter(item => item.redirect);	//把所以路由重定向取出来
    let rdCom = rdArr.map((item, key) => <Redirect from={item.path} to={item.redirect} key={'redirect' + key} />);
    return (
      <Switch>
        {
          this.props.routes.map((item, index) => {
            return !item.redirect && <Route key={'component' + index} path={item.path} exact={item.exact} render={() => {
              return <item.component routes={item.children}></item.component>
            }}></Route>
          }).concat(rdCom)
        }
      </Switch>
    )
  }
}
export default routerView