import React from 'react'

const Reviewcard = ({ name, img, text }) => {
  return (
    <div className="w-full md:w-1/3 bg-white border-2 border-gray-300 p-5 rounded-lg shadow-md flex flex-col items-center">
      <p className="text-gray-700 text-center mb-4">"{text}"</p>
      <div className="flex flex-col items-center">
        <img src={img} alt={name} className="w-16 h-16 rounded-full object-cover mb-2" />
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
      </div>
    </div>
  )
}

export default Reviewcard
