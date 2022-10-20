import React from "react";
import DropDownMenu from "./DropDownMenu";
import Logo from "./Logo";
import NavItem from "./NavItem";
function Navbar({ fixed }) {

  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-green-600 p-4">
          <Logo/>
          <DropDownMenu/>
          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-3xl lg:flex-grow"></div>
          <div>
            <div className="text-3xl lg:flex-grow"> 
              <NavItem text = "News"/>
              <NavItem text = "Events"/>
              <NavItem text = "Executives"/>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;