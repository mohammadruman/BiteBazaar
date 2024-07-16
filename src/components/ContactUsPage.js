// src/components/ContactUsPage.js
import React from 'react';
import ContactForm from './ContactForm';

const ContactUsPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <p className="text-gray-600 mb-8">Please fill out the form below to contact us:</p>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactUsPage;
