import React , {useEffect , useState} from 'react';
import Path from './Path'
import Peer from '../../Peer.js';

function Roslog() {
   

    const numbers = [1, 2, 3, 4, 5];    
    
 
    return (
        <div className='mt-5  h-80 border-2 max-w-xl mx-auto max-h-80 bg-white w-full rounded-xl shadow-md xl:max-w-2xl h-2/3 bg-gray-100'>
        <div className="text-center border-5  pl-3 rounded-sm mx-2 my-2 text-blue-600 font-semibold hover:bg-sky-700">
            ROS LOG 
        </div>
        <div className="h-5/6 overflow-y-auto mb-10">
 
    
        </div>
      {/* /<Text text={message} />      */}
   
     
    </div>
    )
}

export default Roslog



