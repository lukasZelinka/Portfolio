import React from "react";

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message Sent!"))
      .then(() => clearText())
      .catch((error) => alert(error));

    function clearText() {
      if (name && email && message) {
        setName("");
        setEmail("");
        setMessage("");
      }
    }
  }

  return (
    <section id="contact" className="relative">
      <h1 className="title-nice text-center">About me</h1>
      <div className="container px-5 py-7 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed/v1/search?q=Benovskeho+14&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
          <div className="bg-midnight relative flex flex-wrap py-6 pr-7 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs ">
                ADDRESS
              </h2>
              <p className="mt-1 font-lavender">
                Beňovského 14 <br />
                841 01 Bratislava
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="font-daffodil leading-relaxed">
                lukas.zelinka@email.com
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className=" font-tangerine leading-relaxed">0944 351 096</p>
            </div>
          </div>
        </div>
        <form
          netlify
          name="contact"
          onSubmit={handleSubmit}
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full  mt-8 md:mt-0"
        >
          <button
            id="cv-btn"
            type="button"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none  rounded text-lg mb-4 ubuntu"
          >
            <a href="./cv.pdf" target="_blank">
              Download CV
            </a>
          </button>

          <p className="text-xl text-center leading-relaxed mb-2 mt-3 sm:mt-10 font-twilight">
            I’m eager to receive your feedback.
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm font-twilight">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-midnight rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm font-twilight">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-midnight rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm font-twilight "
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-midnight rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            id="submit-btn"
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none  rounded text-lg ubuntu"
          >
            Submit
          </button>
        </form>
      </div>
      <footer className="bg-gray-800 h-14 text-white font-bold text-center  ubuntu">
        <p
          className="pt-3
         text-lg"
        >
          <span className="font-semibold">&copy;</span>
          <span className="font-lavender"> Lukáš </span>
          <span className="font-daffodil"> Zelinka </span>
          <span className="font-tangerine"> 2021 </span>
        </p>
      </footer>
    </section>
  );
}
