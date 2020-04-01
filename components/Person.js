import React from 'react'

export default function Person({xyz , id}) {
    return (
        <div>
            <h3>Nombre: {xyz.name}. Age: {xyz.age}. Skill: {xyz.skill}  </h3>
        </div>
    )
}

