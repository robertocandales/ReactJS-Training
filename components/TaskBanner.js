import React from 'react'

export default function TaskBanner(props) {
    return (
        <h4 className=" bg-primary text-white text-center p-4">
            {props.username} Task App ({props.taskItem.filter(t => !t.done).length} task do )
        </h4>
    )
}
