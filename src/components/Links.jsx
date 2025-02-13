import React from 'react'
import { Link } from 'react-router-dom';
export default function Links({title}) {
  return (
    <div>
        <Link className ='font-[JejuMyeongjo] font-light text-[18px] text-gray hover:text-white hover:font-bold' to='/'>
{title}
        </Link>
    </div>
  )
}
