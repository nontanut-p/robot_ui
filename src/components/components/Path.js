import React from 'react'

function Path({text}) {
 
    return (
        <div className=" border my-0.5 text-gray-600 border-gray-400 rounded-xl  max-w-xl mx-auto bg-whiteshadow-md overflow-hidden xl:max-w-2xl bg-yellow-50  " >
            <p className="font-light ml-4" > <span className="text-red-400 ">Path Name:</span> <button> {text} </button></p>   
        </div>
    )
}

export default Path
