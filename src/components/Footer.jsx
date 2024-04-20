import React from 'react';

const Footer = ({ id }) => {
  return (
    <footer id={id} className="curved-top footer " style={{  position: 'relative' }}>
      <div className="design1"></div>
      <div className="design2"></div>
      <div className="design3"></div>
      <div style={{ background: 'linear-gradient(to right,#ffffff , #fff)', height: '20px', width: '100%', position: 'absolute', top: 0, left: 0, zIndex: -1, borderRadius: '0 0 50% 50%' }}></div>
      <div className='pt-5'>
        <div className="container">
          <div className="row  d-flex justify-content-center flex-row">
            <div className="col foo d-flex flex-row justify-content-center ">
              <div className="m-2">
                <h4  style={{ color: "#ffffff",borderBottom:'2px solid #ffffff' }}>Address :</h4>
                <p> <img src="https://res.cloudinary.com/dkwftase4/image/upload/v1711514292/icons8-address-48_sujwjg.png" alt="" /> 26/125,Mangammal Salai,<br />Devasahayam Mount,Aralvoimozhi <br /> -629301</p>
              </div>
              
              <div className="m-2 ml-5 footer  ">
                <h4 style={{ color: "#ffffff",borderBottom:'2px solid #ffffff' }}>Contact :</h4>
                <p> <img src="https://res.cloudinary.com/dkwftase4/image/upload/v1711514292/icons8-gmail-48_ds9uva.png" alt="" /> <span>
                michealgeorge1317@gmail.com</span></p>
                <p> <img src="https://res.cloudinary.com/dkwftase4/image/upload/v1711514292/icons8-phone-40_ghuvuz.png" alt="" /> <span> 6382141342</span> </p>
                
              </div>
              <div className="m-2  ml-5 footer foo-icons">
                <h4 style={{ color: "#ffffff",borderBottom:'2px solid #ffffff' }}>Social Media :</h4>
                <p>  <a style={{ textDecoration: "none", color: "#ffffff" }} href="https://www.linkedin.com/in/micheal-george-j-a49224248/"> <img src="https://res.cloudinary.com/dkwftase4/image/upload/v1711514293/icons8-linkedin-48_ejmxlf.png" alt="" /></a><span className='foo-media'> LinkedIn</span></p>
                <p> <a style={{ textDecoration: "none", color: "#ffffff" }} href="https://www.instagram.com/mich43l__official/?hl=en"><img src="https://res.cloudinary.com/dkwftase4/image/upload/v1711514292/icons8-instagram-48_enib2m.png" alt="" /></a> <span className='foo-media'> Instagram</span></p>
                <p><a style={{ textDecoration: "none", color: "#ffffff" }} href="https://twitter.com/MICHEALGEO1317"><img src="https://res.cloudinary.com/dkwftase4/image/upload/v1711514981/icons8-twitter-48_obiz0p.png" alt="" /></a> <span className='foo-media'> Twitter</span></p>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <p className=''> Copright &copy; 2024 </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;