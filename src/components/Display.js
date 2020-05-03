import React from 'react'

function Display(props) {
    return (
        <div className="display">
            <label className="digits">{props.value}</label>
        </div>
    )
}

export default Display
