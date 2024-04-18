import React from 'react'

const Certificate = ({id}) => {
  return (
    <div id={id}>
      
       <div className="p-2 row d-flex  flex-row">
      
       <div className="col-lg-6 col-sm-12">
       <img src="https://res.cloudinary.com/dkwftase4/image/upload/v1712921662/GuviCertification_-_15Gu513S1U6777i014_1_rg4ufl.png" alt="" className="card-img-top w-100" />
       </div>
       <div className="col-lg-6 col-sm-12 d-flex justify-content-center align-items-center flex-column">
       <h3>Certification :</h3>
              <p>Certified as a MERN Stack Developer by GUVI Geek Networks, affiliated with IIT Madras Incubation Company. Equipped with expertise in MongoDB, Express.js, React.js, and Node.js. Proficient in building dynamic web applications and implementing industry best practices. Excited to leverage skills for impactful solutions in technology.</p>
       </div>
       </div>
       
    </div>
  )
}

export default Certificate