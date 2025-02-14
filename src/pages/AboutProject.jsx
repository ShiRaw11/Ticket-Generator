import React from "react";
import TicketNavBar from "../components/TicketNavBar";
import Card from "../components/Card";
import TicketButton from "../components/button";

export default function AboutProject() {
  return (
    <div className="min-h-screen bg-radial relative flex flex-col">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[100vw] h-[50vh] bg-[radial-gradien(ellipse_at_bottom,_rgba(36,160,181,0.2)_0%,_rgba(36,160,181,0)_70%)]"></div>
      <div className="w-full flex justify-center py-[12px]">
        <TicketNavBar />
      </div>
      <div className="flex justify-center  w-full min-h-full">
        <Card
          cardStyle={
            " w-[450px] md:w-[600px] p-[24px] m-[32px] text-white font-roboto text-[14px]"
          }
          children={
            <div className="p-[24px]">
              <h1 className="text-2xl font-bold mb-4 ">
                Event Ticket Booking UI – Open Source Practice Project 🎟️
              </h1>
              <p className="text-gray-300 mb-6">
                This is a beginner-friendly yet practical Event Ticket Booking
                UI designed for developers to clone, explore, and build upon.
                The design focuses on a seamless, login-free ticket reservation
                flow, allowing users to book event tickets quickly and
                efficiently.
              </p>
              <h2 className="text-xl font-semibold mt-6">Flow & Features</h2>
              <div className="text-left text-gray-400 mt-4">
                <h3 className="text-lg font-semibold">1️⃣ Ticket Selection</h3>
                <ul className="list-disc pl-6">
                  <li>Users can browse available tickets (Free & Paid).</li>
                  <li>Ticket options are displayed in a list or card view.</li>
                  <li>
                    For Free Tickets → Clicking “Get Free Ticket” proceeds to
                    attendee details.
                  </li>
                  <li>
                    For Paid Tickets → Clicking “Purchase Ticket” would ideally
                    open a payment modal.
                  </li>
                </ul>
                <h3 className="text-lg font-semibold mt-4">
                  2️⃣ Attendee Details Form
                </h3>
                <ul className="list-disc pl-6">
                  <li>
                    Users input their Name, Email, and optional Phone Number.
                  </li>
                  <li>
                    Profile picture upload option with preview functionality.
                  </li>
                  <li>
                    Ticket summary is visible to ensure users review their
                    details before submission.
                  </li>
                </ul>
                <h3 className="text-lg font-semibold mt-4">
                  3️⃣ Payment or Success Page
                </h3>
                <ul className="list-disc pl-6">
                  <li>
                    If the ticket is free, the user is taken directly to the
                    Ticket Confirmation Page.
                  </li>
                  <li>
                    If the ticket is paid, developers can integrate Stripe,
                    Paystack, or Flutterwave for payments.
                  </li>
                  <li>
                    Upon successful booking, users should receive a QR Code, a
                    PDF download option, and an email confirmation.
                  </li>
                </ul>
              </div>
              <h2 className="text-xl font-semibold mt-6">
                How to Build This 🚀
              </h2>
              <p className="text-gray-300 mt-4">
                This UI can be implemented using:
              </p>
              <div className="text-left text-gray-400 mt-4">
                <h3 className="text-lg font-semibold">
                  📌 Frontend (Next.js or React)
                </h3>
                <ul className="list-disc pl-6">
                  <li>
                    Component Breakdown: TicketCard.tsx, AttendeeForm.tsx,
                    PaymentModal.tsx, SuccessScreen.tsx
                  </li>
                  <li>
                    State Management: React’s Context API, Zustand, or Redux (if
                    needed).
                  </li>
                  <li>
                    File Handling: Users should be able to upload images using
                    Firebase, Cloudinary, or local preview.
                  </li>
                </ul>
              </div>
              <div className="text-left text-gray-400 mt-4">
                <h3 className="text-lg font-semibold">📌 Backend (Optional)</h3>
                <ul className="list-disc pl-6">
                  <li>
                    If persistence is required, a backend can be built using:
                  </li>
                  <li>Node.js & Express or Firebase Functions</li>
                  <li>
                    Database: MongoDB, PostgreSQL, or Firebase Firestore to
                    store ticket records
                  </li>
                </ul>
                <h3 className="text-lg font-semibold mt-4">
                  📌 Payment Integration
                </h3>
                <ul className="list-disc pl-6">
                  <li>For paid events, developers should integrate:</li>
                  <li>Stripe Checkout (for international transactions)</li>
                  <li>Paystack or Flutterwave (for African users)</li>
                </ul>
                <h3 className="text-lg font-semibold mt-4">
                  What You’ll Learn 🧑‍💻
                </h3>
                <ul className="list-disc pl-6">
                  <li>File handling & validation (profile picture uploads).</li>
                  <li>Dynamic UI updates based on ticket selection.</li>
                  <li>Persisting bookings using local state or a backend.</li>
                  <li>Integrating payment gateways for ticket purchases.</li>
                  <li>
                    Generating & validating QR Codes for event check-in
                    (Advanced).
                  </li>
                </ul>
                <h3 className="text-lg font-semibold mt-4">
                  Need Help? Reach Out! 💬
                </h3>
              </div>
              <div className="w-full flex justify-center text-[50px] mt-[24px]">
                💛 Enjoy
              </div>
              <div className="w-full flex flex-col-reverse md:flex-row justify-between mt-[32px] gap-4  border border-gradien p-4 rounded-xl">
                <TicketButton
                  buttonText={"Design File"}
                  buttonStyle={
                    "w-full md:w-[50%] text-gradien bg-transparent border border-gradien"
                  }
                />
                <TicketButton
                  buttonText={"Github Code"}
                  buttonStyle=" w-full md:w-[50%] bg-gradien text-white border border-gradien"
                />
              </div>
            </div>
          }
        />
      </div>
    </div>
  );
}
