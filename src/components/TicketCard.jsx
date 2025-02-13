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
    <div className="flex gap-4  bg-ticket_bg  ">
      {tickets.map((ticket) => (
        <button
          key={ticket.type}
          onClick={() => handleSelect(ticket.type)}
          className={`w-[170px] py-6 border-2 flex justify-start flex-col px-3 rounded-lg transition-all text-white 
            ${
              selected === ticket.type
                ? "bg-ticket_selected text-white border-ticket_border" 
                : "bg-transparent border-ticket_border hover:bg-ticket_hover " 
            }`}
        >
          <h2 className="text-[20px] font-semibold">{ticket.price}</h2>
          <p className="text-[14px]">{ticket.access}</p>
          <p className="text-[14px]">{ticket.available}</p>
        </button>
      ))}
    </div>
  );
};

export default TicketSelection;
