import React, { useEffect, useState } from 'react'
import Context from './Context'
import API from '../api'

const State = (props) => {
  const [signout, setSignout] = useState(false)
  const [signinsignout, setSignInSignOut] = useState(true)
  const [user,setUser]=useState("")
  const checkAuth = async () => {
    try {
      const res = await API.get('/auth/me')
      if (res.data.success) {
        setUser(res.data.user.email)
        setSignout(true)
        setSignInSignOut(false)
      }
    }
    catch (error) {
      setSignout(false)
      setSignInSignOut(true)

    }
  }
  useEffect(() => {
    checkAuth()
  }, )
  return (
    <Context.Provider value={{ signout, setSignout, signinsignout, setSignInSignOut, checkAuth ,user,setUser}}>
      {props.children}
    </Context.Provider>
  )
}

export default State
