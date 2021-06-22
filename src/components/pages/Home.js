import React, { useEffect, useState } from 'react';
import Camera from '../components/Camera';
import Maps from '../components/Maps';
import Message from '../components/Message'
import DriverandGNSS from '../components/DriverandGNSS'
import io from "socket.io-client";
const socket = io();

function Home(video) {
	const [lat, setLat] = useState('')
	const [long, setLong] = useState('')
	const [acc, setAcc] = useState('')
	const [velo, setVel] = useState('')
	const [receivedMessages, setReceivedMessages] = useState(['ss', 'hlkhl']);
	useEffect(() => {
		socket.on('lat', data => {
			setLat(data)
		})
		socket.on('long', data => {
			setLong(data)
		})
		socket.on('acc', data => {
			setAcc(data)
		})
		socket.on('velo', data => {
			setVel(data)
		})




	}, [lat]);
	return (
		<div className='2xl:px-20 grid grid-cols-1 md:grid-cols-1 md:max-h-xl  mt-5 gap-1 lg:grid-cols-2'>

			<Camera video={video} />
			<Maps
				lat={lat}
				long={long}
				acc={acc}
				velo={velo}
			/>
			<Message text={receivedMessages} />
			<DriverandGNSS
				lat={lat}
				long={long}
				acc={acc}
				velo={velo}

			/>

		</div>
	);
}

export default Home;
