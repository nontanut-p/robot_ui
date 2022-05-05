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
	const [StartFollow, setStartFollow] = useState('Start')
	const [EnableSpray, setEnableSpray] = useState('Start')
	const [selectedOption, setSelectedOption] = useState("Select PATH ");
	let [receivedMessagess, setReceivedMessagess] = useState([]);
	const [getPath, setgetPath] = useState(false) 
	const [path , addPath] = useState([{ value: 'test', label: 'test' }])
	var options = []
	const [pathDirectory , setpathDirectory] = useState([])
	useEffect(()=>{
		setInterval(() => {
			try{
			gnssMess = Peer.robot_location[0]
			setLat(gnssMess[0].toString())
			setLon(gnssMess[1].toString())
			}catch(err){
			setLat("100.00")
			setLon("100.00") 
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
        temp = temp
		for(let i = 0; i < temp.length ; i++){
			temp_for = temp[i].split('/')
			console.log(temp_for);
			temp_for = temp_for[temp_for.length - 1];
			console.log(temp_for);
			temp_for = temp_for.split('.path')[0]
			console.log(temp_for);
			let textString = temp_for
			temp_for = { value: temp_for, label: temp_for }
			options.push(temp_for)	
			console.log(textString , 'test text string')
			directory[textString] = String(temp[i])
			setpathDirectory(directory)
		}
	addPath(options)		
    }  
	let tryCount =  0;
	const getPathList = () =>{
		Peer.get_path = true
        setgetPath(true)
        let temp_array = Peer.path_list
        temp_array = Object.values(temp_array)
		setReceivedMessagess(temp_array)
		splitArray(receivedMessagess)
		if(temp_array.length === 0 && tryCount <= 3){
			tryCount++;
			setTimeout(function(){
				getPathList();
		   },1000); //delay is in milliseconds 
		
		}else if(temp_array.length > 0){
			tryCount = 0
		}
        
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
					{StartFollow == 'Start' ? <button className="text-green-600 font-semibold" onClick={()=>setStartFollow('Stop')} > START FOLLOW </button> : <button onClick={()=>setStartFollow('Start')} className="font-semibold text-red-600" > STOP FOLLOW </button>}
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
