import React, { useEffect, useState } from 'react';
import Camera from '../components/Camera';
import Maps from '../components/Maps';
import Message from '../components/Message';
import DriverandGNSS from '../components/DriverandGNSS';
import io from 'socket.io-client';
import PathList from '../components/PathList';
const socket = io();

function Home() {
	
	return (
	 <>
	 
		<div className="2xl:px-10 grid grid-cols-1 md:grid-cols-1 md:max-h-xl  mt-2  lg:grid-cols-2">
			<Camera />
			<Maps  />

		</div>
		<div className="2xl:px-10 grid grid-cols-1 md:grid-cols-1 md:max-h-xl  mt-2 gap-1 lg:grid-cols-3">
			<Message />
			<PathList/>
			<DriverandGNSS />
		</div>
			</>
	);
}

export default Home;
