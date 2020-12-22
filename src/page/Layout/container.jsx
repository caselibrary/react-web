import React, { Component } from 'react';
import { Menu, Button } from 'antd';
import RouterView from "@/router/routerView.jsx"
import { routerMain } from '@/router'
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons';

class Container extends Component {
    constructor(props) {
        super(props)
    }
    toggleCollapsed = () => {
        this.props.handleCollapsed(!this.props.collapsed)
    };
    render() {
        return (

            <div className="container">
                <div className="containerHeader">
                    <span onClick={this.toggleCollapsed} style={{ fontSize: 20, lineHeight: "50px", marginLeft: "10px", cursor: 'pointer' }}>
                        {React.createElement(this.props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
                    </span>
                    <span className="header-title">{this.props.name}</span>
                </div>
                <div className="containerContent">
                    <RouterView routes={routerMain}></RouterView>
                </div>

            </div>
        );
    }
    componentDidMount() {

    }

}

export default Container;