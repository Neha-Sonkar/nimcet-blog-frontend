import React from 'react'
import './Components.css'
import Logo from '/225325382.png'
const SmartSyllabusPlanner = () => {
  return (
    <div >
      <img src={Logo} alt="" style={{ width: "100%", height: "65vh" }} />
      <div className="container d-flex justify-content-center align-items-center py-5 ">
        <div className="planner-card p-4 shadow-lg rounded bg-dark " style={{ maxWidth: '420px', width: '100%' }}>
          <h3 className="text-center mb-4 text-warning fw-bold">Smart Syllabus Planner</h3>
          <form >
            <div className="mb-3">
              <input
                type="number"
                className="form-control text-center"
                placeholder="Total Days Left"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="number"
                step="0.1"
                className="form-control text-center"
                placeholder="Daily Study Hours"
                required
              />
            </div>
            <button type="submit" className="btn btn-warning w-100 fw-bold">
              Calculate
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SmartSyllabusPlanner
