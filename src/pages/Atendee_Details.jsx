import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TicketButton from "../components/button";
import Card from "../components/Card";
import ProgressHeader from "../components/progressBar";
import TicketNavBar from "../components/TicketNavBar";
import TicketInput from "../components/input";
import { MdCloudDownload } from "react-icons/md";

const AttendeeDetails = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [specialRequest, setSpecialRequest] = useState("Nil");
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = "Please enter your name";
    if (!email.trim()) newErrors.email = "Please enter your email";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = "Enter a valid email, example: yourexample@gmail.com";
    if (!file) newErrors.file = "Profile image is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFileUpload = async (event) => {
    const uploadedFile = event.target.files[0];
    if (!uploadedFile) return;

    setUploading(true);

    const formData = new FormData();
    formData.append("file", uploadedFile);
    formData.append("upload_preset", "TicketAvatar");

    try {
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dmfameiuf/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      if (response.ok) {
        setFile(data.secure_url);
        setErrors((prev) => ({ ...prev, file: "" }));
      } else {
        console.error("Upload failed:", data.error);
      }
    } catch (error) {
      console.error("Upload failed:", error);
    } finally {
      setUploading(false);
    }
  };

  const handleNext = () => {
    if (!validateForm()) return;

    const attendeeData = { name, email, specialRequest, file };
    localStorage.setItem("attendeeDetails", JSON.stringify(attendeeData));

    navigate("/ticket");
  };

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
         <Card cardStyle={" w-[400px] md:w-[600px] p-[24px] m-[32px] "}
        children={
          <>
          <ProgressHeader title="Attendee Details" step={2} />
          <div className="p-[24px] mt-[32px] bg-ticket_bg border border-tickets_border rounded-3xl">
            <h2 className="text-white text-lg mb-4">Upload Profile Photo</h2>
            <div
              className={`relative bg-black bg-opacity-20 my-[32px] flex items-center justify-center  h-[120px] ${
                isDragging ? "border-teal-500 bg-[#0C3D4A]" : ""
              } rounded-xl cursor-pointer transition-all duration-300`}
              onDragOver={(e) => {
                e.preventDefault();
                setIsDragging(true);
              }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={(e) => {
                e.preventDefault();
                setIsDragging(false);
                const droppedFile = e.dataTransfer.files[0];
                if (droppedFile) {
                  setFile(droppedFile);
                  handleFileUpload({ target: { files: [droppedFile] } });
                }
              }}
              onClick={() => document.getElementById("fileUpload").click()}
              onMouseEnter={() => file && setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div className="w-[150px] h-[150px] border border-[2px] border-gradien border-opacity-50 rounded-3xl relative bg-drag_bg">
                {file ? (
                  <div className="relative w-full h-full">
                    <img
                      src={
                        typeof file === "string"
                          ? file
                          : URL.createObjectURL(file)
                      }
                      alt="Preview"
                      className="w-full h-full object-cover rounded-3xl"
                      onLoad={(e) => URL.revokeObjectURL(e.target.src)}
                    />
                    {isHovering && (
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white rounded-lg">
                        <span className="text-3xl">
                          <MdCloudDownload />
                        </span>
                        <p className="mt-2 text-[12px]">
                          Click to upload a new file
                        </p>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className=" h-full text-white text-center flex flex-col items-center justify-center">
                    <span className="text-3xl">
                      <MdCloudDownload />
                    </span>
                    <p className="mt-2 text-[12px]">
                      {isDragging
                        ? "Drop to upload"
                        : "Drag & drop or click to upload"}
                    </p>
                  </div>
                )}
              </div>
              <input
                id="fileUpload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileUpload}
              />
            </div>
            {uploading && (
              <p className="ml-5 text-white mt-3 flex justify-center items-center w-full">
                Uploading...
              </p>
            )}
            {errors.file && (
              <p className="text-red text-sm flex justify-center">
                {errors.file}
              </p>
            )}
          </div>

          <div className="h-[5px] bg-tickets_border my-[32px]"></div>

          <div className="w-full">
            <TicketInput
              label="Enter your name"
              inputType="text"
              required
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && (
              <p className="text-red text-sm mt-2 ml-2">{errors.name}</p>
            )}

            <TicketInput
              label="Enter your email"
              inputType="email"
              required
              placeholder="hello@avioflagos.io"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <p className="text-red text-sm mt-2 ml-2">{errors.email}</p>
            )}

            <TicketInput
              label="Special request?"
              inputType="textarea"
              value={specialRequest}
              onChange={(e) => setSpecialRequest(e.target.value)}
            />
          </div>

          <div className="w-full flex flex-col-reverse md:flex-row justify-between my-[32px] gap-4 ">
            <TicketButton
              buttonText={"Back"}
              buttonStyle={"w-full md:w-[50%] text-border bg-transparent"}
              onClickButtonHandler={handleBack}
            />

            <TicketButton
              buttonText={"Get my free ticket"}
              buttonStyle={"bg- w-full md:w-[50%] bg-gradien text-white "}
              onClickButtonHandler={handleNext}
            />
          </div>
          </>
        }
        />
      </div>
    </div>
  );
};

export default AttendeeDetails;
