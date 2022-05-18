import React,{useState, useEffect, Component} from 'react';
import Text from '../components/Text';
import Peer from '../../Peer.js';
import Select from 'react-select'

// get odometry list from ros topic node --> subscribe  /agribot/odom/odom_gnss 
var gnssMess ;

function DriverandGNSS(gnssMessage) {
	const [Lat , setLat] = useState('')
	const [Lon , setLon] = useState('')
	const [StartStop, setStartStop] = useState('Start')
	
	const [EnableSpray, setEnableSpray] = useState('Start')
	const [selectedOption, setSelectedOption] = useState("Select PATH ");
	const [receivedMessagess, setReceivedMessagess] = useState();
	const [getPath, setgetPath] = useState(false) 
	const [path , addPath] = useState([{ value: 'test', label: 'test' }])
	const [startFollow , setStartFollow] = useState('START FOLLOW')
	var options = []
	const [pathDirectory , setpathDirectory] = useState([])
	useEffect(()=>{
		//console.log(Peer.start_follow) when press start follow send [0] = true and [1] name of path that you want to make robot follow 
		setInterval(() => {
			try{
			gnssMess = Peer.robot_location[0]
			setLat(gnssMess[0].toString())
			setLon(gnssMess[1].toString())
			}catch(err){
			setLat((Math.random() * 100).toString())
			setLon((Math.random() * 100).toString()) 
			// if(path != options){
			// 	addPath(options)
			// }
			// console.log(path)
			}
		}, 2000);
	},0)
	let updateArray = []
	let [ message , setMessage] = useState()
	let temp_for = []
	let directory = {}
	const splitArray =(temp)=>{
		try{
			temp = Object.keys(temp)
			for(let i = 0; i < Object.keys(temp).length   ; i++){
				
				// temp_for = temp[i].split('/')
				// temp_for = temp_for[temp_for.length - 1];
				// temp_for = temp_for.split('.path')[0]
				// let textString = temp_for
				temp_for = temp[i]
				// console.log(temp_for[i])
				// temp_for = Object.keys(temp[i])
				console.log(temp_for)
				temp_for = { value: temp_for, label: temp_for }
				options.push(temp_for)	
				// directory[textString] = String(temp[i])
				// setpathDirectory(directory)
			}
		}catch(e){
			console.log(e)
		}
        
	addPath(options)		
    }  
	let tryCount =  0;
	const getPathList = () =>{
		Peer.get_path = true
        setgetPath(true)
		setReceivedMessagess(Peer.path_list)
		splitArray(receivedMessagess)


	}

	//"start_follow": [false,"",false]    state of button , name of path , following 
	const start_follow = ()=>{
		Peer.follow_mode.state_follow = true
		Peer.follow_mode.path_follow = selectedOption
	}
	
	return (
		<>
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
				<button className="font-bold hover:text-red-500 " onClick={()=>getPathList()} > GET PATH LIST </button> 
				</div>
				<div className="border-2 bg-blue-100 pl-3 rounded-md mx-2 my-2 text-blue-600 font-semibold ">
				<Select
					defaultValue={selectedOption}
					onChange={(e)=>{
						console.log(e.value,'On change wth option')
						console.log(pathDirectory[e.value], 'js object')
						setSelectedOption(e.value)
					}}
					options={path}/>
					{/* <p>
						STATUS :<span className="text-green-600 font-light">  FIX </span>
					</p> */}
				</div>
				<div className="border-2 bg-blue-100 pl-3 rounded-md mx-2 my-2 text-blue-600 font-semibold ">
					{<button onClick={()=>{start_follow()}}>{startFollow}</button>}
				</div>	
				<div className="border-2 bg-blue-100 pl-3 rounded-md mx-2 my-2 text-blue-600 font-semibold ">					
					{StartStop == 'Start' ? <button className="text-green-600 font-semibold" onClick={()=>setStartStop('Stop')} > START RECORD </button> : <button onClick={()=>setStartStop('Start')} className="font-semibold text-red-600" > STOP RECORD </button>}
				</div>
	
				<div className="border-2 bg-blue-100 pl-3 rounded-md mx-2 my-2 text-blue-600 font-semibold ">
					{EnableSpray == 'Start' ? <button className="text-green-600 font-semibold" onClick={()=>setEnableSpray('Stop')} > ENABLE SPRAY </button> : <button onClick={()=>setEnableSpray('Start')} className="font-semibold text-red-600" > DISABLE SPRAY </button>}
				</div>			
			</div>
		</div>
		</>
	);	
}

export default DriverandGNSS;
