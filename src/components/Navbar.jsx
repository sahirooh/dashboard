import React from "react";

const Navbar = () => {
  return (
    <div className="">
      <nav className="container flex justify-between m-auto max-w-screen-xl h-[72px] items-center">
        <div>
          <img src="/images/brand_logo.png" alt="logo" />
        </div>

        <ul className="flex justify-between list-none gap-6">
          <li href="#">Menu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>

        <button className="py-1.5 px-4 bg-rose-700 h-8 text-white font-medium leading-4">
          Login
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
