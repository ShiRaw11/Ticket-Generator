import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import TicketNavBar from "../components/navBar";
import Card from "../components/Card";
import TicketSelection from "../components/TicketCard";
import TicketButton from "../components/button";
import ProgressHeader from "../components/progressBar";
import { IoMdClose } from "react-icons/io";

function SelectTicket() {
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [ticketCount, setTicketCount] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const eventDetails = {
    name: "Techember Fest ’25",
    description:
      "Join us for an unforgettable experience at Techember Fest ’25! Secure your spot now.",
    location: "📍 Nairobi, Kenya",
    date: " 📅  March 15, 2025",
    time: "7:00 PM",
  };

  localStorage.setItem("eventDetails", JSON.stringify(eventDetails));

  const handleNext = () => {
    if (!selectedTicket) {
      setShowModal(true); 
      setTimeout(() => setShowModal(false), 2000); 
      return;
    }
  
    const ticketData = {
      type: selectedTicket,
      count: ticketCount,
    };
  
    localStorage.setItem("ticketDetails", JSON.stringify(ticketData));
    navigate("/attendee");
  };

  return (
    <div className="bg-[#02191D] relative w-full items-center">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[100vw] h-[50vh] bg-[radial-gradient(ellipse_at_bottom,_rgba(36,160,181,0.2)_0%,_rgba(36,160,181,0)_70%)]"></div>
      <div className="w-full flex justify-center py-[12px]">
        <TicketNavBar />
      </div>

      

      <div className="w-full flex justify-center">
        <Card
          children={
            <div>
              <div className="m-5">
                <ProgressHeader title="Ticket Selection" step={1} />
              </div>

              <div className="w-full p-4">
                <Card
                  cardStyle="w-full flex justify-center items-center p-0"
                  children={
                    <div className="w-[400px]">
                      <Card
                        cardStyle="border-none w-full p-0"
                        children={
                          <div className="w-full">
                            <h1 className="font-heading text-[60px] text-white">{eventDetails.name}</h1>
                            <p className="text-white text-sm">{eventDetails.description}</p>
                            <p className="text-gray text-sm mt-2">{eventDetails.location} | {eventDetails.date} | {eventDetails.time}</p>
                          </div>
                        }
                      />
                    </div>
                  }
                />
              </div>

              <div className="h-[5px] bg-tickets_border m-5"></div>
              <div className="mt-4">
                <h1 className="text-white p-3">Select Ticket Type:</h1>
                <Card
                  cardStyle="mx-5 p-6 border border-ticket_border border-opacity-50"
                  children={<TicketSelection onSelect={(type) => setSelectedTicket(type)} />}
                />
              </div>
              {showModal && (
  <div className="w-[300px]ml-5  mt-2 h-[50px] flex justify-center items-center bg-slate bg-opacity-50">
    <div className=" p-4 rounded-lg">
      <p className="text-red">Please select type of ticket!!</p>
    </div>
  </div>
)}
              <div className="m-5">
                <div className="flex flex-col gap-4">
                  <label className="text-white text-lg">Number of Tickets</label>
                  <div className="relative">
                    <select
                      value={ticketCount}
                      onChange={(e) => setTicketCount(parseInt(e.target.value))}
                      className="w-full p-3 bg-ticket_no_bg text-white border border-tickets_no_border rounded-lg appearance-none focus:outline-tickets_no_border"
                    >
                      {[...Array(10)].map((_, index) => (
                        <option key={index} value={index + 1}>{index + 1}</option>
                      ))}
                    </select>
                    <RiArrowDropDownLine className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white pointer-events-none h-[30px] w-[30px]" />
                  </div>
                </div>
              </div>

              <div className="flex gap-4 items-center m-5 pt-4">
                <TicketButton buttonText="Cancel" buttonStyle="w-[50%] z-10 hover:bg-white text-gradient" />
                <TicketButton buttonText="Next" buttonStyle="w-[50%] z-10 text-white hover:bg-white bg-gradient hover:text-gradient" onClickButtonHandler={handleNext} />
              </div>
            </div>
          }
        />
      </div>
    </div>
  );
}

export default SelectTicket;
