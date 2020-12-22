import RouterView from "@/router/routerView.jsx"

import React, { Component } from 'react';


class Next extends Component {
  render() {
    return (
      <div className="Next">
        <RouterView routes={this.props.routes}></RouterView>
      </div>
    );
  }
  componentDidMount() {
   console.log(this.props)
  }
}

export default Next;