import React,{useState, useEffect} from 'react';
import Text from '../components/Text';
import Peer from '../../Peer.js';
// get odometry list from ros topic node --> subscribe  /agribot/odom/odom_gnss 
var gnssMess ;

function DriverandGNSS(gnssMessage) {
	let [Lat , setLat] = useState('')
	let [Lon , setLon] = useState('')
	let [StartStop, setStartStop] = useState('Start')
	let [StartFollow, setStartFollow] = useState('Start')
	let [EnableSpray, setEnableSpray] = useState('Start')
	useEffect(()=>{
		setInterval(() => {
			try{
			gnssMess = Peer[3][0]
			setLat(gnssMess[0].toString())
			setLon(gnssMess[1].toString())
			}catch(err){
			setLat("No Data")
			setLon("No Data")
			}
		}, 2000);
	})
	let [ message , setMessage] = useState()
	const getPathList = ()=>{
		console.log('Get path list ')
	}

	return (
		<div className="mt-5  border-2 max-w-xl mx-auto bg-white w-full rounded-xl shadow-md xl:max-w-2xl h-2/3 bg-gray-100  overflow-y-auto ">
			<div className="text-center pl-2 pt-2 uppercase tracking-tight text-lg text-blue-700 font-semibold ">
				POSITION AND COMMAND
			</div>
			<div className=" grid grid-cols-2  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 ">
				<div className="border-2 bg-blue-100 pl-3 rounded-md mx-2 my-2 text-blue-600 font-semibold ">
					<p>
						LAT : <span className="text-gray-600 font-light"> {Lat.slice(0,8)} </span>{' '}
					</p>
				</div>
				<div className="border-2 bg-blue-100 pl-3 rounded-md mx-2 my-2 text-blue-600 font-semibold ">
					<p>
						LON : <span className="text-gray-600 font-light"> {Lon.slice(0,8)} </span>{' '}
					</p>
				</div>
				<div className="border-2 bg-blue-100 pl-3 rounded-md mx-2 my-2 text-blue-600 font-semibold ">
					<p>
						STATUS :<span className="text-green-600 font-light">  FIX </span>
					</p>
				</div>
				<div className="border-2 bg-blue-100 pl-3 rounded-md mx-2 my-2 text-blue-600 font-semibold ">
					
					{StartStop == 'Start' ? <button className="text-green-600 font-semibold" onClick={()=>setStartStop('Stop')} > START RECORD </button> : <button onClick={()=>setStartStop('Start')} className="font-semibold text-red-600" > STOP RECORD </button>}
					
				</div>
				<div className="border-2 bg-blue-100 pl-3 rounded-md mx-2 my-2 text-blue-600 font-semibold ">
					{StartFollow == 'Start' ? <button className="text-green-600 font-semibold" onClick={()=>setStartFollow('Stop')} > START FOLLOW </button> : <button onClick={()=>setStartFollow('Start')} className="font-semibold text-red-600" > STOP FOLLOW </button>}
				</div>
				<div className="border-2 bg-blue-100 pl-3 rounded-md mx-2 my-2 text-blue-600 font-semibold ">
					{EnableSpray == 'Start' ? <button className="text-green-600 font-semibold" onClick={()=>setEnableSpray('Stop')} > ENABLE SPRAY </button> : <button onClick={()=>setEnableSpray('Start')} className="font-semibold text-red-600" > DISABLE SPRAY </button>}
				</div>
				<div className="border-2 bg-blue-100 pl-3 rounded-md mx-2 my-2 text-blue-600 font-semibold ">
					{EnableSpray == 'Start' ? <button className="text-green-600 font-semibold" onClick={()=>getPathList()} > GET PATH LIST </button> : <button onClick={()=>getPathList()} className="font-semibold text-red-600" > DISABLE SPRAY </button>}
				</div>
				<div className="border-2 bg-blue-100 pl-3 rounded-md mx-2 my-2 text-blue-600 font-semibold ">
					<p>
						Vy :<span className="text-gray-600 font-light"> 1200</span>{' '}
					</p>
				</div>
				<div className="border-2 bg-blue-100 pl-3 rounded-md mx-2 my-2 text-blue-600 font-semibold ">
					<p>
						W :<span className="text-gray-600 font-light"> 1200</span>{' '}
					</p>
				</div>
			</div>
		</div>
	);
}

export default DriverandGNSS;
