import React from 'react'

function Text({text, msg, lv}) {
 
    return (
        <div  className={`border my-0.5 text-gray-600 border-gray-400 rounded-xl  max-w-xl mx-auto bg-whiteshadow-md overflow-hidden xl:max-w-2xl bg-${lv}-300 `}>
            <p className="font-light ml-4" > {text} : {msg} </p>   
        </div>
    )
}

export default Text

