import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Typewriter } from 'react-simple-typewriter'
import Logo from '/225325382.png'

const DiscussionForum = () => {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email) return
    // API call logic here
    setMessage("✅ Thank you! You’ll be notified when we launch.")
  }

  return (
    <div>
      <img src={Logo} alt="Forum Banner" style={{ width: "100%", height: "65vh"}} />

      <div className="d-flex flex-column align-items-center justify-content-center text-center container py-5">
        <h3 className="mb-3">🎯 NIMCET Discussion Forum</h3>

        <div className="text-warning fs-5 fw-semibold mb-4">
          <Typewriter
            words={[
              'A Space to Ask Questions',
              'Connect with Fellow Aspirants',
              'Share Notes & Resources',
              'Coming Soon...',
            ]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={50}
            deleteSpeed={30}
            delaySpeed={1500}
          />
        </div>

        <p className="mb-4 px-3">
          We’re building a powerful forum to help you crack the NIMCET exam with peer support and expert guidance.
        </p>

        <form
          onSubmit={handleSubmit}
          className="row g-2 justify-content-center align-items-center mb-4 w-100"
          style={{ maxWidth: "500px" }}
        >
          <div className="col-12 col-sm-8">
            <input
              type="email"
              className="form-control shadow-sm"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="col-12 col-sm-4 d-grid">
            <button type="submit" className="btn btn-warning">
              Notify Me
            </button>
          </div>
        </form>

        {message && <p className="text-success small mb-3">{message}</p>}

        <Link to="/" className="text-decoration-none mb-2">← Back to Home</Link>

        <p className="text-secondary mb-5">🚀 Launching December 2025 • Version 1.0 Beta</p>
      </div>
    </div>
  )
}

export default DiscussionForum
