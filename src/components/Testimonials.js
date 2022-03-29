import React from "react";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { testimonials } from "../data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="min-h-screen bg-gray-200">
      <div className="container px-5 py-10 mx-auto text-center">
        <h1 className="title-nice title-testimonials">Testimonials</h1>
        <div className="flex flex-wrap m-4 ">
          {testimonials.map((testimonial) => (
            <div className="p-4 md:w-1/2 w-full testimon1-select">
              <div className="h-full bg-midnight bg-opacity-40 p-8 rounded">
                <RiDoubleQuotesL className="block w-8 text-white mb-4 " />
                <p className="leading-relaxed text-white mb-6 ubuntu">
                  {testimonial.quote}
                </p>
                <div className="flex justify-end">
                  <RiDoubleQuotesR className="block w-8 text-white mb-4" />
                </div>

                <div className="inline-flex items-center testimon2-select">
                  <img
                    alt="testimonial"
                    src={testimonial.image}
                    className="w-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium font-daffodil">
                      {testimonial.name}
                    </span>
                    <span className="font-tangerine text-sm uppercase">
                      {testimonial.position}
                    </span>
                    <span className="font-lavender">
                      <a href={testimonial.contactLink} target="_blank">
                        <span className="inline-block text-lg mt-1">
                          {testimonial.contactIcon}
                        </span>
                      </a>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
