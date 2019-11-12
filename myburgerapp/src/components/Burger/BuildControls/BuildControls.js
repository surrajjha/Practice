import React from 'react'
import './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'


const controls =[
    {label:'Salad',type:'salad'},
    {label:'Bacon',type:'bacon'},
    {label:'Cheese',type:'cheese'},
    {label:'Meat',type:'meat'}
]
const buildercontrols =(props) =>(
<div className="BuildControls">
    {controls.map(ctrl =>(
        <BuildControl kry={ctrl.label} label={ctrl.label}
        added={() =>props.ingredientAdded(ctrl.type)}
            substracted={()=>props.ingredientSubstracted(ctrl.type)}>
        </BuildControl>    ))}
</div> 


)

export default buildercontrols;