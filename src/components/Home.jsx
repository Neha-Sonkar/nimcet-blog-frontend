import React from 'react'
import './Components.css'
import Card from './Card'
import Card2 from './Card2'
import Logo from '/225325382.png'
import { TypeAnimation } from 'react-type-animation'
import PreviousYearPaper from '../assets/PreviousYearPaper.png'
import Forum from '../assets/Forum.png'
import Planner from '../assets/Planner.png'
import Practice_Resources from '../assets/Practice_Resources.png'
import Syllabus_img from '../assets/Syllabus_img.png'

const Home = () => {
  const items = [
    {
      image: Syllabus_img,
      title: "Syllabus for NIMCET Exam",
      desc: "Explore the complete NIMCET syllabus including Mathematics, Logical Reasoning, Computer Awareness, and English—know what to study..",
      slug: "syllabus-for-nimcet-exam"
    },
    {
      image: PreviousYearPaper,
      title: "Previous Year Papers",
      desc: "Practice with real NIMCET papers to understand the exam pattern and difficulty level.",
      slug: "previous-year-papers"
    },
    {
      image: Practice_Resources,
      title: "Practice Resources & Timetables",
      desc: "Access study materials and follow structured timetables to stay consistent and productive.",
      slug: "practice-resources"
    }
    ,
    {
      image:Planner,
      title:"Smart Syllabus Planner (Auto Generator)",
     desc: "Get a personalized, day-wise study plan based on your available time and target exam date—automatically generated to keep your preparation on track.",
      slug:"smart-syllabus-planner"
    },
    {
      image: Forum,
      title: "Discussion Forum (Coming Soon!)",
      desc: "Connect, ask doubts, and discuss ideas with fellow aspirants in our community forum.",
      slug: "discussion-forum"
    }
  ]
  return (
    <div>
      <div className='top'>
        <div className='content'>
          <h4 className='mb-1 fw-bold'>
            Crack NIMCET With{' '}
            <TypeAnimation
              sequence={['Confidence!']}
              wrapper="span"
              cursor={true}
              speed={50}
              style={{ display: 'inline-block', color: '#ffc107' }}
            />
          </h4>
          <p>Welcome to your ultimate preparation hub for NIMCET. Get expert tips, subject-wise strategies, study resources, and real experiences — all in one place.
          </p>
        </div>
        <div className='overlay'>
          <img src={Logo} alt="" style={{ width: "100%", height: "75vh" }} />
        </div>
        <div className="bg-dark text-secondary p-4 rounded shadow-sm">
          <h2 className="mb-3 text-warning">What is NIMCET?</h2>
          <p>
            The <strong>NIT MCA Common Entrance Test (NIMCET)</strong> is a prestigious national-level entrance exam conducted annually for admission into the <strong>Master of Computer Applications (MCA)</strong> programs offered by <strong>11 National Institutes of Technology (NITs)</strong> and <strong>2 Indian Institutes of Information Technology (IIITs)</strong> across India.
          </p>
          <p>
            For the academic year <strong>2025–26</strong>, NIMCET 2025 is the exclusive gateway to secure MCA seats in NITs at Agartala, Allahabad, Bhopal, Delhi, Jamshedpur, Kurukshetra, Meghalaya, Patna, Raipur, Tiruchirappalli, and Warangal, as well as IIITs at Bhopal and Vadodara.
          </p>
          <p>
            The exam tests candidates on subjects like <strong>Mathematics, Analytical Ability & Logical Reasoning, Computer Awareness, and General English</strong>. Admission is granted strictly based on the <strong>All India Rank</strong> obtained in the exam.
          </p>
          <p>
            The MCA curriculum offered through NIMCET is designed to align with the dynamic needs of the IT industry — both in India and globally — making it a top choice for aspiring tech professionals.
          </p>
          <p className="text-center text-secondary mt-4">
            For official updates, notifications, and registration, visit the official NIMCET website:&nbsp;
            <a href="https://nimcet.admissions.nic.in" target="_blank" rel="noopener noreferrer" className="text-warning fw-bold">
              nimcet.admissions.nic.in
            </a>
          </p>

          <h3 className=" mb-3 " style={{ color: "#ffbb00", marginTop: "30px" }}>NIMCET 2025 Eligibility Criteria</h3>
          <ul className="list-unstyled">
            <li >
              ✅ Candidates must have a <strong>B.Sc / B.Sc (Hons) / BCA / BIT</strong> degree of minimum 3 years full-time duration from a recognized university.
            </li>
            <li >
              ✅ Or, a <strong>B.E / B.Tech</strong> degree from a recognized university.
            </li>
            <li >
              ✅ Must have studied <strong>Mathematics or Statistics</strong> as one of the subjects.
            </li>
            <li >
              ✅ A minimum of <strong>60% marks or 6.5 CGPA (55% or 6.0 CGPA for SC/ST)</strong> is required.
            </li>
            <li>
              ✅ Candidates appearing for the final year of their qualifying degree in 2025 are also eligible.
            </li>
          </ul>
        </div>

      </div>
      <div className='find mt-5'>
        <h4 className='text-center mb-5' style={{ textDecoration: "underline #ffbb00" }}>What You'll Find Here:</h4>
        <div className='card-item mb-5'>
          {
            items.map(item => {
              return (
                <Card item={item} />
              )
            })
          }
        </div>
      </div>
      <Card2 />
    </div>
  )
}

export default Home
