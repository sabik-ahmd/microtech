import React from 'react';
import Phone1 from '../assets/phone1.jpg';
import Phone2 from '../assets/phone2.jpg';

const repairedPhones = [
  { img: Phone1, description: "iPhone X screen replaced successfully." },
  { img: Phone2, description: "iPhone 15 Pro Max battery replaced." },
];

function Projects() {
  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {repairedPhones.map((phone, index) => (
        <div key={index} className="bg-white p-4 rounded shadow hover:shadow-lg transition">
          <img src={phone.img} alt="Repaired Phone" className="mb-2 w-full"/>
          <p>{phone.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Projects;