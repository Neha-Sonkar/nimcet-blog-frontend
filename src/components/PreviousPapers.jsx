import React, { useContext, useEffect, useRef, useState } from 'react';
import API from '../api';
import Logo from '/225325382.png';
import './Components.css';
import Context from '../Context/Context';

const PapersList = () => {
  const a = useContext(Context)
  const [papers, setPapers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [file, setFile] = useState(null)
  const [year, setYear] = useState()
  const ref = useRef(null)
  const [uploadBox, setUploadBox] = useState(false)
  const [spinner, SetSpinner] = useState(false)

  const handleFileChange = (e) => {
    setFile(e.target.files[0])
  }
  const handlesubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('year', year)
    formData.append('pdf', file)
    SetSpinner(true)
    try {
      const result = await API.post('/prevyrspapers/upload', formData)

      alert("PDF Uploadeod!")
      SetSpinner(false)
      setYear('');
      setFile(null);
      ref.current.value = ""
      setUploadBox(false)
      fetchPapers()
    }
    catch (error) {
      console.error(error)
    }
  }

  const fetchPapers = async () => {
    try {
      const response = await API.get('/prevyrspapers/getpapers');
      const sortedPapers = response.data.data.sort((a, b) => b.year - a.year)
      setPapers(sortedPapers);
    } catch (err) {
      setError('Error fetching papers');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchPapers();
  }, []);

  const handledelete = async (id) => {
    try {
      const result = await API.delete(`/prevyrspapers/pdfdelete/${id}`)
      alert("Deleted successfully!")
      setPapers(papers.filter(paper => paper.id !== id))
    }
    catch (error) {
      console.error(error)
      alert("Something went wrong!")
    }
  }

  const handleuploadclick = async () => {
    setUploadBox(true)
  }

  return (
    <div className='papers'>
      <img src={Logo} alt="" style={{ width: "100%", height: "65vh" }} />
      {uploadBox && <div className='boxUpload bg-dark'>
        <h5 className=' text-center m-5'><strong>Upload Papers</strong></h5>
        <form onSubmit={handlesubmit} className='d-flex uploadheading'>
          <input type="number" value={year} onChange={(e) => setYear(e.target.value)} placeholder='Years' required />
          <input type="file" onChange={handleFileChange} ref={ref} required />
          <button type='submit' style={{ backgroundColor: "#ffbb00", borderStyle: "none", borderRadius: "5px" }}>Upload PDF</button>
          {spinner && <span class="loader "></span>}
        </form>
        <div style={{
          position: "absolute",
          top: "8px",
          right: "15px",cursor:"pointer"
        }}><i class="fa-solid fa-xmark" onClick={() => setUploadBox(false)}></i></div>
      </div>}
      <div>
        <div className='k'>
          <h3 className='text-center mt-5' style={{ textDecoration: "underline #ffbb00" }}>
            Last 10 Years’ NIMCET Question Papers – All in One Place
          </h3>
          {a.user == 'nehasonkar2512@gmail.com' &&
            <>
              <button className='uploadbtn' onClick={handleuploadclick} style={{ color: "#ffbb00" }}>+ Upload</button>
            </>
          }
        </div>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}

        <div className='qust-paper-outer'>
          {papers.map((paper) => {
            return (
              <div key={paper.id} className='qust-paper'>
                <div>{paper.name.replace('.pdf', '')}</div>
                <div className='d-flex gap-3 justify-content-center align-items-center'>
                  <a href={`${import.meta.env.VITE_API_URL}/prevyrspapers/getpdf/${paper.id}`} target="_blank" rel="noopener noreferrer" style={{ color: "#ffbb00" }}>
                    [View]
                  </a>
                  {a.user==='nehasonkar2512@gmail.com' && <i className="fa-solid fa-trash" style={{ color: "#ffbb00" ,cursor:"pointer"}} onClick={() => handledelete(paper.id)}></i>}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PapersList;
