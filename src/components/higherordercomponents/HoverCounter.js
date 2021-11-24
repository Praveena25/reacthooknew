import React, { Component } from 'react'
import UpdatedComponent from './withCounter'
 class HoverCounter extends Component {

    


    render() {
        const {countKey,incrementCount} = this.props
        return (
            <div>
                <h2 onMouseOver = {incrementCount}> Hovered {countKey} times</h2>
            </div>
        )
    }
}

export default UpdatedComponent(HoverCounter)