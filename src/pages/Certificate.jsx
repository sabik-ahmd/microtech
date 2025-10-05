import React from 'react';
import certificate1 from '../assets/certificate1.png';


const certificates = [
  { img: certificate1 , title: "Apple Certified Technician" },
  { img: certificate1, title: "Apple and Android Repair Specialist" },
];

function Certificate() {
  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {certificates.map((cert, index) => (
        <div key={index} className="bg-white p-4 rounded shadow hover:shadow-lg transition text-center">
          <img src={cert.img} alt={cert.title} className="mb-2 w-full"/>
          <p className="font-bold">{cert.title}</p>
        </div>
      ))}
    </div>
  );
}

export default Certificate;