import React, { Component } from 'react'

export default class Changer extends Component {
    constructor(props) {
        super(props)
    this.state = {
        color: ''
    }
    this.changeColor = this.changeColor.bind(this);
}
    changeColor() {
        this.setState({
            color: 'cornflowerblue'
        })
    }

    render() {
        return (
            <div>
                <div style={{height:'150px', backgroundColor:this.state.color}}>
                </div>
                <button onClick={this.changeColor}>CLICK ME TO CHANGE COLOR</button>
            </div>
        )
    }
}
