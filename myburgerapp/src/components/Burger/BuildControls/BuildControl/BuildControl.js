import React from 'react'
import './BuildControl.css'

const buildcontrol=(props) => (
    <div className="BuildControl">
    <div className="Label">{props.label}</div>
    <button className="More" onClick={props.added}>More</button>
    <button className="Less" onClick={props.substracted}>Less</button>
</div>
)


export default buildcontrol;