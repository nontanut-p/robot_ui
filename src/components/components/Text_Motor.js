import React from 'react'

function Text_Motor({id, position, velo, currnet}) {
 
    return (
        <div  className={`border my-0.5 text-gray-600 border-gray-400 rounded-xl  max-w-xl mx-auto bg-whiteshadow-md overflow-hidden xl:max-w-2xl  `}>
            <p className="font-light ml-4" > ID : {id}  <span>&nbsp;&nbsp;</span> Current : {currnet.toFixed(2)} A  <span>&nbsp;&nbsp;</span> Position : {position.toFixed(2)}  <span>&nbsp;&nbsp;</span>  Velocity : {velo.toFixed(2)} </p>   
        </div>
    )
}

export default Text_Motor

