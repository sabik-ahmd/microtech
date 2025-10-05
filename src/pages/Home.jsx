import React from 'react';
import Poster from '../assets/poster.png'; // import the image

function Home() {
  return (
    <div className="text-center mt-4 px-4">
      <img src={Poster} alt="Micro Tech Poster" className="mx-auto w-full max-w-3xl rounded shadow"/>
      <h2 className="text-2xl font-bold mt-4">Professional iPhone & Android Repair Services</h2>
      <p className="mt-2 text-gray-700">Reliable service with original parts where possible.</p>
    </div>
  );
}

export default Home;
