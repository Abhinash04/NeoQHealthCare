import React, { useState } from "react";
import Button from "./ui/Button";
import EditText from "./ui/EditText";
import { Building, Mail, Phone, Send, Facebook, Linkedin } from "lucide-react";
import { FaXTwitter } from 'react-icons/fa6';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (field) => (e) => {
    setFormData((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ email: "", subject: "", message: "" });
  };

  return (
    <section
      id="contact-us"
      className="w-full px-4 lg:mb-40 mb-8 sm:px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-48"
    >
      <div className="w-full max-w-[1122px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 w-full">
          {/* Left Side - Contact Info */}
          <div className="flex flex-col gap-8 lg:gap-11 w-full lg:flex-1">
            <h2 id="heading">
              Contact Us
            </h2>

            <div className="flex flex-col gap-4 px-2">
              {/* Email and Phone Row */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 w-full">
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <Mail className="w-6 h-6 text-cyan-400" />
                  <span className="text-lg font-azeret font-light leading-[21px] text-global-1">
                    Info@neoq.in
                  </span>
                </div>
                <div className="flex items-center gap-2 w-full sm:flex-1 sm:px-11">
                  <Phone className="w-6 h-6 text-cyan-400" />
                  <span className="text-lg font-azeret font-light leading-[21px] text-global-1">
                    +91-8908807028
                  </span>
                </div>
              </div>

              {/* Address Row */}
              <div className="flex items-start gap-2 w-full">
                <Building className="w-6 h-6 mt-1 flex-shrink-0 text-cyan-400" />
                <span className="text-lg font-azeret font-light leading-6 text-global-1 w-[62%]">
                  L-12/27, Panchasakha Nagar, Bhubaneswar, Odisha, India -
                  751019
                </span>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-6 px-4">
              <button className="w-10 h-10 bg-global-1 rounded flex items-center justify-center p-2">
                <Facebook className="w-full h-full object-contain text-white" />
              </button>
              <button className="w-10 h-10 bg-global-1 rounded flex items-center justify-center p-2">
                <Linkedin className="w-full h-full object-contain text-white" />
              </button>
              <button className="w-10 h-10 bg-global-1 rounded flex items-center justify-center p-2.5">
                <FaXTwitter className="w-full h-full object-contain text-white" />
              </button>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="flex flex-col gap-8 w-full lg:w-[40%] lg:self-end">
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              {/* Email Field */}
              <div className="border-b border-[#b9bbc3] pb-2">
                <EditText
                  type="email"
                  placeholder="Your E-Mail"
                  value={formData.email}
                  onChange={handleInputChange("email")}
                  className="text-lg font-azeret font-light leading-[21px] text-global-5 placeholder-global-5"
                />
              </div>

              {/* Subject Field */}
              <div className="border-b border-[#b9bbc3] pb-2">
                <EditText
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange("subject")}
                  className="text-lg font-azeret font-light leading-[21px] text-global-5 placeholder-global-5"
                />
              </div>

              <div className="border-b border-[#b9bbc3] pb-2">
                <EditText
                  type="text"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleInputChange("message")}
                  className="text-lg font-azeret font-light leading-[21px] text-global-5 placeholder-global-5"
                />
              </div>

              {/* Send Button */}
              <div className="flex justify-end">
                <Button
                  type="submit"
                  className="flex items-center justify-center gap-2 lg:w-32 bg-global-1 text-global-6 px-8 py-3 rounded-3xl hover:bg-global-2 transition-colors duration-200"
                >
                  <span className="text-base font-montserrat font-semibold leading-5">
                    Send
                  </span>
                  <Send className="w-5 h-5" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
