import React from 'react';

function ServiceCard({ title, description }) {
  return (
    <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
      <h2 className="font-bold text-lg mb-2">{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default ServiceCard;