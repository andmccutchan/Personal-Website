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
    <div className="border border-stone-50 text-stone-50">
      <form className="flex flex-col" onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          id="nameBox"
          className="text-stone-50 border-2 border-stone-50 rounded"
          required
        />
        <input
          type="email"
          name="email"
          className="text-stone-50 border-2 border-stone-50 rounded"
          required
        />
        <textarea
          name="message"
          className="text-stone-50 border-2 border-stone-50	rounded"
          required
        ></textarea>

        <button type="submit">Submit Form</button>
      </form>
      <span>{result}</span>
    </div>
  );
};

export default ContactForm;
