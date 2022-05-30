import React,{useState, useEffect, Component} from 'react';
import Text from '../components/Text';
import Peer from '../../Peer.js';
import Select from 'react-select'
import ObjectDataExport from '../../Peer.js';

// get odometry list from ros topic node --> subscribe  /agribot/odom/odom_gnss 
var gnssMess ;

function DriverandGNSS(gnssMessage) {
	const [Lat , setLat] = useState('')
	const [Lon , setLon] = useState('')
	const [StartStop, setStartStop] = useState('Start')
	const [StartFollow, setStartFollow] = useState('Start')
	const [EnableSpray, setEnableSpray] = useState('Start')
	const [selectedOption, setSelectedOption] = useState("Select PATH ");
	let [receivedMessagess, setReceivedMessagess] = useState([]);
	const [path , addPath] = useState([{ value: 'test', label: 'test' }])
	useEffect(()=>{
		getPathList()
		setInterval(() => {
			try{
			gnssMess = Peer.robot_location[0]
			setLat(gnssMess[0].toString())
			setLon(gnssMess[1].toString())
			}catch(err){
			setLat("100.00")
			setLon("200.10") 
	
			}
		}, 2000);
	},0)
	let updateArray = []
	let [ message , setMessage] = useState()
	let temp_for = []
	var options = []
	const splitArray =(temp)=>{
        temp_for = temp
        console.log(temp_for, 'hello' , temp.length)
		for(let i = 0; i < temp.length ; i++){
			temp_for = { value: temp[i], label: temp[i] }
			options.push(temp_for)
		}
	addPath(options)		
	console.log(options.length, 'option')
    }  
	
	const getPathList = ()=>{
		Peer.get_path = true
        let temp_array = Peer.path_list
        temp_array = Object.keys(temp_array)
		// console.log(temp_array)
        setReceivedMessagess(temp_array)
		splitArray(receivedMessagess)
        // console.log(receivedMessagess)\
		
	}

	const startFollow = ()=>{
		ObjectDataExport.start_follow.state_follow = 1 
		ObjectDataExport.start_follow.path_name = selectedOption
		console.log(ObjectDataExport.start_follow.path_name , 'test')
	}

	const stopFollow = ()=>{
		ObjectDataExport.stop_follow = true
		console.log(ObjectDataExport.stop_follow , 'stop follow ')
	}
	const startRecord = ()=>{
		ObjectDataExport.start_record = true
		console.log(ObjectDataExport.start_record , 'stop record ')
	}
	const stopRecord = ()=>{
		ObjectDataExport.stop_record = true
		console.log(ObjectDataExport.stop_record , 'stop record ')
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
				{/* <div className="border-2 bg-blue-100 pl-3 rounded-md mx-2 my-2 text-blue-600 font-semibold ">
				
				</div> */}
				<div className="border-2 bg-blue-100 pl-3 rounded-md mx-2 my-2 text-blue-600 font-semibold ">
				<button className="font-bold hover:text-red-500 hover:bg-red-700 " onClick={()=>getPathList()} > GET PATH LIST </button> 
				<Select
					defaultValue={selectedOption}
					onChange={(e)=>{
						console.log(e.value,'On change wth option')
						setSelectedOption(e.value)
					}}
					options={path}/>
					{/* <p>
						STATUS :<span className="text-green-600 font-light">  FIX </span>
					</p> */}
				</div>
				<div className="border-2 bg-blue-100 pl-3 rounded-md mx-2 my-2 text-blue-600 font-semibold ">
				<button className="hover:text-red-500 hover:bg-green-700 sm:py-5 xl:py-1 px-2 text-green-600 font-semibold" onClick={()=>{startFollow()}}> START Follow  </button> 
				<button className="hover:text-green-500 hover:bg-red-700 sm:py-5 px-2 text-red-600 font-semibold" onClick={()=>{stopFollow()}}> STOP  Follow</button> 
				</div>
				<div className="border-2 bg-blue-100 pl-3 rounded-md mx-2 my-2 text-blue-600 font-semibold ">
				<button className="hover:text-red-500 hover:bg-green-700 sm:py-5 xl:py-1 px-2 text-green-600 font-semibold"  onClick={()=>{startRecord()}} > START Record  </button> 
				<button className="hover:text-green-500 hover:bg-red-700 sm:py-5 px-2 text-red-600 font-semibold" onClick={()=>{stopRecord()}} > STOP  Record</button> 
				</div>
	
				<div className="border-2 bg-blue-100 pl-3 rounded-md mx-2 my-2 text-blue-600 font-semibold ">
				<button className="hover:text-red-500 hover:bg-green-700 sm:py-5 xl:py-1 px-2 text-green-600 font-semibold" > EnableSpray  </button> 
				<button className="hover:text-green-500 hover:bg-red-700 sm:py-5 px-2 text-red-600 font-semibold" > DisableSpray</button> 
				</div>			
			</div>
		</div>
		</>
	);	
}

export default DriverandGNSS;
