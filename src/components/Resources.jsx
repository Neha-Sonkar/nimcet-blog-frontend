import React from 'react'
import { Link } from 'react-router-dom'
import './Components.css'
import Logo from '/225325382.png'
const Resources = () => {
  const items = [
    {
      title: "Neha Agrawal Mathematically Inclined - Mathmatics",
      desc: "Ideal for NIMCET aspirants to build strong fundamentals and learn smart shortcuts.",
      image: "https://yt3.googleusercontent.com/HH5nZkIY0BgKsetI15uC3ijyuCht_LvHWDGPLdzH2hmUspSJCosR2RGTJqPDAXbozMm187gUAkc=s160-c-k-c0x00ffffff-no-rj",
      to: "https://www.youtube.com/results?search_query=neha+maths+jee"
    },
    {
      title: "ACME ACADEMY (NIMCET-CUET) - Computer",
      desc: "ACME Academy offers dedicated video lectures, strategies, and problem-solving sessions tailored specifically for NIMCET and CUET aspirants. A reliable resource for targeted and effective preparation."
      ,
      image: "https://yt3.googleusercontent.com/QUjha86DUdUFF_aYGsXWeKkQgVGeT4-PheGfOfPpICWQavCGNsVRJNTLS0ml4kUOhWinC1pQJg=s160-c-k-c0x00ffffff-no-rj",
      to: "https://www.youtube.com/playlist?list=PLjgKXowPULMkWtajoDIZ24mHXPXJ4fDQx"
    },
    {
      title: "CareerRide - Logical & Reasoning",
      desc: "CareerRide provides quick and clear video tutorials on aptitude, reasoning, and verbal ability—ideal for strengthening key areas tested in NIMCET.",
      image: "https://yt3.googleusercontent.com/ytc/AIdro_mjesUGQ8rv1_pUM-zZyMCChTYqW_CuWMI9MWbtXAquJdI=s176-c-k-c0x00ffffff-no-rj-mo",
      to: "https://www.youtube.com/playlist?list=PLpyc33gOcbVADMKqylI__O_O_RMeHTyNK"
    }
  ]
  return (
    <>
      <img src={Logo} alt="" style={{width:"100%",height:"65vh"}}/>
      <div className='resources'>
        <h3 className='text-center'>Practices Resources & Study Materials</h3>
        <div>
          <div>
            <h6 className='mb-4 fw-bold'>Recommended Practice Books & Study Material</h6>
            <p>- Best books for Mathematics (e.g., R.D. Sharma, ML Khanna)</p>
            <p>- Logical Reasoning books (e.g., RS Aggarwal, Arihant)</p>
            <p>- Computer Awareness books (e.g., Sumita Arora, Yashavant Kanetkar)</p>
            <p>- English Language practice material</p>
            <p>- NCERT books (Class 11 & 12 for Maths)</p>
          </div>
          <div>
            <h6 className='mb-4 fw-bold'>Subject-Wise  Video Channel(Recommendated for self study)</h6>
            <div className='mb-5 card-item gap-5' style={{ margin: "auto" }}>
              {items.map((item => {
                return (
                  <div className="card bg-dark text-light" style={{ width: "18rem" }}>
                    <img src={item.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">{item.desc}</p>
                      <Link to={`${item.to}`} className="btn btn-warning text-center">Visit Channel</Link>
                    </div>
                  </div>
                )
              }))}
            </div>
          </div>
        </div>
      </div>
      <div className='mock d-flex flex-column gap-3'>
        <h5 style={{ textDecoration: "underline #ffbb00" }}>Mock Test Series (Free & Paid)</h5>
        <div className='d-flex flex-column gap-3'>
          <Link className="link" to="https://examsnet.com/exams/nimcet-entrance-exam-previous-question-papers-online">Free mock test platforms - Examsnet</Link>
          <Link className="link" to="https://testbook.com/nimcet">Paid mock test platforms - Testbook</Link>
        </div>
      </div>
    </>
  )
}


export default Resources
