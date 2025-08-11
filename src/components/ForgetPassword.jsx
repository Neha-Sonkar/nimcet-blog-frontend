import React from 'react'
import { Link } from 'react-router-dom'
const ForgetPassword = () => {
    return (
        <div className='forgetPassword'>
            <form className='forgetPasswordForm'>
                <h4 className='mb-4'>Forget Password</h4>
                <div className="mb-3">
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Username or Email' />
                    <div id="emailHelp" className="text-secondary">We'll never share your email with anyone else.</div>
                    <div className='text-danger text-start'>Required*</div>
                </div>
                <Link type="submit" className="btn btn-warning btn-sm mt-1" to="/forgetpasswordcode">Send Code</Link>
                <div className='d-flex justify-content-between mt-3' style={{ fontSize: "13px" }}>
                    <div><Link className='text-secondary' to="/login">Login</Link></div>
                    <div><Link className='text-secondary' to="/signup">SignUp</Link></div>
                </div>
            </form>
        </div>
    )
}

export default ForgetPassword
