import React from "react";
import TicketNavBar from "../components/TicketNavBar";
import Card from "../components/Card";
import ProgressHeader from "../components/progressBar";
import "../trial.css";
import { useState, useEffect, useRef } from "react";
import html2canvas from "html2canvas";
import barcode from "../assets/barcode.png";
import TicketButton from "../components/button";
import { useNavigate } from "react-router-dom";

export default function TicketReady() {
  const navigate = useNavigate();
  const ticketRef = useRef(null);
  const [event, setEvent] = useState(null);
  const [attendee, setAttendee] = useState(null);
  const [ticketDetails, setTicketDetails] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  const downloadTicket = () => {
    setTimeout(() => {
      html2canvas(ticketRef.current, { scale: 2, useCORS: true })
        .then((canvas) => {
          const link = document.createElement("a");
          link.href = canvas.toDataURL("image/png");
          link.download = "ticket.png";
          link.click();
        })
        .catch((error) => console.error("Error capturing ticket:", error));
    }, 1000);
  };

  useEffect(() => {
    const storedData = localStorage.getItem("eventDetails");
    if (storedData) {
      setEvent(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    const attendeeData = localStorage.getItem("attendeeDetails");
    console.log(attendeeData);
    if (attendeeData) {
      setAttendee(JSON.parse(attendeeData));
    }
  }, []);

  useEffect(() => {
    const ticketData = localStorage.getItem("ticketDetails");
    if (ticketData) {
      setTicketDetails(JSON.parse(ticketData));
    }
  }, []);

  if (!event) return <p>Loading...</p>;

  if (!attendee) {
    return <p className="text-white">No attendee details found.</p>;
  }

  const handleBack = () => {
    navigate("/");
  };

  return (
     <div className="min-h-screen bg-radial relative flex flex-col">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[100vw] h-[50vh] bg-[radial-gradien(ellipse_at_bottom,_rgba(36,160,181,0.2)_0%,_rgba(36,160,181,0)_70%)]"></div>
    
          <div className="w-full flex justify-center py-[12px]">
            <TicketNavBar />
          </div>
    
          <div className="flex justify-center  w-full min-h-full">
            <Card cardStyle={" w-[420px] md:w-[600px] p-[24px] m-[32px]"}
          children={
            <>
              <div>
                <ProgressHeader title="Ready" step={3} />
              </div>

              <div className="w-full flex flex-col items-center">
                <div className="card w-[400px] flex flex-col justify-center items-center overflow-hidden">
                  <div className="bg-radial-gradien w-full">
                    <div className="mt-[24px] gap-2 text-white w-full flex flex-col justify-center items-center">
                      <h1 className="text-[35px] font-semibold font-alatsi">
                        Your Ticket is Booked!
                      </h1>
                      <p className="text-[14px] text-gray">
                        Check your email for a copy or you can{" "}
                        <a className="cursor-pointer">
                          <strong>download</strong>
                        </a>
                      </p>
                    </div>
                    <div
                      className="ticket w-[90%] mx-auto bg-radial mt-[32px]"
                      ref={ticketRef}
                    >
                      <div className="ticket--start">
                        <div className="m-[15px] w-[90%]  border border-border rounded-xl p-3">
                          <div className=" flex flex-col justify-center items-center ">
                            <h1 className="font-heading text-[40px] text-white">
                              {event.name}
                            </h1>
                            <p className="text-white text-sm6 px-4">
                              {event.location}
                            </p>
                            <p className="text-gray text-sm mt-2">
                              {event.date} | {event.time}
                            </p>
                          </div>

                          <div className="w-full flex justify-center mt-3 ">
                            <div className="border border-4 border-border rounded-lg border-opacity-50 w-[140px] h-[140px]">
                              {attendee.file && (
                                <img
                                  src={attendee.file}
                                  alt="Uploaded"
                                  className="w-full h-full object-cover rounded-lg"
                                  onLoad={() => setImageLoaded(true)}
                                />
                              )}
                            </div>
                          </div>
                          <div className="bg-detail_bg  bg-opacity-50 p-4 rounded-lg border border-[#133D44] w-full mt-5 pt-2">
                            <div className="grid grid-cols-2 gap-4 text-sm text-white border-b border-input_border pb-2">
                              <div className="border-r border-input_border pr-2">
                                <p className="text-gray text-[12]">
                                  Enter your name
                                </p>
                                <p className="font-bold text-[14px] py-1 ">
                                  {attendee.name}
                                </p>
                              </div>
                              <div className="pl-2">
                                <p className="text-gray text-[12]">
                                  Enter your email *
                                </p>
                                <p className="font-bold text-[14px] py-1">
                                  {attendee.email}
                                </p>
                              </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 text-sm text-white border-b border-input_border py-2">
                              <div className="border-r border-input_border pr-2">
                                <p className="text-gray text-[12]">
                                  Ticket Type:
                                </p>
                                <p className="py-1">{ticketDetails.type}</p>
                              </div>
                              <div className="pl-2">
                                <p className="text-gray text-[12]">
                                  Ticket for:
                                </p>
                                <p className="py-1">{ticketDetails.count}</p>
                              </div>
                            </div>

                            <div className="text-sm text-white pt-2">
                              <p className="text-gray text-[12] ">
                                Special request ?
                              </p>
                              <p>{attendee.specialRequest}</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="ticket--end">
                        <div className="w-full flex justify-center p-3">
                          <img src={barcode} className="w-full object-cover" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full flex flex-col-reverse md:flex-row justify-between m-[32px] gap-4">
                  <TicketButton
                    buttonText={"Book Another Ticket"}
                    buttonStyle={
                      "w-full md:w-[50%] text-gradien bg-transparent border border-gradien"
                    }
                    onClickButtonHandler={handleBack}
                  />
                  <TicketButton
                    buttonText={"Download Ticket"}
                    buttonStyle=" w-full md:w-[50%] bg-gradien text-white border border-gradien"
                    onClickButtonHandler={downloadTicket}
                  />
                </div>
              </div>
            </>
          }
        />
      </div>
    </div>
  );
}
