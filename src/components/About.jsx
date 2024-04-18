import React, { useState, useEffect, useRef } from 'react';
import Typed from 'typed.js';

const About = ({ id }) => {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [showName, setShowName] = useState(false); 
  const [typedName, setTypedName] = useState('');
  const [typedContent, setTypedContent] = useState('');
  const [resetAnimation, setResetAnimation] = useState(false);
  const [work,setWork]=useState('')
  
  const typedElement = useRef(null);
  const [visible, setVisible] = useState(true);
  const [LastScrollTop, SetLastScrollTop] = useState(0);
  useEffect(() => {
    let timeout;

    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollTop > LastScrollTop) {
        // Scrolling down
        clearTimeout(timeout);
        setVisible(false);
        
      } else {
        // Scrolling up
        setVisible(true);
      }
      SetLastScrollTop(currentScrollTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeout);
    };
  }, [LastScrollTop]);


  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;

      if (scrolled > lastScrollTop) {
        setIsScrollingDown(true);
        setIsScrollingUp(false);
      } else {
        setIsScrollingDown(false);
        setIsScrollingUp(true);
        setResetAnimation(prevState => !prevState);
        setShowName(true); // Show the name when scrolling up
      }

      setLastScrollTop(scrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop, resetAnimation]);

  useEffect(() => {
    // Simulate typing effect for the name initially
    if (typedName !== 'Hi , I am Micheal George') {
      const typingTimer = setTimeout(() => {
        // Get the next character from the target string based on the current length of typedName
        const nextChar = 'Hi , I am Micheal George'[typedName.length];
        setTypedName(prevName => prevName + nextChar);
      }, 100); // Typing speed in milliseconds
      return () => clearTimeout(typingTimer);
    }
  }, [typedName]);
  
  
  

 

  useEffect(() => {
    // Initialize Typed.js when the component mounts
    if (typedElement.current) {
      const typed = new Typed(typedElement.current, {
        strings: ['#Idea', '#Design', '#Coding', '#Testing'],
        typeSpeed: 150,
        backSpeed: 150,
        loop: true,
        showCursor: false
      });
      return () => {
        typed.destroy();
      };
    }
  }, []);

  const scrollToSection = (id) => {
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    const element = document.getElementById(id);
    if (element) {
      const offsetPosition = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className='' id={id}>
      <div className=''>
        <div className="row">
          <div className="col about d-flex justify-content-between flex-row ">
            <div className={`profile-text col-lg-6 col-sm-12  `}>
              
              <h1 className='name'>{typedName}</h1>
              <h5 className='description ml-5'>
                I am a fervent <b><span style={{color:"#36454f"}}>full-stack developer</span></b>, committed to translating concepts into digital brilliance. With expertise in both frontend finesse and backend robustness.
              </h5>
             
             <div className="texts d-flex justify-content-center align-items-center ">
             <div><h1 style={{color:"#36454f"}} ref={typedElement} className=' texts'></h1></div>
             </div>
             <div className='d-flex justify-between row '>
    <div className='col'>
        <p className=''>
            <a style={{ textDecoration: "none", color: "#ffffff" }} href="https://www.linkedin.com/in/micheal-george-j-a49224248/">
                <img className='icons' src="https://res.cloudinary.com/dkwftase4/image/upload/v1711514293/icons8-linkedin-48_ejmxlf.png" alt="" />
            </a>
        </p>
    </div>
    <div className='col'>
        <p className=''>
            <a style={{ textDecoration: "none", color: "#ffffff" }} href="https://www.instagram.com/mich43l__official/?hl=en">
                <img className='icons' src="https://res.cloudinary.com/dkwftase4/image/upload/v1711514292/icons8-instagram-48_enib2m.png" alt="" />
            </a>
        </p>
    </div>
    <div className='col'>
        <p className=''>
            <a style={{ textDecoration: "none", color: "#ffffff" }} href="https://twitter.com/MICHEALGEO1317">
                <img className='icons' src="https://res.cloudinary.com/dkwftase4/image/upload/v1711514981/icons8-twitter-48_obiz0p.png" alt="" />
            </a>
        </p>
    </div>
</div>
          

            
              <div className='about-btn projects-card  ' >
                <button style={{color:"#ffffff",backgroundColor:"#36454f"}}  onClick={() => scrollToSection('bio')} className='btn d-flex align-items-center justify-content-center  '>
                  <h3 className='mt-2'>About ...</h3>
                </button>
              </div>
            </div>
            <div  className='circle mb-5'></div>
            <div className='profile-image d-flex justify-content-center align-items-center w-75 image-style pentagon-background'>
              <div className='d-flex justify-content-center align-items-center w-100  '>
                <img style={{backgroundColor:""}} className={`image w-75 `} src="https://res.cloudinary.com/dkwftase4/image/upload/v1711615911/portfolio_pic_jdctnz.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
