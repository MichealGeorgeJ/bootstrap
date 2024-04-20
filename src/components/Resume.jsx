import React from 'react'

const Resume = ({id}) => {
  return (
    <div id={id}>
      <div className="  ">
      <div className="design"></div>
      <div className="design2"></div>
      <div className="design3"></div>
        <div className="row d-flex justify-content-center ">
          <div className="col-lg-6 col-sm-12 p-4 d-flex justify-content-center ">
            <img style={{boxShadow: '#ffffff 0px 7px 29px 0px'}} className='w-75' src="https://res.cloudinary.com/dkwftase4/image/upload/v1712920807/White_and_Beige_Minimalist_Designer_Professional_Cv_Resume_3_1_p57ljt.jpg" alt="" />
            
          </div>
          <div className="col-lg-6 col-sm-12 d-flex justify-content-center align-items-center flex-column">
            <h1 className='resume-text '>Resume</h1>
            <p className='container-fluid'>This section provides a comprehensive overview of my professional journey, highlighting my education, skills, and employment history, certifications .</p>
            <div>
            <button class='mb-4 projects-card' style={{  borderRadius: ".5rem",color:"#7f00ff",backgroundColor:'white', boxShadow: '#ffffff 0px 7px 29px 0px',border:'none' }} > <a style={{textDecoration:"none",color:"#7f00ff"}} href="https://res.cloudinary.com/dkwftase4/image/upload/fl_attachment/White_and_Beige_Minimalist_Designer_Professional_Cv_Resume_3_1_p57ljt.jpg"> <h4>Download</h4></a></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume