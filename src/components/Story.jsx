import React from 'react'
import vidpng from '../assets/img/vidpng.png'
import vidpng2 from '../assets/img/vidpng2.png'

const Story = () => {
    const videos=[
        {
            image:vidpng
        },
        {
            image:vidpng2
        },
        {
            image:vidpng
        },
        {
            image:vidpng2
        },
        {
            image:vidpng
        },       {
            image:vidpng2
        },   ]
    
  return (
    <>
      <div className="text-center glowtext gradient-text text-3xl lg:text-4xl">
        Fast Storytelling
      </div>
      <div className="text-white lg:text-4xl font-semibold my-2 text-center">
        Ready-Made Template for faster storytelling
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-10">
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center'>
          {videos.map((video, i) => (
            <div key={i} className="w-full max-w-sm">
              <img 
                src={video.image} 
                alt={`Video template ${i + 1}`}
                className='w-full h-auto rounded-lg'
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <button className='px-7 py-2 border rounded-xl primary green_border text-green-600 hover:bg-green-600 hover:text-white transition-colors'>
            View All ➡️
          </button>
        </div>
      </div>
    </>
  )
}

export default Story