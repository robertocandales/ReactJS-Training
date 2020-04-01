import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }
    

    render() {
        return (
            this.state.isLoggedIn ?
                <div>Esto es un Mensaje True</div> :
                <div>Esto es un Mensaje False</div>

            
        )
    }
}

export default UserGreeting
