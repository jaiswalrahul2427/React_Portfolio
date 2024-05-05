// import React from 'react'
import { NavLink } from "react-router-dom";
import {
 
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
} from "flowbite-react";
function Header() {
  return (
    <Navbar fluid  className="sticky text-white bg-black ">
      <NavbarBrand href="">
          <span className="self-center text-xl font-semibold whitespace-nowrap font-kalam dark:text-white">RJ</span>
      </NavbarBrand>

      <div className="flex md:order-2">
       
        <NavbarToggle />
      </div>
      <NavbarCollapse className="text-2xl text-center md:space-y-5 font-kalam ">
       <NavLink to="/"  className={({isActive}) =>
                                    `block py-2 text-xl  pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 ${isActive ? "text-orange-700":"text-gray-700"} lg:p-0`
                                }>Home</NavLink>
       <NavLink to="/contact" className={({isActive}) =>
                                    `block py-2 text-xl  pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 ${isActive ? "text-orange-700":"text-gray-700"} lg:p-0`
                                }>Contact</NavLink>
       <NavLink to="/certificate" className={({isActive}) =>
                                    `block py-2 text-xl  pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 ${isActive ? "text-orange-700":"text-gray-700"} lg:p-0`
                                }>Certificate</NavLink>
       <NavLink to="/education" className={({isActive}) =>
                                    `block py-2 text-xl  pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 ${isActive ? "text-orange-700":"text-gray-700"} lg:p-0`
                                }>Education</NavLink>
      </NavbarCollapse>
    </Navbar>
  )
}
export default Header
