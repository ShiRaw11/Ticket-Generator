import React from 'react'
import logo from '../assets/logo.png'
import Links from './links'
import TicketButton from './button'
import { FaArrowRightLong } from "react-icons/fa6";


export default function TicketNavBar
() {
  return (
    <div className='flex items-center justify-between px-[16px] py-[12px] w-[90%] border border-slate rounded-3xl' >
        <div>
           <img src={logo} alt='logo image'/>
        </div>
        <div className='flex gap-12'>
            <Links title={'Events'} />
            <Links title={'My Tickets'} />
            <Links title={'About Project'} />
        </div>
        <TicketButton buttonStyle={'bg-white text-black'} buttonText={"MY TICKETS"} buttonIconRight={<FaArrowRightLong />} />
    </div>
  )
}
