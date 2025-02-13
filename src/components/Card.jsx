import React from 'react'

export default function Card({children,cardStyle}) {
  return (
    <div className={` z-10 p-2 border border-slate rounded-3xl shadow-lg h-auto ${ cardStyle ? cardStyle : " "}`}>
{children}
    </div>
  )
}
