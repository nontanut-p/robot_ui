import React , {useEffect , useState} from 'react';
import Text_Motor from '../components/Text_Motor'
import io from "socket.io-client";
import Socket from '../pages/Socket';
import Peer from '../../Peer.js';
const socket = io();


function Message() {
    const [receivedMessagess, setReceivedMessagess] = useState(['Driver ERROR','GPS DOWN','Battery dead','Motor head','Boomb','Boomb','GPS DOWN','Battery dead','Motor head','Boomb','Boomb']);
    const numbers = [1, 2, 3, 4, 5];
    useEffect(()=>{

    },)
    
    return (
        <div className='mt-5  h-80 border-2 max-w-xl mx-auto max-h-80 bg-white w-full rounded-xl shadow-md xl:max-w-2xl h-2/3 bg-gray-100'>
        <div className='text-center pl-2 pt-2 uppercase tracking-tight text-lg text-blue-700 font-semibold '>
            MOTOR STATE
        </div>
        <div className="h-5/6 overflow-y-auto mb-10">
            <ul>
            {/* {
            receivedMessagess.map((item,i)=> <Text text={item} key={i} />)
            } */}
            <Text_Motor id={'1'} currnet={Peer.motor_state.effort[0]} position={Peer.motor_state.position[0]} velo={Peer.motor_state.velocity[0]} > </Text_Motor>
            <Text_Motor id={'2'} currnet={Peer.motor_state.effort[1]} position={Peer.motor_state.position[1]} velo={Peer.motor_state.velocity[1]} > </Text_Motor>
            <Text_Motor id={'3'} currnet={Peer.motor_state.effort[2]} position={Peer.motor_state.position[2]} velo={Peer.motor_state.velocity[2]} > </Text_Motor>
            <Text_Motor id={'4'} currnet={Peer.motor_state.effort[3]} position={Peer.motor_state.position[3]} velo={Peer.motor_state.velocity[3]} > </Text_Motor>
            <Text_Motor id={'5'} currnet={Peer.motor_state.effort[4]} position={Peer.motor_state.position[4]} velo={Peer.motor_state.velocity[4]} > </Text_Motor>
            <Text_Motor id={'6'} currnet={Peer.motor_state.effort[5]} position={Peer.motor_state.position[5]} velo={Peer.motor_state.velocity[5]} > </Text_Motor>
            <Text_Motor id={'7'} currnet={Peer.motor_state.effort[6]} position={Peer.motor_state.position[6]} velo={Peer.motor_state.velocity[6]} > </Text_Motor>
            <Text_Motor id={'8'} currnet={Peer.motor_state.effort[7]} position={Peer.motor_state.position[7]} velo={Peer.motor_state.velocity[7]} > </Text_Motor>
            </ul>
          
        </div>
      {/* /<Text text={message} />      */}
   
     
    </div>
    )
}

export default Message
