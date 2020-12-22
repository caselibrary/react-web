import RouterView from "@/router/routerView.jsx"

import React, { Component } from 'react';


class Notes extends Component {
  render() {
    return (
      <div className="Notes">
        <RouterView routes={this.props.routes}></RouterView>
      </div>
    );
  }
  componentDidMount() {
   console.log(this.props)
  }
}

export default Notes;