import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';

const Contact = ({id}) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: ''
    },
    validationSchema: yup.object({
      name: yup.string().required('Name is required'),
      email: yup.string().required('Email is required').email('Enter a valid email'),
      message: yup.string().required('Enter your message')
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        await emailjs.sendForm('service_wsecvk6', 'template_ltxbfxb', '#contactForm', 'ukcMmZ7E0p5b7P9OW');
        toast.success('Message sent successfully');
        resetForm();
      } catch (error) {
        toast.error('Failed to send message');
        console.error('Error:', error);
      }
    }
  });
  return (
    <div id={id}>
      <div className="container-fluid p-2">
      <div className="row d-flex justify-content-center">
        <div className="col-lg-6 col-sm-12 text-white d-flex justify-content-center align-items-center flex-column">
          <h1>Contact</h1>
          <p>
          I'm actively seeking new career opportunities and would love to hear from you! Whether it's a job opening, freelance project, or just a chat about potential collaborations, I'm eager to explore how I can contribute to your team.


          </p>
        </div>
        <div className="col-lg-6 col-sm-12">
          <div className="card p-3">
          <form id="contactForm" onSubmit={formik.handleSubmit}>
                <div className="form-group item">
                  <label htmlFor="name">Name:</label>
                  <input style={{ border: "1px solid #7f00ff" }} type="text" className="form-control" id="name"
                    name="name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name} />
                  {formik.touched.name && formik.errors.name ? (
                    <div style={{ color: 'red' }}> {formik.errors.name} </div>
                  ) : null}
                </div>
                <div className="form-group item">
                  <label htmlFor="email">Email:</label>
                  <input style={{ border: "1px solid #7f00ff" }} type="email" className="form-control" id="email"
                    name="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email} />
                  {formik.touched.email && formik.errors.email ? (
                    <div style={{ color: 'red' }}> {formik.errors.email} </div>
                  ) : null}
                </div>
                <div className="form-group item">
                  <label htmlFor="message">Message:</label>
                  <textarea style={{ border: "1px solid #7f00ff", borderRadius: ".2rem" }} className='w-100 px-2' name="message" id="message"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.message} />
                  {formik.touched.message && formik.errors.message ? (
                    <div style={{ color: 'red' }}> {formik.errors.message} </div>
                  ) : null}
                </div>
                <div className="form-group d-flex justify-content-center">
                  <button type='submit' style={{  borderRadius: ".5rem", backgroundColor: "#7f00ff" }} className="btn text-white contact-btn item "> Send Message </button>
                </div>
              </form>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Contact