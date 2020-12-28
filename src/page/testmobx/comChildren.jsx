import React, { Component } from 'react';
class comChildren extends Component {

    render() {
        console.log('nnn')
        return (
            <>
                {this.props.age}
             
            </>
        )
    }
    componentDidMount() {
        console.log('hhh')
    }

}

export default comChildren