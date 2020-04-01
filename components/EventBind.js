import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: 'hello'
        }

        // this.clickHander = this.clickHander.bind(this) //para la tercera manera de usar el bind es definiendolo aca en el constructor
    }
      clickHander = () =>{
         this.setState({
             message: 'Godbye'
         })
     }

     clickHander = () =>{  // cuarta manera de usar el bind
         this.setState ({
         message: 'godbye'
        })
     }
    


    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHander.bind(this)}>Click</button> */}

                {/* <button onClick={() => this.clickHander()}>Click</button> */}

                {/* <button onClick={this.clickHander}>Click</button> */}

                <button onClick={this.clickHander}>Click</button>

            </div>
        )
    }
}

export default EventBind
