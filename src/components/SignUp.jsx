import React, { useState } from 'react'
import './Components.css'
import { Link, useNavigate } from 'react-router-dom'
import API from '../api'

const SignUp = () => {
  const navigate=useNavigate()
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [ismessage,setIsMessage]=useState(false)
  const [message,setMessage]=useState("")
  const [showPassword,setShowPassword]=useState(false)

  const handleSubmit = async (e) => {
  e.preventDefault()
  try {
    const res = await API.post('/auth/signup', { email, password })

    if (res.data?.success) {
      alert('Signup successful')
      setTimeout(() => navigate('/login'), 100)
    }
  } catch (error) {
    console.error("Signup Error:", error)
    const msg = error.response?.data?.message || 'Error'
    setIsMessage(true)
    setMessage(msg)
    setPassword("")
    setEmail("")
  }
}

const handleshowpassword=async()=>{
    if(showPassword==true) setShowPassword(false)
    else setShowPassword(true)
  }
    return (
        <div className='signup'>
              <form className='signupForm' onSubmit={handleSubmit}>
                <h4 className='mb-4'>SignUp</h4>
                <div className="mb-3">
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Username or Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                  <div id="emailHelp" className="text-secondary">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3 pass">
                  <input type={`${showPassword===true?"text":"password"}`} className="form-control" id="exampleInputPassword1" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                  <svg viewBox="0 0 24 24" width="1em" height="1em" class="icon__1Md2" onClick={handleshowpassword}><path fill-rule="evenodd" d="M7.119 14.563L5.982 16.53l-1.732-1 1.301-2.253A8.97 8.97 0 0 1 3 7h2a7 7 0 0 0 14 0h2a8.973 8.973 0 0 1-2.72 6.448l1.202 2.083-1.732 1-1.065-1.845A8.944 8.944 0 0 1 13 15.946V18h-2v-2.055a8.946 8.946 0 0 1-3.881-1.382z"></path></svg>
                </div>
                {ismessage && <p className='text-danger'>{message}</p>}
                <button type="submit" className="btn btn-warning btn-sm mt-4">SignUp</button>
                <div className='d-flex justify-content-between mt-3' style={{fontSize:"13px"}}>
                  <div><Link className='text-secondary' to="/forgetpassword">Forget Password?</Link></div>
                  <div><Link className='text-secondary' to="/login">LogIn</Link></div>
                </div>
              </form>
            </div>
    )
} 

export default SignUp