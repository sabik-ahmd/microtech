import React from 'react';
import ServiceCard from '../components/ServiceCard';

const services = [
  { title: "Genuine Screen Replacement", description: "Professional and reliable service with original parts where possible." },
  { title: "Battery Replacement", description: "Professional and reliable service with original parts where possible." },
  { title: "Chiplevel Repairing", description: "Professional and reliable service with original parts where possible." },
  { title: "iPhone Storage Upgrade", description: "Professional and reliable service with original parts where possible." },
  { title: "Green/White Screen Issue Fixing", description: "Professional and reliable service with original parts where possible." },
  { title: "FaceID Repairing", description: "Professional and reliable service with original parts where possible." },
  { title: "All Model Glass Changing", description: "Professional and reliable service with original parts where possible." }
];

function Services() {
  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {services.map((service, index) => (
        <ServiceCard key={index} title={service.title} description={service.description} />
      ))}
    </div>
  );
}

export default Services;