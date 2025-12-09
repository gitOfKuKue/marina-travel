"use client";

import Container from "@/src/components/common-components/Container";
import useNotification from "@/src/hook/useNotification";
import React, { useState } from "react";

const ContactPage = () => {
  const { setAlertStatus, setAlertText, setIsAlert } = useNotification();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      setAlertText("Please fill in all fields!");
      setAlertStatus(400);
      setIsAlert(true);
      return;
    }
    setAlertText("Message sent successfully!");
    setAlertStatus(200);
    setIsAlert(true);
    console.log(formData);
    console.log("Done");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="py-10 md:py-20 min-h-screen">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16 px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary mb-6 drop-shadow-sm">
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl text-secondary-font font-medium leading-relaxed">
            Have questions about your next adventure? We're here to help you
            plan the perfect trip.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Contact Info */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 dark:bg-slate-800 dark:border-slate-700 h-full">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-8">
              Contact Information
            </h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-1">
                    Visit Us
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    123 Marina Blvd, <br />
                    Sunshine City, SC 90210
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-1">
                    Email Us
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    contact@marina-travel.com
                  </p>
                  <p className="text-slate-600 dark:text-slate-300">
                    support@marina-travel.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-1">
                    Call Us
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    +1 (555) 123-4567
                  </p>
                  <p className="text-slate-600 dark:text-slate-300">
                    Mon-Fri, 9am - 6pm EST
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-slate-100 dark:bg-slate-800 dark:border-slate-700">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-6">
              Send us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-slate-900 dark:text-white"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-slate-50 dark:bg-slate-900 dark:border-slate-600 text-slate-900 dark:text-white"
                    placeholder="Your Name"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-slate-900 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-slate-50 dark:bg-slate-900 dark:border-slate-600 text-slate-900 dark:text-white"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium text-slate-900 dark:text-white"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-slate-50 dark:bg-slate-900 dark:border-slate-600 text-slate-900 dark:text-white"
                  placeholder="How can we help?"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-slate-900 dark:text-white"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-slate-50 dark:bg-slate-900 dark:border-slate-600 text-slate-900 dark:text-white resize-none"
                  placeholder="Tell us about your travel plans..."
                />
              </div>

              <button
                type="submit"
                className="w-full h-10 rounded-(--standard-radius) bg-primary text-white cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactPage;
