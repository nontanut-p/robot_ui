import React from 'react';
import Peer from '../../Peer.js';
import { useState, useEffect } from 'react';
let img_stream
//	<img className='img' src={`data:image/jpeg;base64,${Peer[2]}`} />
function Camera() {
	let [button_click, setButton_click] = useState('OFF') 
	let [bg, setBG] = useState('red') 
	let [imageSource, setimageSource] = useState('https://www.pngitem.com/pimgs/m/674-6740802_web-cam-camera-off-webcam-off-icon-png.png') 
	
	function handleClick(e) {
		e.preventDefault();
		if(button_click === 'OFF'){
			setButton_click('ON')
			setBG('green')
			setimageSource('data:image/jpeg;base64,${Peer[2]}')
		}else {
			setButton_click('OFF')
			setBG('red')
			setimageSource("https://www.pngitem.com/pimgs/m/674-6740802_web-cam-camera-off-webcam-off-icon-png.png") 
		}	
	}
	useEffect(() => {
		setInterval(() => {
			img_stream = Peer[2]
			//console.log(img_stream)
		}, 50);
	});
	return (
		<div className=' border-2 max-w-xl mx-auto bg-white rounded-xl shadow-md overflow-hidden xl:max-w-2xl bg-gray-100'>
			<div className='text-center pl-2 pt-2 uppercase tracking-tight text-lg text-blue-700 font-semibold '>
			Camera
			<button onClick={handleClick} className={`hover: transform hover:-translate-y-1 hover:scale-110  hover:text-black text-white font-semibold rounded-full bg-${bg}-400  px-3	`} >
        {button_click}
      		</button>
			</div>
			<div>
				<div className='px-3 py-3 '>
					<div className="photo">	
						<img className='img' src={button_click =='OFF' ? 'https://www.pngitem.com/pimgs/m/674-6740802_web-cam-camera-off-webcam-off-icon-png.png' : `data:image/jpeg;base64,${img_stream}`}  />
					</div>
				</div>

				<div className='px-2 grid grid-cols-4 gap-4 pb-2'>
					<button onClick={()=> { Peer[4] = 1} } className='hover: transform hover:-translate-y-1 hover:scale-110  hover:text-black text-white font-semibold rounded-full bg-green-400'>
						{' '}
						Camera 1
					</button>
					<button onClick={()=> { Peer[4] = 2} } className='hover: transform hover:-translate-y-1 hover:scale-110  hover:text-black  text-white font-semibold rounded-full bg-green-400'>
					Camera 2
					</button>
					<button onClick={()=> { Peer[4] = 3} } className='hover: transform hover:-translate-y-1 hover:scale-110 hover:text-black   text-white font-semibold rounded-full bg-green-400'>
					Camera 3
					</button>
					<button onClick={()=> { Peer[4] = 4} } className='hover: transform hover:-translate-y-1 hover:scale-110  hover:text-black text-white font-semibold rounded-full bg-green-400'>
					Camera 4
					</button>
				</div>
			</div>
		</div>
	);
}

export default Camera;
