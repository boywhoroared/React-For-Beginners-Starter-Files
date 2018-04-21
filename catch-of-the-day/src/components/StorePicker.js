import React, { Component } from 'react'

export default class StorePicker extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        return (
            <form action="" className="store-selector">
                <h2>Please Enter A Store</h2>
                <input type="text" placeholder="Store Name"/>
                <button type="submit">Visit Store</button>
            </form>
        )
    }
}
