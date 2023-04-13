import React, { useState } from "react";
import emailjs from "emailjs-com";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cibo1ek",
        "template_gwkv6pb",
        e.target,
        "RrKeOKOTJdH1gBlTs"
      )
      .then(
        (result) => {
          console.log(result.text);
          setEmail("");
          setName("");
          setMessage("");
          alert("You are AWESOME! Great events on your way!");
        },
        (error) => {
          console.log(error.text);
          alert("Its's Strange, can you try again?");
        }
      );
  };


  return (
    <div
      className="w-full p-6 flex flex-col xl:items-stretch justify-between xl:flex-row"
      id="newsletter"
    >
      <div className="xl:w-1/2 md:mb-14 xl:mb-0 relative h-auto flex items-center justify-center">
        <img
          src="https://source.unsplash.com/1600x900/?party"
          className="bucketList"
          alt="party-img"
        />
      </div>
      <div className="w-full xl:w-1/2 xl:pl-40 xl:py-28">
        <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold leading-10 text-slate-950 mb-4 text-center xl:text-left md:mt-0 mt-4">
          Today is your chance!
        </h1>
        <p className="text-base leading-normal text-slate-950 text-justify xl:text-left pb-5">
          "Don't be a wallflower! Tell us what you really want, and we'll make
          it happen! We want to know all about your favorite party spots,
          artists, and events, so we can keep you updated on the wildest and
          craziest happenings in town. Whether you're a foodie, a music lover,
          or just looking for a good time, we've got you covered. So speak up
          and subscribe to our newsletter today - your weekend adventures are
          waiting!"
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-md">
          <label htmlFor="email" className="text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow bg-gray-100 text-base rounded-xl text-cyan-950 w-full p-5 leading-tight caret-cyan-950"
            placeholder="letsgoparty@xyz.com"
            required
          />
          <label htmlFor="name" className="text-sm font-bold mb-2 mt-4">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="shadow bg-gray-100 text-base rounded-xl text-cyan-950 w-full p-5 leading-tight caret-cyan-950"
            placeholder="Your Name"
            required
          />
          <label htmlFor="message" className="text-sm font-bold mb-2 mt-4">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="shadow bg-gray-100 text-base rounded-xl text-cyan-950 w-full p-5 leading-tight caret-cyan-950"
            placeholder="Let us know your favourite locations, artist and whatever you want to be updated of!"
            rows="5"
            required
          />
          <button
            type="submit"
            className="w-full bg-cyan-950 rounded-xl text-base font-medium leading-none text-white p-5 uppercase mt-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-900"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}

export default Newsletter;
