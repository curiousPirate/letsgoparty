import React, { useState } from "react";
import emailjs from "emailjs-com";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setSubmitting(true);
  try {
    // your form submission logic here
    setShowSuccessMessage(true);
  } catch (error) {
    console.error(error);
  } finally {
    setSubmitting(false);
  }

  // Check for empty fields
  if (!formData.name || !formData.email || !formData.message) {
    alert("Please fill in all fields.");
    return;
  }

  // Send email using EmailJS
  const serviceID = "service_cibo1ek";
  const templateID = "template_gwkv6pb";
  const userID = "RrKeOKOTJdH1gBlTs";

  setSubmitting(true);
  emailjs.send(serviceID, templateID, formData, userID).then(
    (response) => {
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setSubmitting(false);
    },
    (error) => {
      alert("An error occurred. Please try again later.");
      setSubmitting(false);
      setShowSuccessMessage(true);
    }
  );
};

  return (
    <div className="flex flex-col items-center justify-center">
      <h2
        className="text-3xl font-bold mb-8 text-white my-6 underline
        underline-offset-8"
        id="contact-us"
      >
        EVENT QUERIES
      </h2>
      <form onSubmit={handleSubmit} className="w-10/12 max-w-md">
        <div className="mb-4">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            type="text"
            placeholder="Your Name"
            className="shadow border rounded-2xl w-full py-2 px-3 text-black leading-tight caret-pink-500"
          />
        </div>
        <div className="mb-4">
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="Your Email"
            className="shadow rounded-2xl w-full py-2 px-3 text-black leading-tight caret-pink-500"
          />
        </div>
        <div className="mb-4">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message to Us.."
            cols="22"
            rows="7"
            className="shadow rounded-2xl w-full py-2 px-3 text-black leading-tight caret-pink-500"
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={submitting}
            className="bg-cyan-900 outline hover:bg-cyan-950 hover:text-white text-white font-bold py-2 px-4 rounded-3xl focus:outline-none focus:shadow-outline flex"
          >
            {submitting ? (
              <svg
                className="animate-spin h-5 w-5 text-white mr-3"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647zM12 20a8 8 0 008-8h-4a4 4 0 01-8 0H0a8 8 0 008 8zm0-18a7.963 7.963 0 017.938 7H12V2z"
                ></path>
              </svg>
            ) : (
              <>
                {showSuccessMessage ? (
                  <svg
                    className="animate-tick w-6 h-6 text-green-600 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 52 52"
                  >
                    <circle
                      className="tick-circle"
                      cx="26"
                      cy="26"
                      r="25"
                      fill="none"
                    />
                    <path
                      className="tick-line"
                      fill="none"
                      stroke="#3bde3b"
                      strokeWidth="6"
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      d="M14 27l11 11 17-17"
                    />
                  </svg>
                ) : null}
                Submit Message
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactUs;
