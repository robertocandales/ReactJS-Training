import React from 'react'
import Person from './Person'

function NameList() {

    const names = [
        {
            id: 1,
            name: 'bruce',
            age: 30,
            skill: 'react'
        },
        {
            id: 2,
            name: 'asfas',
            age: 10,
            skill: 'bbbb'
        },
        {
            id: 3,
            name: 'zxc',
            age: 340,
            skill: 'ttt'
        }
    ]

    const nombres = names.map((xyz, id) => 
        <Person xyz = {xyz} key={id} />
    )

    return (
        <div>
            {
                nombres
                
            
        }
        </div>
    )
}

export default NameList;