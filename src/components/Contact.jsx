// ContactUs.jsx
import { useState } from "react";
import Button from "./ui/Button";
import EditText from "./ui/EditText";
import { Building, Mail, Phone, Send, Facebook, Linkedin } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
// import { toast } from "react-hot-toast";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleInputChange = (field) => (e) => {
    setFormData((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
    setErrors((prev) => ({ ...prev, [field]: null }));
  };

  // const validateForm = () => {
  //   const newErrors = {};
  //   if (!formData.email) newErrors.email = "Email is required";
  //   if (!formData.subject) newErrors.subject = "Subject is required";
  //   if (!formData.message) newErrors.message = "Message is required";
  //   return newErrors;
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const validationErrors = validateForm();
  //   if (Object.keys(validationErrors).length > 0) {
  //     setErrors(validationErrors);
  //     return;
  //   }

  //   setLoading(true);
  //   const payload = {
  //     access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
  //     subject: formData.subject,
  //     email: formData.email,
  //     message: formData.message,
  //   };

  //   try {
  //     const response = await fetch("https://api.web3forms.com/submit", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(payload),
  //     });

  //     const result = await response.json();
  //     if (result.success) {
  //       toast.success("Message sent successfully!");
  //       setFormData({ email: "", subject: "", message: "" });
  //     } else {
  //       toast.error("Failed to send message. Try again.");
  //     }
  //   } catch {
  //     toast.error("Error submitting form. Please try later.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <>
      <div id="contact-us"></div>
      <section className="w-full px-4 lg:mb-40 mb-8 sm:px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-48">
        <div className="w-full max-w-[1120px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 w-full">
            {/* Left Side */}
            <div className="flex flex-col gap-8 lg:gap-11 w-full lg:flex-1">
              <h2 id="heading" className="max-w-[290px]">
                Contact Us
              </h2>

              <div className="flex flex-col gap-4 px-2">
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

                <div className="flex items-start gap-2 w-full">
                  <Building className="w-6 h-6 mt-1 flex-shrink-0 text-cyan-400" />
                  <span className="text-lg font-azeret font-light leading-6 text-global-1 w-[62%]">
                    L-12/27, Panchasakha Nagar, Bhubaneswar, Odisha, India -
                    751019
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-6 px-4">
                <button className="w-10 h-10 bg-global-1 rounded flex items-center justify-center p-2">
                  <Facebook className="w-full h-full object-contain text-white hover:text-cyan-400" />
                </button>
                <button className="w-10 h-10 bg-global-1 rounded flex items-center justify-center p-2">
                  <Linkedin className="w-full h-full object-contain text-white hover:text-cyan-400" />
                </button>
                <button className="w-10 h-10 bg-global-1 rounded flex items-center justify-center p-2.5">
                  <FaXTwitter className="w-full h-full object-contain text-white hover:text-cyan-400" />
                </button>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex flex-col gap-4 w-full lg:w-[40%] lg:self-end lg:mr-12">
              <form
                action="https://api.web3forms.com/submit"
                method="POST"
                className="flex flex-col gap-4"
                onSubmit={() => setLoading(true)}
              >
                {/* Hidden Web3Forms Access Key */}
                <input
                  type="hidden"
                  name="access_key"
                  value={import.meta.env.VITE_WEB3FORMS_KEY}
                />

                {/* From Email Field */}
                <div className="border-b border-[#b9bbc3] pb-2">
                  <EditText
                    type="email"
                    name="email"
                    placeholder="Your E-Mail"
                    required
                    value={formData.email}
                    onChange={handleInputChange("email")}
                    className="text-lg font-azeret font-light leading-4 text-global-5 placeholder-global-5"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>

                {/* Subject Field */}
                <div className="border-b border-[#b9bbc3] pb-2">
                  <EditText
                    name="subject"
                    placeholder="Subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange("subject")}
                    className="text-lg font-azeret font-light leading-4 text-global-5 placeholder-global-5"
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm">{errors.subject}</p>
                  )}
                </div>

                {/* Message Field */}
                <div className="border-b border-[#b9bbc3] pb-2">
                  <EditText
                    as="textarea"
                    name="message"
                    placeholder="Message"
                    required
                    value={formData.message}
                    onChange={handleInputChange("message")}
                    className="text-lg font-azeret font-light leading-[21px] text-global-5 placeholder-global-5 h-16"
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="flex justify-end">
                  <Button
                    type="submit"
                    className="flex items-center justify-center gap-2 lg:w-32 bg-black text-white hover:text-cyan-400 px-8 py-3 rounded-3xl transition-colors duration-200"
                  >
                    {loading ? (
                      <span className="loader border-white border-t-cyan-400"></span>
                    ) : (
                      <>
                        <span className="text-base font-montserrat font-semibold leading-5">
                          Send
                        </span>
                        <Send className="w-5 h-8" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
