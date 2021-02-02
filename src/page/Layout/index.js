import React, { Component } from 'react';
import '@/style/Layout/index.less';
import { Menu, Button } from 'antd';
import Container from './container.jsx';
import { routerMain } from "@/router"
import { withRouter } from 'react-router-dom';
import {
    AppstoreOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;


class Layout extends Component {
    constructor(props) {
        super(props)
    }
    state = {
        collapsed: false,
        current:this.props.history.location.pathname,
        name:"home"
    };

    toggleCollapsed = (collapsed) => {
        this.setState({
            collapsed
        });
    };
    handleItem(path,name) {
        this.props.history.push(path)
        this.setState({
            current:path,
            name
        });
    }
    render() {
        let routes = routerMain.filter(item => !item.hidden)
        return (
            <div className="layout">
                {/* <div className="columnMenu" style={{ width: this.state.collapsed ? 80 : 256 }}>
                    <Menu
                        defaultOpenKeys={['/'+this.state.current.split("/")[1]]}
                        selectedKeys={[this.state.current]}
                        mode="inline"
                        theme="dark"
                        inlineCollapsed={this.state.collapsed}
                    >
                        {
                            routes.map((item, index) => {
                                return item.children ? <SubMenu key={item.path} icon={<MailOutlined />} title={item.name}>
                                    {
                                        item.children.map((ites, indes) => {
                                            return <Menu.Item onClick={this.handleItem.bind(this, ites.path,ites.name)} key={ites.path} icon={<PieChartOutlined />}>
                                                {ites.name}
                                            </Menu.Item>
                                        })
                                    }

                                </SubMenu> :
                                    <Menu.Item onClick={this.handleItem.bind(this, item.path,item.name)} key={item.path} icon={<PieChartOutlined />}>
                                        {item.name}
                                    </Menu.Item>
                            })
                        }
                    </Menu>
                </div> */}
                <Container handleCollapsed={this.toggleCollapsed.bind(this)} collapsed={this.state.collapsed} name={this.state.name}></Container>


            </div>

        );
    }
    componentDidMount() {
        console.log(this.props.history)
    }

}

export default withRouter(Layout);