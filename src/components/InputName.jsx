import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeUserName } from '../slice/username.slice';
import imageHome from '/personaje.png'
import send from '/send.svg'
import music from '../audio/intro.mp3'

const InputName = () => {

    const userName = useSelector(state => state.userName)
    const [userNameValue, setUserNameValue] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const clickLoad=()=>{
        dispatch(changeUserName(userNameValue))
        navigate('/pokemon')
    }
    return (
        <div className='home'>
           {/*<audio className='audio' autoPlay src={music}></audio> */}
            <div className='container-card-home'>
                <div className='container-image-home'>
                    <img className='imagen-home' src={imageHome} alt="" />
                    <h3>Hello trainer!</h3> 
                </div>
                <h5>Give me your name to start</h5>
                <div className="container-input">
                  <input className='input-home' type="text" value={userNameValue} onChange={e => setUserNameValue(e.target.value)} />
                  <figure>
                     <img className='button-send' onClick={clickLoad} src={send} alt="" /> 
                  </figure>
                 
                </div>
                
            </div>
            
        </div>
    );
};

export default InputName;