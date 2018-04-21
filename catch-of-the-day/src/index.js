// let's go!

import React, { Component } from 'react'
import { render } from 'react-dom'

class StorePicker extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        return <p>Hello!</p>
    }
}

render(<StorePicker/>, document.querySelector('#main'))