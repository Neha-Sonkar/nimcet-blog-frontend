import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '/225325382.png';
import Context from '../Context/Context';
import API from '../api';

const Navbar = () => {
    const a = useContext(Context)
    const navigate = useNavigate()
    const [showInfo, setShowInfo] = useState(false)
    const boxRef = useRef(null)
    const doSignout = async () => {
        try {
            const res = await API.post('/auth/logout')
            if (res.data.success) {
                a.setSignout(false)
                a.setSignInSignOut(true)
                setShowInfo(false)
                a.setUser("")
                alert("LogOut succesfull!")
                navigate('/')
            }
        } catch (error) {
            console.error(error)
        }
    }
    const handleUserInfo = async () => {
        navigate("/login")
    }
    const handleShowInfo = async () => {
        setShowInfo(true)
    }
    useEffect(() => {
        function handleClickOutside(event) {
            if (boxRef.current && !boxRef.current.contains(event.target)) {
                setShowInfo(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            document.addEventListener('mousedown', handleClickOutside)
        }
    })
    return (
        <div className="navs">
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg " style={{ height: "10vh", padding: "5px 15px", minHeight: "max-content" }}>
                <div className="container-fluid">
                    <div className='logo'>
                        <img src={logo} alt="Logo" style={{ width: '45px', height: '45px', borderRadius: '50%', marginRight: "5px" }} />

                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 ms-auto mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/about">About</Link>
                            </li>
                        </ul>
                        <div className='d-flex gap-3 justify-content-center align-items-center ' style={{ marginLeft: "22px" }}>
                            {a.signinsignout && <>
                                <Link type="button" className="btn btn-outline-secondary btn-sm" to="/login" >LogIn</Link>
                                <Link type="button" className="btn btn-outline-secondary btn-sm" to="/signup" >SignUp</Link></>}
                            {a.signout ?
                                <i className="i1 fa-solid fa-circle-user fa-2x" onClick={handleShowInfo}></i> : <i className="i1 fa-solid fa-circle-user fa-2x" onClick={handleUserInfo}></i>}

                        </div>
                        {showInfo && < div className='personalbox' ref={boxRef}>
                            {showInfo && <>
                                <div className='d-flex justify-content-center align-items-center gap-3' style={{
                                    backgroundColor: "rgb(43 43 43)",
                                    padding: "3px 10px",
                                    borderRadius: "7px"
                                }}>
                                    <div className='m-2'>
                                        <i className="i1 fa-solid fa-circle-user fa-2x"></i>
                                    </div>
                                    <div>
                                        <h6 className='fw-bold'>Personal</h6>
                                        <p style={{
                                            fontWeight: "lighter",
                                            fontSize: "15px"
                                        }}>{a.user}</p>
                                    </div>
                                </div>
                                <div className='mt-2 d-flex justify-content-center align-items-center gap-3' style={{
                                    backgroundColor: "rgb(43 43 43)",
                                    padding: "3px 10px",
                                    borderRadius: "7px"
                                }}><Link to="/change-password" style={{textDecoration: "none",color: "white"}}>Change Password</Link></div>
                                <div className='text-center mt-3'>
                                    <Link type="button" className="btn btn-outline-secondary btn-sm w-100" onClick={doSignout}>LogOut</Link>
                                </div>
                            </>
                            }
                        </div>}
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar