import React, { Component } from 'react';
import { Space, Radio, Button } from 'antd';


class Home extends Component {
  state = {
    a: {
      b: {
        c: 1,
        n: 2
      }
    }
  }
  render() {
    return (
      <div className="Home">
        Home界面
        <Space size={12} >
          <div>132213</div>
          <div>132213</div>
          <div>132213</div>
        </Space>
        <div size={12} style={{ display: 'inline-flex' }}>
          <div style={{ marginRight: "12px" }}>132213</div>
          <div style={{ marginRight: "12px" }}>132213</div>
          <div style={{ marginRight: "12px" }}>132213</div>
        </div>

        <Space size={12} direction='vertical'>
          <div>132213</div>
          <div>132213</div>
          <div>132213</div>
        </Space>
        <div size={12} style={{ display: 'inline-flex', flexDirection: 'column' }} >
          <div style={{ marginBottom: "12px" }}>132213</div>
          <div style={{ marginBottom: "12px" }}>132213</div>
          <div style={{ marginBottom: "12px" }}>132213</div>
        </div>
      </div >
    );
  }
  componentDidMount() {

  }
}

export default Home;