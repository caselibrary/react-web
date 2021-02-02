import React, { Component } from 'react';
import { Form, Select, Input, Button, Upload, Icon } from 'antd';
import Viewer from 'viewerjs';
import 'viewerjs/dist/viewer.css'

const { Option } = Select;

class Image extends Component {
  myInput=null
  state={

    viewer:null,
    width:'50px'
  }
 
  render() {
    return (
      <>
        <img ref={(ref)=>{this.myInput = ref}}  style={{ width: "50px" }} src="https://cass-xm.oss-cn-shenzhen.aliyuncs.com/images/test/2020-12-29/xm-ec-ksgwq/xm_login_skin1609236910123.jpg" alt="Picture" />
      </>
    )
  }
  componentDidMount(){
    const viewer= new Viewer(this.myInput, {
      // inline: false,  //是否启用 inline 模式
      navbar: false,  //显示缩略图导航
      zoomRatio: 0.4,  //鼠标滚动时的缩放比例
      toolbar: {   //显示工具栏
        zoomIn: 1,
        zoomOut: 1,
        oneToOne: 1,
        reset: 1,
        prev: 0,
        play: 1,
        next: 0,
        rotateLeft: 1,
        rotateRight: 1,
        flipHorizontal: 1,
        flipVertical: 1,
      },
      viewed: function () {
        // viewer.zoomTo(2)
        console.log('xxx')
        // viewer.view(0);

      }
    });
    this.setState({
      viewer
    })
  }
  componentWillUnmount(){
    const {viewer}=this.state
    viewer.destroy()
  }
}



class Home extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  handleSelectChange = value => {
    console.log(value);
    this.props.form.setFieldsValue({
      note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
    });
  };
  normFile = e => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };
  render() {

    return (
      <div className="Home">

        <Image></Image>
        <Image></Image>
        {/* <img id="image" style={{ width: "50px" }} src="https://pics0.baidu.com/feed/18d8bc3eb13533fa895f8add00572d1843345be7.jpeg?token=db85d6283c042d9c7bb0d475ec304350&s=BA5FA14CCA32261FC56D5C9403001082" alt="Picture" /> */}


      </div >
    );
  }
  componentDidMount() {


  }
}

export default (Home)