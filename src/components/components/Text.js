import React from 'react'

function Text({text,warn,error}) {
 
    return (
        <div className=" border my-0.5 text-gray-600 border-gray-400 rounded-xl  max-w-xl mx-auto bg-whiteshadow-md overflow-hidden xl:max-w-2xl bg-yellow-50  " >
            <p className="font-light ml-4" > <span className="text-red-400 ">{text}:</span> ERROR: {error}  WARN:  {warn} </p>   
        </div>
    )
}

export default Text
