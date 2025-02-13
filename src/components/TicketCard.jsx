import React, { useState } from "react";

const TicketSelection = ({ onSelect }) => {
  const [selected, setSelected] = useState(null);

  const tickets = [
    { type: "Free", price: "Free", access: "REGULAR ACCESS", available: "20/52" },
    { type: "VIP", price: "$150", access: "VIP ACCESS", available: "20/52" },
    { type: "VVIP", price: "$150", access: "VVIP ACCESS", available: "20/52" },
  ];

  const handleSelect = (type) => {
    if (selected === type) {
      setSelected(null); 
      onSelect(null);
    } else {
      setSelected(type);
      onSelect(type);
    }
  };

  return (
    <div className=" flex flex-col md:flex-row md:gap-4 gap-6 bg-ticket_bg  ">
      {tickets.map((ticket) => (
        <button
          key={ticket.type}
          onClick={() => handleSelect(ticket.type)}
          className={`md:w-[170px] w-full md:py-6 border-2 p-3 flex justify-start flex-col md:px-3 rounded-lg transition-all text-white 
            ${
              selected === ticket.type
                ? "bg-ticket_selected text-white border-ticket_border" 
                : "bg-transparent border-ticket_border hover:bg-ticket_hover " 
            }`}
        >
          <h2 className="text-[20px] font-semibold p-1">{ticket.price}</h2>
          <p className="text-[12px] text-gray">{ticket.access}</p>
          <p className="text-[14px] p-1">{ticket.available}</p>
        </button>
      ))}
    </div>
  );
};

export default TicketSelection;
