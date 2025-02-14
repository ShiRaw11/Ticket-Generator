import React, { useState } from "react";
import logo from "../assets/logo.png";
import Links from "../components/Links";
import TicketButton from "../components/button";
import { FaArrowRightLong, FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

export default function TicketNavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center justify-between px-4 py-3 w-[90%] border border-slate rounded-3xl md:px-6 md:py-4">
      <img src={logo} alt="logo" className="w-[100px]" />

      <div className="hidden md:flex gap-12">
        <Links title={"Events"} to={"/"} />
        <Links title={"My Tickets"} />
        <Links title={"About Project"} to={"/about"} />
      </div>
      <div
        className="md:hidden cursor-pointer text-white hover:text-gradient"
        onClick={() => setIsOpen(true)}
      >
        <FaBars size={24} />
      </div>
      <TicketButton
        buttonStyle={"bg-white hover:bg-slate  hover:text-white"}
        buttonText={"MY TICKETS"}
        buttonIconRight={<FaArrowRightLong className="hover:text-white" />}
      />

      <div
        className={`fixed top-0 left-0 h-full w-[250px] bg-radial text-white rounded-lg shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-50 md:hidden`}
      >
        <div className="p-5 flex justify-between items-center border-b">
          <h2 className="text-lg font-semibold">Links</h2>
          <IoMdClose
            size={24}
            className="cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        </div>
        <div className="flex flex-col gap-6 p-5">
          <Links title={"Events"} to={"/"} />
          <Links title={"My Tickets"} />
          <Links title={"About Project"} to={"/about"} />
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
}
