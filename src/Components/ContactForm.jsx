import React from "react";

const ContactForm = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "2606c2e9-e703-402a-9f8b-faa410dc043d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className=" text-stone-50 w-1/4 mx-auto">
      <form className="flex flex-col" onSubmit={onSubmit}>
        <div className="flex flex-col mb-4">
          <label htmlFor="namebox">Your Name</label>
          <input
            type="text"
            name="name"
            id="nameBox"
            className="text-stone-50 border-2 border-stone-50 rounded"
            required
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="text-stone-50 border-2 border-stone-50 rounded"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="message-box">Your Message</label>
          <textarea
            name="message"
            id="message-box"
            className="text-stone-50 border-2 border-stone-50	rounded h-30"
            required
          ></textarea>
        </div>

        <button
          className="bg-stone-50 text-stone-900 w-1/2 mx-auto p-2 rounded"
          type="submit"
        >
          Submit Form
        </button>
      </form>
      <span>{result}</span>
    </div>
  );
};

export default ContactForm;
