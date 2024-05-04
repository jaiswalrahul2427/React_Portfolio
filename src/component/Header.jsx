// import React from 'react'
import {
 
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  DarkThemeToggle,
} from "flowbite-react";
function Header() {
  return (
    <Navbar fluid  className="sticky text-white bg-black ">
      <NavbarBrand href="">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">RJ</span>
      </NavbarBrand>

      <div className="flex md:order-2">
        {/* <Dropdown
          arrowIcon={false}
          inline
          label={
          }
        >
          <DropdownHeader>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block text-sm font-medium truncate">name@flowbite.com</span>
          </DropdownHeader>
          <DropdownItem>Dashboard</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Earnings</DropdownItem>
          <DropdownDivider />
          <DropdownItem>Sign out</DropdownItem>
        </Dropdown> */}
        <NavbarToggle />
      </div>
      <NavbarCollapse className="text-center ">
        <NavbarLink href="#" active>
          Home
        </NavbarLink>
        <NavbarLink href="#">Services</NavbarLink>
        <NavbarLink href="#">Skills</NavbarLink>
        <NavbarLink href="#">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  )
}
export default Header
