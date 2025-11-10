import { FiMapPin } from "react-icons/fi";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import SocialLinks from "./SocialLinks";

const Contact = () => {
  const contactInfo = [
    {
      icon: FiMapPin,
      content:
        "6386 Spring St undefined Anchorage,\nGeorgia 12473 United States",
    },
    { icon: FaPhoneAlt, content: "(843) 555-0130" },
    { icon: IoMail, content: "willie.jennings@example.com" },
  ];

  const ContactForm = ({ isMobile = false }: { isMobile?: boolean }) => (
    <div className={`contact-form ${isMobile ? "contact-form-mobile" : ""}`}>
      <h3
        className={`contact-form-title ${
          isMobile ? "contact-form-title-mobile" : ""
        }`}
      >
        Contact Us
      </h3>
      <form className="contact-form-fields">
        <Input type="text" placeholder="Your Name" className="contact-input" />
        <Input
          type="email"
          placeholder="Your Email"
          className="contact-input"
        />
        <Textarea
          placeholder="Your Message"
          rows={isMobile ? 6 : 8}
          className="contact-textarea"
        />
        <Button
          type="submit"
          className={`px-10 py-4 bg-[#2091F9] text-white font-medium rounded-full hover:bg-blue-600 transition-colors shadow-md h-auto ${
            isMobile ? "contact-submit-mobile" : ""
          }`}
        >
          Send
        </Button>
      </form>
    </div>
  );

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        {/* Header */}
        <div className="contact-header">
          <h2 className="contact-title">Contact Us</h2>
          <h4 className="contact-subtitle">
            <span>Most calendars are designed for teams.</span>
            <span className="hidden sm:inline">
              {" "}
              Slate is designed for freelancers
            </span>
          </h4>
        </div>

        {/* Mobile Layout */}
        <div className="contact-mobile">
          <SocialLinks className="mb-8" />

          {/* Contact Info - Mobile */}
          <div className="contact-info-mobile">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div key={index} className="contact-info-item-mobile">
                  <Icon className="contact-info-icon" />
                  <p className="contact-info-text-mobile">{info.content}</p>
                </div>
              );
            })}
          </div>

          <ContactForm isMobile />
        </div>

        {/* Desktop Layout */}
        <div className="contact-desktop">
          <ContactForm />

          <div className="contact-desktop-content">
            {/* Contact Information */}
            <div className="contact-info-desktop">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="contact-info-item-desktop">
                    <div className="contact-info-icon-wrapper">
                      <Icon className="contact-info-icon" />
                    </div>
                    <p className="contact-info-text-desktop">{info.content}</p>
                  </div>
                );
              })}
            </div>

            {/* Map */}
            <div className="contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0977739814935!2d-122.41941708468186!3d37.77492977975903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sTwitter%20HQ!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
              />
            </div>

            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
