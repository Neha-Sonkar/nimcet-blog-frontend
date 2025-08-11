import React from 'react'
import './Components.css'
const Card2 = () => {
    const colleges = [
        "NIT Agartala",
        "NIT Allahabad (MNNIT)",
        "NIT Bhopal (MANIT)",
        "NIT Jamshedpur",
        "NIT Kurukshetra",
        "NIT Raipur",
        "NIT Surathkal",
        "NIT Tiruchirappalli (Trichy)",
        "NIT Warangal",
        "NIT Patna",
        "NIT Calicut",
        "NIT Meghalaya",
        "IIIT Bhopal",
        "IIIT Vadodara"
    ]
    return (
        <>
            <div className="container my-5 text-light">
                <h3 className="text-center fw-bold mb-3" style={{ textDecoration: "underline #ffbb00" }}>
                    Colleges Participating in NIMCET 2025
                </h3>
                <p className="text-center text-secondary mb-4">
                    These premier institutes offer admission to the MCA program through the NIMCET exam.
                </p>
                <ul className="list-unstyled row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2">
                    {colleges.map((college, index) => (
                        <li
                            key={index}
                            className="col bg-dark border border-secondary rounded p-3 shadow-sm"
                        >
                            <span className="fw-semibold text-warning">{college}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='mb-5 card2'>
                <h4>Start Your Preparation Today!</h4>
                <p >Don't waste time guessing. Start your NIMCET journey with smart strategies and focused study plans.</p>
            </div>
        </>
    )
}

export default Card2
