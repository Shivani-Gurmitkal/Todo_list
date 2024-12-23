import React from 'react'

function Card({title, desc, date}) {
  return (
    <div>

        <div className="w-60 mx-auto bg-neutral-200 rounded-md p-2 px-4 mt-4">
            <h2 className='font-semibold'>{title}</h2>
            <p className='text-sm mt-1 text-neutral-600 text-ellipsis overflow-hidden'>{desc}</p>
            <p className="text-xs text-gray-800 mt-2">{date}</p>
        </div>
        
    </div>
  )
}

export default Card
