import { inject, observer } from 'mobx-react'
import React, { Component } from 'react';
import ComChildren from './comChildren'
@inject('StyleStore')
@observer
class Testmobox extends Component {
    state = {
        s: 1
    }
    render() {
        console.log('xxx')
        return (
            <>
                {this.props.StyleStore.color}
                {this.props.StyleStore.total}
                <p style={{ 'color': this.props.StyleStore.color }}>hello, world</p>
                <button onClick={() => { this.props.StyleStore.changeColor('yellow');this.props.StyleStore.changeSize(30) }}>改变文字颜色</button>
            </>
        )
    }
    componentDidMount() {
        //   console.log(StyleStore)
    }

}

export default Testmobox