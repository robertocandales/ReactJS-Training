import React, { Component } from 'react'

class ClassClick extends Component {

     evento = () => {
        console.log('click en class')

    }
   
    render() {
        
        return (
            <div>
                <button onClick = {this.evento}>ClickClass</button>
            </div>
        )
    }
}

export default ClassClick
