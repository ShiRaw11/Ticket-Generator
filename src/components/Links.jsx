import React from "react";
import { Link } from "react-router-dom";
export default function Links({ title, to }) {
  return (
    <div>
      <Link
        className="font-title font-light text-[18px] text-gray hover:text-white hover:font-bold focus:text-white focus:font-bold"
        to={to}
      >
        {title}
      </Link>
    </div>
  );
}
