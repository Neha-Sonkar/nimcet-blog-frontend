import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import SignUp from './components/SignUp'
import LogIn from './components/LogIn'
import ForgetPassword from './components/ForgetPassword'
import ForgetPasswordCode from './components/ForgetPasswordCode'
import Syllabus from './components/Syllabus'
import SmartSyllabusPlanner from './components/SmartSyllabusPlanner'
import PreviousPapers from './components/PreviousPapers'
import Resources from './components/Resources'
import DiscussionForum from './components/DiscussionForum'
import ScrollTop from './components/ScrollTop'
import About from './components/About'
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import State from './Context/State'
import ChangePassword from './components/ChangePassword'

function App() {
  return (
    <>
      <State>
        <Router>
          <ScrollTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LogIn />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/change-password' element={<ChangePassword/>} />
            <Route path='/forgetpassword' element={<ForgetPassword />} />
            <Route path='/forgetpasswordcode' element={<ForgetPasswordCode />} />
            <Route path='/syllabus-for-nimcet-exam' element={<Syllabus />} />
            <Route path='/smart-syllabus-planner' element={<SmartSyllabusPlanner />} />
            <Route path='/previous-year-papers' element={<PreviousPapers />} />
            <Route path='/practice-resources' element={<Resources />} />
            <Route path='/discussion-forum' element={<DiscussionForum />} />
            <Route path='/about' element={<About />} />
          </Routes>
          <Footer />
        </Router>
      </State>
    </>
  )
}

export default App
