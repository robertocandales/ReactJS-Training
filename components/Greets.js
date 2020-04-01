import React from 'react'

const Greets = (props) => {
    // console.log(props)
    const {name, heroName} = props //destructuring, para no colocar props.name y props.heroName
    return (
    <div>
        <h1> {name} a.k.a {heroName}</h1>
        {props.children}
    </div>

    )
} 


export default Greets