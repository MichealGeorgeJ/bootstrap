import React from 'react';

const Skills = ({ id }) => {
  const skillsData = {
    FrontendSkills: [
      {
        skillName: "HTML",
        imageUrl: "https://res.cloudinary.com/dkwftase4/image/upload/v1711377553/icons8-html-5-48_aoywj6.png"
      },
      {
        skillName: "CSS",
        imageUrl: "https://res.cloudinary.com/dkwftase4/image/upload/v1711380384/icons8-css-48_dvj8al.png"
      },
      {
        skillName: "Java Script",
        imageUrl: "https://res.cloudinary.com/dkwftase4/image/upload/v1711377553/icons8-js-48_edzqjl.png"
      },
      {
        skillName: "React JS",
        imageUrl: "https://res.cloudinary.com/dkwftase4/image/upload/v1711377553/icons8-react-40_fbhfci.png"
      },
      {
        skillName: "Bootstrap",
        imageUrl: "https://res.cloudinary.com/dkwftase4/image/upload/v1711377553/icons8-bootstrap-48_ocud0s.png"
      },
      {
        skillName: "Tailwind CSS",
        imageUrl: "https://res.cloudinary.com/dkwftase4/image/upload/v1711376582/icons8-tailwind-css-48_nbkcqo.png"
      },
      {
        skillName: "Redux",
        imageUrl: "https://res.cloudinary.com/dkwftase4/image/upload/v1711376710/icons8-redux-48_vsajka.png"
      },
    
      
    ],
    BackendSkills: [
      {
        skillName: " Node JS",
        imageUrl: "https://res.cloudinary.com/dkwftase4/image/upload/v1711378467/icons8-nodejs-48_xyfehw.png"
      },
      {
        skillName: "Express JS",
        imageUrl: "https://res.cloudinary.com/dkwftase4/image/upload/v1711378467/icons8-express-js-48_mdjppm.png"
      },
      {
        skillName: "MongoDB",
        imageUrl: "https://res.cloudinary.com/dkwftase4/image/upload/v1711378467/icons8-mongodb-a-cross-platform-document-oriented-database-program-48_dleb3o.png"
      },
      {
        skillName: "Mongoose",
        imageUrl: "https://res.cloudinary.com/dkwftase4/image/upload/v1711378467/icons8-mongoose-48_mghuiv.png"
      },
      {
        skillName: "Python",
        imageUrl: "https://res.cloudinary.com/dkwftase4/image/upload/v1711380746/icons8-python-48_o5m12l.png"
      },
      {
        skillName: "My SQL",
        imageUrl: "https://res.cloudinary.com/dkwftase4/image/upload/v1711378467/icons8-mysql-48_bh9dnu.png"
      },
      {
        skillName: "JWT",
        imageUrl: "https://res.cloudinary.com/dkwftase4/image/upload/v1711378467/icons8-jwt-48_w9xfc5.png"
      },
     
    ],
    OtherSkills: [
      {
        skillName: "Github",
        imageUrl: "https://res.cloudinary.com/dkwftase4/image/upload/v1711378466/icons8-github-40_ddjkcq.png"
      },
      {
        skillName: "Git",
        imageUrl: "https://res.cloudinary.com/dkwftase4/image/upload/v1711378466/icons8-git-48_tryeyk.png"
      },
      {
        skillName: "Postman API",
        imageUrl: "https://res.cloudinary.com/dkwftase4/image/upload/v1711378466/icons8-postman-api-48_j8twc3.png"
      },
      {
        skillName: "VS Code",
        imageUrl: "https://res.cloudinary.com/dkwftase4/image/upload/v1711378466/icons8-vs-code-48_fb084z.png"
      },
      {
        skillName: "Cloudinary",
        imageUrl: "https://res.cloudinary.com/dkwftase4/image/upload/v1711378466/icons8-cloud-40_um6wkp.png"
      },
      {
        skillName: "Vercel",
        imageUrl: "https://res.cloudinary.com/dkwftase4/image/upload/v1711378466/icons8-triangle-48_pxio83.png"
      },
     
    ]
  };

  return (
    <div id={id}>
      <div className="container p-2">
        <div className='d-flex justify-content-center'>
          <h1>Known Technologies</h1>
        </div>
        <div className="row d-flex justify-content-between">
          
          {Object.keys(skillsData).map(category => (
            <div className="col-lg-4 col-sm-6 mt-3 mb-5 " key={category}>
              <div className='d-flex justify-content-center '>
                <h3 className=''>{category.replace(/([A-Z])/g, ' $1').trim()}</h3> 
              </div>
              <div style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", borderRadius: ".5rem" }} className="card m-3 p-2 projects-card h-100">
                <div className="card-body d-flex flex-column align-items-start">
                 
                  {skillsData[category].map(skill => (
                    <div key={skill.skillName}>
                      <h5><img className='skill-icons' src={skill.imageUrl} alt="" /> {skill.skillName}</h5>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills;