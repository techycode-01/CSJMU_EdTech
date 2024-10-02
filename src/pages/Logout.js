// Dummy logout made to reset the token



import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import {logout} from '../services/operations/authAPI'
const Logout = () => {
    const navigate= useNavigate();
    const dispatch= useDispatch();

  return (
    <div>
        <div onClick={dispatch(logout(navigate))} className='text-4xl m-16 text-richblack-5 bg-richblack-400' >
            Logout
        </div>
    </div>
  )
}

export default Logout