"use client";
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Footer from "../components/Footer/Footer";
import Link from "next/link";

const Contact = () => {
  return (
    <div>
    <div className="bg-[#F5F5F5] text-[#333] min-h-screen flex flex-col items-center justify-center py-10 mt-5">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-[#2A254B]">Get in Touch</h1>
        <p className="text-lg mt-2 text-gray-600">
          We&apos;d love to hear from you! Contact us for any queries or suggestions.
        </p>
      </div>

      {/* Contact Section */}
      <div className="w-[90%] md:w-[70%] lg:w-[60%] bg-white shadow-lg rounded-lg p-8">
        {/* Contact Form */}
        <form className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Full Name"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#2A254B] focus:border-[#2A254B]"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your Email Address"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#2A254B] focus:border-[#2A254B]"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="Your Message"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#2A254B] focus:border-[#2A254B]"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#2A254B] text-white py-2 px-4 rounded-lg hover:bg-[#372f6e] transition-all duration-200"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Map and Social Section */}
      <div className="mt-16 w-full lg:w-[80%] grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Map */}
        <div className="rounded-lg overflow-hidden shadow-md">
          <iframe
            title="Hyderabad, Pakistan"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.4174078446393!2d68.368987375018!3d25.39211792759788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394c71030c07bb3f%3A0x8d825cb3fc5e37fa!2sHyderabad%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1689101749581!5m2!1sen!2s"
            width="100%"
            height="300"
            style={{ border: "0" }}
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </div>

        {/* Social Media */}
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold text-[#2A254B]">Follow Us</h2>
          <p className="text-gray-600">
            Stay updated with our latest products and trends.
          </p>
          <div className="flex gap-4 text-2xl">
            {/* Social Media Icons */}
            <Link
              href="#"
              className="text-white bg-[#4267B2] p-3 rounded-full hover:opacity-80"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </Link>
            <Link
              href="#"
              className="text-white bg-[#1DA1F2] p-3 rounded-full hover:opacity-80"
              aria-label="Twitter"
            >
              <FaTwitter />
            </Link>
            <Link
              href="#"
              className="text-white bg-[#E4405F] p-3 rounded-full hover:opacity-80"
              aria-label="Instagram"
            >
              <FaInstagram />
            </Link>
            <Link
              href="#"
              className="text-white bg-[#2867B2] p-3 rounded-full hover:opacity-80"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </Link>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
