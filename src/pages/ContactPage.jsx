import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { socialMediaLinks } from '../data/data';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaGithub, FaCodepen } from "react-icons/fa";

const ContactSchema = Yup.object().shape({
  name: Yup.string().min(2).max(50).required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  message: Yup.string().min(50).max(250).required('Message is required'),
});

const ContactPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    // Simulate API request delay
    setTimeout(() => {
      // Handle form submission here (e.g., send the data to the server)
      console.log(values);

      // Reset the form and show the success message
      setSubmitting(false);
      resetForm();
      setIsSubmitted(true);

      // Hide the success message after a few seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1000);
  };

  return (
    <section className="text-gray-700 py-20 px-8">
    <div>
      <h1 className='text-4xl text-center font-semibold mb-4'>Contact Me</h1>
      <div className="mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Contact Details */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Contact Details</h2>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <p className="text-gray-700 mb-2">
                <strong>Name:</strong> Ankush Dongre
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong> dongreankush52[at]gmail.com
              </p>
              <p className="text-gray-700">
                <strong>Phone:</strong> +91-99238-52939
              </p>
              <div className="flex space-x-4 mt-4">
      {socialMediaLinks.map((socialLink)=>{
          const {name, icon, link} = socialLink
          return <a key={name} href={link} className="text-2xl">{icon}</a>
        })}
      </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Contact Form</h2>
            <Formik
              initialValues={{
                name: '',
                email: '',
                message: '',
              }}
              validationSchema={ContactSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="bg-white rounded-lg shadow-lg p-6">
                  {isSubmitted && (
                    <div className="mb-4 text-green-600">
                      Form submitted successfully!
                    </div>
                  )}
                  <div className="mb-4">
                    <label htmlFor="name" className="block font-medium text-gray-700">
                      Name
                    </label>
                    <Field
                      type="text"
                      name="name"
                      id="name"
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-500"
                    />
                    <ErrorMessage name="name" component="div" className="text-red-600" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block font-medium text-gray-700">
                      Email
                    </label>
                    <Field
                      type="email"
                      name="email"
                      id="email"
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-500"
                    />
                    <ErrorMessage name="email" component="div" className="text-red-600" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="message" className="block font-medium text-gray-700">
                      Message
                    </label>
                    <Field
                      as="textarea"
                      name="message"
                      id="message"
                      rows="4"
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-500"
                    />
                    <ErrorMessage name="message" component="div" className="text-red-600" />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default ContactPage;
