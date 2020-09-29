import React, { useState } from "react";
import emailjs from "emailjs-com";

const initialMessage = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function Contact() {
  const [message, setMessage] = useState(initialMessage);

  const handleChange = (e) => {
    setMessage({
      ...message,
      [e.target.name]: e.target.value,
    });
  };

  const submitMessage = (e) => {
    e.preventDefault();
    // alert for incomplete form
    if (validateForm(message) === "incomplete form error") {
      alert("Please include a name, email, and message before submitting.");
      //   alert for incorrect email
    } else if (validateForm(message) === "email format error") {
      alert("Please use a valid email. (Example: email@example.com)");
      //   send message attempt/messages
    } else if (validateForm(message)) {
      emailjs
        .send(
          "service_xfiv7lg",
          "template_jtp5kvf",
          message,
          "user_438guekYdXIfwArsFuL1g"
        )
        .then(
          // if send is successful
          (res) => {
            console.log("Success!", res.status, res.text);
            setMessage(initialMessage);
            alert(
              "Your message has been recieved! I will be responding to you shortly."
            );
          },
          // if send is unsuccessful
          (error) => {
            console.log(error);
            alert(
              "Oops. Something went wrong when trying to send your message. Please try again or feel free to reach me on LinkedIn or Twitter."
            );
          }
        );
    }
  };

  const validateForm = (formData) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // checks name, email, and message for empty strings
    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.message === ""
    ) {
      return "incomplete form error";
      //   checks for email format
    } else if (!re.test(String(formData.email).toLowerCase())) {
      return "email format error";
      //   if form is complete
    } else {
      return true;
    }
  };

  return (
    <section className="contact-container" id="contact">
      <h2>Contact Me</h2>
      {/* form */}
      <form>
        <div className="top-inputs">
          {/* name */}
          <label>
            <input
              id="name"
              name="name"
              type="text"
              value={message.name}
              onChange={handleChange}
              placeholder="Name"
            ></input>
          </label>
          {/* email */}
          <label>
            <input
              id="email"
              name="email"
              type="text"
              value={message.email}
              onChange={handleChange}
              placeholder="Email"
            ></input>
          </label>
        </div>
        {/* subject */}
        <label>
          <input
            id="subject"
            name="subject"
            type="text"
            value={message.subject}
            onChange={handleChange}
            placeholder="Subject"
          ></input>
        </label>
        {/* message */}
        <label>
          <textarea
            id="message"
            name="message"
            value={message.message}
            onChange={handleChange}
            placeholder="Message"
            rows="4"
          ></textarea>
        </label>
      </form>
      {/* buttons */}
      <div className="button-wrapper">
        <button className="button" onClick={submitMessage}>
          Submit
        </button>
        <button
          className="button"
          onClick={() => setMessage(initialMessage)}
          type="button"
        >
          Clear
        </button>
      </div>
      {/* icons */}
      <div className="icon-wrapper">
        <a
          href="https://www.linkedin.com/in/amos-rose/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/AmMiRo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github-square"></i>
        </a>
        <a
          href="https://twitter.com/amosmrose"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter-square"></i>
        </a>
        <a
          href="mailto:amos.m.rose@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-envelope-square"></i>
        </a>
      </div>
    </section>
  );
}

export default Contact;
