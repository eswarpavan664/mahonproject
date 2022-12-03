
import React,{useState} from 'react'
import { render } from 'react-dom';
import data from './data.json'
import minus from './icon/minus-active.png'
import plus from './icon/plus.png'
import EarphonePic from './Images/Earphone.png'
import location from './icon/LOCATION.png'
import tick from './icon/check.png'
import './style.css';
import Delete from './icon/DELETE.png';

export default function Cards(props){
    const [Count,setCount]=useState(1);

    const Increase=()=>{
       
            setCount(Count+1)
       
    }

    
    const Decrease=()=>{
        if(Count>0){
            setCount(Count-1)
        }
    }
    
    return(
        < >
               <div className='col-6 mb-3'>
                                 <div className='row'>
                                            <div className='col-4'>
                                            <img src={props.items["imageUrl"]} alt="This is an image"  width={"80px"} height={"80px"}/>
                            
                                
                                            </div>
                                            <div className='col-4'>
                                            <p style={{fontWeight:'bold'}}>{props.items["name"]}</p>
                                            <p>{props.items["desc"]}</p>
                                            </div>
                                 </div>

                            </div>
                            <div className='col-6'>
                                <div className='row'>


                                    <div className='col-4'>
                                        <p>{props.items["price"]}</p>
                                    </div>
                                    <div className='col-4'>
                                        <div className='d-flex'>
                                            <img src={minus}  style={{cursor:'pointer'}} onClick={Decrease}/>
                                            <input style={{width:"18%",height:"25px"}}  value={Count} />
                                            <img src={plus}  style={{cursor:'pointer'}} onClick={Increase}/>
                                        </div>
                                    </div>
                                    <div className='col-4 row'>
                                    <div className='col-6'>
                                        <p>{props.items["price"]*Count}</p>
                                    </div>
                                     <div className='col-6'>
                                     <img src={Delete} />  
                                     </div>
                                    </div>
                                </div>
                            </div>
        </>
    )
}