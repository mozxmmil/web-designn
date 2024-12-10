import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
          <>
          <Image
          src={
                    "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vZGVsJTIwbWFsZXxlbnwwfHwwfHx8MA%3D%3D"
          }
          alt="nope"
          fill
          className="object-cover object-center"
          />
          </>
  )
}

export default Footer
