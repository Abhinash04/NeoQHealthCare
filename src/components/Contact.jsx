// ContactUs.jsx
import { useState } from "react";
import Button from "./ui/Button";
import EditText from "./ui/EditText";
import { Building, Mail, Phone, Send, Facebook, Linkedin } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { toast } from "react-hot-toast";

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
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: null }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = "Subject must be at least 3 characters long";
    }
    
    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error("Please fix the errors before submitting");
      return;
    }

    const accessKey = import.meta.env.WEB3FORMS;
    if (!accessKey) {
      toast.error("Configuration error. Please contact support.");
      console.error("Web3Forms access key not found in environment variables");
      return;
    }

    setLoading(true);
    
    const payload = {
      access_key: accessKey,
      subject: `Contact Form: ${formData.subject.trim()}`,
      email: formData.email.trim(),
      message: formData.message.trim(),
      from_name: formData.email.trim(),
      to_email: "Info@neoq.in",
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      
      if (response.ok && result.success) {
        toast.success("Thank you! Your message has been sent successfully.");
        setFormData({ email: "", subject: "", message: "" });
        setErrors({});
        e.target.reset();
      } else {
        const errorMessage = result.message || "Failed to send message. Please try again.";
        toast.error(errorMessage);
        console.error("Web3Forms error:", result);
      }
    } catch (error) {
      toast.error("Network error. Please check your connection and try again.");
      console.error("Network error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div id="contact-us"></div>
      <section className="w-full px-4 lg:mb-40 mb-8 sm:px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-48 max-[500px]:mb-28">
        <div className="w-full max-w-[1120px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-20 lg:gap-16 w-full">
            {/* Left Side */}
            <div className="flex flex-col gap-8 lg:gap-11 w-full lg:flex-1">
              <h2 id="heading" className="max-w-[290px]">
                Contact Us
              </h2>

              <div className="flex flex-col gap-4 px-2 max-[500px]:px-0">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 w-full">
                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <Mail className="w-6 h-6 text-cyan-400 max-[500px]:w-5 max-[500px]:h-5" />
                    <span className="text-lg font-azeret font-light leading-[21px] text-global-1 max-[500px]:text-base max-[500px]:leading-5">
                      Info@neoq.in
                    </span>
                  </div>
                  <div className="flex items-center gap-2 w-full sm:flex-1 sm:px-11 max-[500px]:sm:px-0">
                    <Phone className="w-6 h-6 text-cyan-400 max-[500px]:w-5 max-[500px]:h-5" />
                    <span className="text-lg font-azeret font-light leading-[21px] text-global-1 max-[500px]:text-base max-[500px]:leading-5">
                      +91-8908807028
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2 w-full">
                  <Building className="w-6 h-6 mt-1 flex-shrink-0 text-cyan-400 max-[500px]:w-5 max-[500px]:h-5" />
                  <span className="text-lg font-azeret font-light leading-6 text-global-1 w-[62%] max-[500px]:text-base max-[500px]:leading-5 max-[500px]:w-full">
                    L-12/27, Panchasakha Nagar, Bhubaneswar, Odisha, India -
                    751019
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-6 px-4 max-[500px]:px-0 max-[500px]:gap-4">
                <button 
                  className="w-10 h-10 bg-global-1 rounded flex items-center justify-center p-2 max-[500px]:w-8 max-[500px]:h-8 max-[500px]:p-1.5 focus:outline-none hover:bg-cyan-400 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-full h-full object-contain text-white" />
                </button>
                <button 
                  className="w-10 h-10 bg-global-1 rounded flex items-center justify-center p-2 max-[500px]:w-8 max-[500px]:h-8 max-[500px]:p-1.5 focus:outline-none hover:bg-cyan-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-full h-full object-contain text-white" />
                </button>
                <button 
                  className="w-10 h-10 bg-global-1 rounded flex items-center justify-center p-2.5 max-[500px]:w-8 max-[500px]:h-8 max-[500px]:p-2 focus:outline-none hover:bg-cyan-400 transition-colors"
                  aria-label="Twitter"
                >
                  <FaXTwitter className="w-full h-full object-contain text-white" />
                </button>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="flex flex-col gap-4 w-full lg:w-[40%] lg:self-end lg:mr-12 lg:mt-6 max-[500px]:lg:mr-0">
              <form
                className="flex flex-col gap-4 max-[500px]:gap-3"
                onSubmit={handleSubmit}
                noValidate
              >
                {/* Email Field */}
                <div className="border-b border-[#b9bbc3] pb-2 max-[500px]:pb-1.5">
                  <EditText
                    type="email"
                    name="email"
                    placeholder="Your E-Mail"
                    value={formData.email}
                    onChange={handleInputChange("email")}
                    className="text-lg font-azeret font-light leading-4 text-global-5 placeholder-global-5 max-[500px]:text-base max-[500px]:leading-4"
                    disabled={loading}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-red-500 text-sm max-[500px]:text-xs mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Subject Field */}
                <div className="border-b border-[#b9bbc3] pb-2 max-[500px]:pb-1.5">
                  <EditText
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange("subject")}
                    className="text-lg font-azeret font-light leading-4 text-global-5 placeholder-global-5 max-[500px]:text-base max-[500px]:leading-4"
                    disabled={loading}
                    aria-describedby={errors.subject ? "subject-error" : undefined}
                  />
                  {errors.subject && (
                    <p id="subject-error" className="text-red-500 text-sm max-[500px]:text-xs mt-1">
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div className="border-b border-[#b9bbc3] pb-2 max-[500px]:pb-1.5">
                  <EditText
                    as="textarea"
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleInputChange("message")}
                    className="text-lg font-azeret font-light leading-[21px] text-global-5 placeholder-global-5 h-16 max-[500px]:text-base max-[500px]:leading-5 max-[500px]:h-12 resize-none"
                    disabled={loading}
                    aria-describedby={errors.message ? "message-error" : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="text-red-500 text-sm max-[500px]:text-xs mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="flex justify-end">
                  <Button
                    type="submit"
                    disabled={loading}
                    className="flex items-center justify-center gap-2 lg:w-32 bg-black text-white hover:text-cyan-400 disabled:opacity-50 disabled:cursor-not-allowed px-8 py-3 rounded-3xl transition-colors duration-200 max-[500px]:px-6 max-[500px]:py-2.5 max-[500px]:lg:w-28"
                  >
                    {loading ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-cyan-400 rounded-full animate-spin"></div>
                        <span className="text-base font-montserrat font-semibold leading-5 max-[500px]:text-sm max-[500px]:leading-4">
                          Sending...
                        </span>
                      </div>
                    ) : (
                      <>
                        <span className="text-base font-montserrat font-semibold leading-5 max-[500px]:text-sm max-[500px]:leading-4">
                          Send
                        </span>
                        <Send className="w-5 h-8 max-[500px]:w-4 max-[500px]:h-6" />
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