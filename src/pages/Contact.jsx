import React from 'react';

function Contact() {
  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <p className="mb-2">Address: Ground Floor, Hindustan Building, Puttur, Karnataka 574201</p>
      <p className="mb-2">Phone: +91 96637 58588 / +91 91132 35714</p>
      <p className="mb-4">Email: microtech@gmail.com</p>

      <form className="bg-white p-4 rounded shadow space-y-4">
        <input type="text" placeholder="Your Name" className="w-full border p-2 rounded"/>
        <input type="email" placeholder="Your Email" className="w-full border p-2 rounded"/>
        <textarea placeholder="Message" className="w-full border p-2 rounded"></textarea>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Send</button>
      </form>
    </div>
  );
}

export default Contact;