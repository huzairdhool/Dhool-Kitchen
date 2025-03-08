import React from 'react'
import Reviewcard from './Reviewcard'
import { assets } from '../assets/assets'

const Reviews = () => {
  const reviewData = [
    { 
      name: "Jane smith", 
      img: assets.img1, 
      text: "The food was absolutely delicious! Highly recommended." 
    },
    { 
      name: "Jhon doe", 
      img: assets.img2, 
      text: "Great service and amazing taste. Will order again!" 
    },
    { 
      name: "Aleena deen", 
      img: assets.img3, 
      text: "Best experience! The quality was top-notch." 
    }
  ];

  return (
    <section id="Reviews" className="w-full min-h-screen flex flex-col items-center justify-center p-4">
      <h2 className="text-3xl sm:text-4xl font-semibold p-2 mb-5 text-red-800">Reviews</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {reviewData.map((review, index) => (
          <Reviewcard key={index} name={review.name} img={review.img} text={review.text} />
        ))}
      </div>
    </section>
  )
}

export default Reviews
