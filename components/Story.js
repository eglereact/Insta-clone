import React from 'react'

function Story({ name, avatar }) {
  return (
    <div>
      <img
        className="easy-out h-14 w-14 transform cursor-pointer rounded-full border-2 border-red-500 object-contain p-[1.5px] transition duration-200 hover:scale-110"
        src={avatar}
        alt=""
      />
      <p className="w-14 truncate text-center text-xs">{name}</p>
    </div>
  )
}

export default Story
