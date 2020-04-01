import React, { Component } from 'react'

export class Welcome extends Component {
    render() {
        const {name, heroName} = this.props //destructuring, para no colocar props.name y props.heroName
        return (
            <h1>
                {name} mas {heroName}
            </h1>
        )
    }
}

export default Welcome
