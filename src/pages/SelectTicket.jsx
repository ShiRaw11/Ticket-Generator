import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import TicketNavBar from "../components/TicketNavBar";
import Card from "../components/Card";
import TicketSelection from "../components/TicketCard";
import TicketButton from "../components/button";
import ProgressHeader from "../components/progressBar";

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
    <div className="min-h-screen bg-radial relative flex flex-col gap-[32px]">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[100vw] h-[50vh] bg-[radial-gradien(ellipse_at_bottom,_rgba(36,160,181,0.2)_0%,_rgba(36,160,181,0)_70%)]"></div>

      <div className="w-full flex justify-center py-[12px]">
        <TicketNavBar />
      </div>

      <div className="flex justify-center w-full min-h-full ">
        <Card
          cardStyle={" w-[450px] md:w-[600px] p-[24px] "}
          children={
            <div>
              <ProgressHeader title="Ticket Selection" step={1} />

              <div className="w-full p-4 mt-[24px] bg-card_bg border border-drag_bg rounded-xl">
                <Card
                  cardStyle="w-full flex justify-center items-center p-0  border-x-2 border-l- "
                  children={
                    <div
                      className="w-[400px] flex flex-col items-center justify-center backdrop-blur-xl p-1 text-center"
                      style={{
                        background:
                          "radial-gradien(50% 50% at 40% 50%, rgba(36, 160, 181, 0.2) 0%, rgba(36, 160, 181, 0) 100%), rgba(10, 12, 17, 0.1)",
                      }}
                    >
                      <div className="w-full  flex flex-col items-center">
                        <h1 className="font-heading text-[60px] text-white">
                          {eventDetails.name}
                        </h1>
                        <p className="text-white text-sm">
                          {eventDetails.description}
                        </p>
                        <div className="w-full flex flex-col md:flex-row justify-center items-center gap-2 mt-4">
                          <p className="text-gray text-sm">
                            {eventDetails.location}
                          </p>
                          <p className="text-gray text-sm md:ml-2">
                            {eventDetails.date} | {eventDetails.time}
                          </p>
                        </div>
                      </div>
                    </div>
                  }
                />

                <div className="h-[5px] bg-tickets_border m-5"></div>

                <div className="mt-4">
                  <h1 className="text-white p-3">Select Ticket Type:</h1>
                  <Card
                    cardStyle="mx-2 p-6 border border-ticket_border border-opacity-50"
                    children={
                      <TicketSelection
                        onSelect={(type) => setSelectedTicket(type)}
                      />
                    }
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
                    <label className="text-white text-lg">
                      Number of Tickets
                    </label>
                    <div className="relative">
                      <select
                        value={ticketCount}
                        onChange={(e) =>
                          setTicketCount(parseInt(e.target.value))
                        }
                        className="w-full p-3 bg-ticket_no_bg text-white border border-tickets_no_border rounded-lg appearance-none focus:outline-tickets_no_border"
                      >
                        {[...Array(10)].map((_, index) => (
                          <option key={index} value={index + 1}>
                            {index + 1}
                          </option>
                        ))}
                      </select>
                      <RiArrowDropDownLine className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white pointer-events-none h-[30px] w-[30px]" />
                    </div>
                  </div>
                </div>

                <div className="w-full flex flex-col md:flex-row justify-between my-[32px] gap-4">
                  <TicketButton
                    buttonText="Cancel"
                    buttonStyle="w-full md:w-[50%] text-gradien bg-transparent"
                  />
                  <TicketButton
                    buttonText="Next"
                    buttonStyle=" w-full md:w-[50%]  text-white bg-gradien hover:bg-white hover:text-black "
                    onClickButtonHandler={handleNext}
                  />
                </div>
              </div>
            </div>
          }
        />
      </div>
    </div>
  );
}

export default SelectTicket;
