import React, { useState } from "react";
import { motion } from "motion/react";

const ContactForm = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "2606c2e9-e703-402a-9f8b-faa410dc043d");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully!");
        event.target.reset();
      } else {
        setResult(`Error: ${data.message}`);
      }
    } catch (error) {
      setResult("Submission failed. Please try again.");
    }
  };

  return (
    <div className="text-stone-50 w-1/4 max-lg:w-1/2 max-md:w-3/4 mx-auto">
      <form className="flex flex-col" onSubmit={onSubmit}>
        {/* Name Field */}
        <div className="flex flex-col mb-4">
          <label htmlFor="nameBox" className="text-2xl mb-1">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            id="nameBox"
            className="text-stone-50 border border-gray-600 bg-gray-800 rounded px-2 py-1"
            required
          />
        </div>

        {/* Email Field */}
        <div className="flex flex-col mb-4">
          <label htmlFor="email" className="text-2xl mb-1">
            Your Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="text-stone-50 border border-gray-600 bg-gray-800 rounded px-2 py-1"
            required
          />
        </div>

        {/* Message Field */}
        <div className="flex flex-col">
          <label htmlFor="messageBox" className="text-2xl mb-1">
            Your Message
          </label>
          <textarea
            name="message"
            id="messageBox"
            className="text-stone-50 border border-gray-600 bg-gray-800 rounded px-2 py-1 h-32"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          className="bg-emerald-400 border-2 border-emerald-600 text-stone-900 w-1/2 mx-auto p-2 rounded mt-4 active:bg-emerald-500 hover:bg-emerald-500"
          type="submit"
        >
          Submit
        </button>
      </form>

      {/* Submission Result Message */}
      {result && <p className="text-center mt-4">{result}</p>}
    </div>
  );
};

export default ContactForm;
