import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// import required modules
import { EffectCoverflow, Pagination,Autoplay } from 'swiper/modules';

export default function Projects({id}) {
  const projects=[
    {
      imageUrl:'https://res.cloudinary.com/dkwftase4/image/upload/v1711373464/Screenshot_2024-03-25_183643_wcfsfr.png',
      projectName:'Library Management',
      projectLink:'https://library-management-ten-gilt.vercel.app/',
      codeLink:'https://github.com/MichealGeorgeJ/Library-Management'
    },
    {
      imageUrl:'https://res.cloudinary.com/dkwftase4/image/upload/v1711373457/Screenshot_2024-03-25_184152_onrlbb.png',
      projectName:'ToDo App',
      projectLink:'https://library-management-ten-gilt.vercel.app/',
      codeLink:'https://to-do-iota-three.vercel.app/'
    },
    {
      imageUrl:'https://res.cloudinary.com/dkwftase4/image/upload/v1711373457/Screenshot_2024-03-25_185750_w1ks7y.png',
      projectName:'Employee Management',
      projectLink:'https://users-eosin-chi.vercel.app/',
      codeLink:'https://github.com/MichealGeorgeJ/Users'
    },
    {
      imageUrl:'https://www.allbusiness.com/media-library/online-shopping-concept.jpg?id=32093196',
      projectName:'E-Cart',
      projectLink:'https://shopping-order-s26h.vercel.app/Cart',
      codeLink:'https://github.com/MichealGeorgeJ/Shopping-Order'
    },
    {
      imageUrl:'https://images.vexels.com/media/users/3/202421/raw/0d61eff344ae7cad705a2c89b9616a70-online-courses-education-slider-design.jpg',
      projectName:'E-Courses',
      projectLink:'https://courses-tan-five.vercel.app/',
      codeLink:'https://github.com/MichealGeorgeJ/courses'
    },
    {
      imageUrl:'https://images.vexels.com/media/users/3/202421/raw/0d61eff344ae7cad705a2c89b9616a70-online-courses-education-slider-design.jpg',
      projectName:'E-Courses',
      projectLink:'https://courses-tan-five.vercel.app/',
      codeLink:'https://github.com/MichealGeorgeJ/courses'
    }

  ]
  return (
    <div id={id} >
      <div className='d-flex justify-content-center text-white'>
        <h1>Projects</h1>
      </div>
   <Swiper
   speed={6000}
  loop={true}
  effect={'coverflow'}
  grabCursor={true}
  centeredSlides={true}
  slidesPerView={'auto'}
  coverflowEffect={{
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  }}
  autoplay={{delay:1000,
    disableOnInteraction:true, 
  }}
  pagination={true}
  modules={[EffectCoverflow, Pagination,Autoplay]}
  className="mySwiper"
>
 


        
        {
          projects.map((project,id)=>(
<SwiperSlide key={id} >
        <div style={{boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",borderRadius:".5rem"}} className="card  h-100">
              <div  className='d-flex align-items-center justify-content-center image-card '>
                <img  className='card p-2 
                 w-100 h-100'src={project.imageUrl} alt="image" />

              </div>
              <div className="card-body d-flex flex-column align-items-center ">
                <h3 > {project.projectName} </h3>
                <p> <a style={{textDecoration:"None",color:"black"}} href={project.projectLink}>view</a></p>
                  <h3> <a style={{textDecoration:"None",color:"black"}} href={project.codeLink}><i className="fa-solid fa-code"></i></a></h3>
                
              </div>
            </div>
        </SwiperSlide>
          ))
        }
        
      </Swiper>
    </div>
  );
}
