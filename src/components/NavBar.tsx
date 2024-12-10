import React from 'react'
import { MdShoppingCart } from 'react-icons/md'

const NavBar = () => {
  return (
          <nav className=" w-full p-5 flex justify-end">
          <div className="item font-bold flex gap-7 items-center text-xl">
            <h3>Home</h3>
            <h3>Contact</h3>
            <h3>About</h3>
            <div className="bg-black text-white px-3 py-3 rounded-full ">
              <MdShoppingCart />
            </div>
          </div>
        </nav>
  )
}

export default NavBar
