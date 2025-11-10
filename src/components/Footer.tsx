import { FiMapPin, FiPhone } from "react-icons/fi";
import SocialLinks from "./SocialLinks";
import {
  footerSections,
  mobileFooterSections,
  contactInfo,
} from "../constants";

interface FooterLinksSectionProps {
  title: string;
  links: string[];
  className?: string;
}

const FooterLinksSection = ({
  title,
  links,
  className = "",
}: FooterLinksSectionProps) => (
  <div className={className}>
    <h3 className="footer-section-title">{title}</h3>
    <ul className="footer-links-list">
      {links.map((link, index) => (
        <li key={index}>
          <a href="#" className="footer-link">
            {link}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const ContactSection = ({ className = "" }: { className?: string }) => {
  const getIcon = (iconType: string) => {
    switch (iconType) {
      case "map-pin":
        return FiMapPin;
      case "phone":
        return FiPhone;
      default:
        return FiMapPin;
    }
  };

  return (
    <div className={`footer-contact ${className}`}>
      {contactInfo.map((info, index) => {
        const Icon = getIcon(info.icon);
        return (
          <div key={index} className="footer-contact-item">
            <Icon className="footer-contact-icon" />
            <p className="footer-contact-text">{info.text}</p>
          </div>
        );
      })}
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Mobile Layout */}
        <div className="footer-mobile">
          {/* Mobile Footer Sections */}
          <div className="footer-mobile-sections">
            {[...Array(3)].map((_, index) => (
              <FooterLinksSection
                key={index}
                title={mobileFooterSections[0].title}
                links={mobileFooterSections[0].links}
                className="footer-section-mobile"
              />
            ))}
          </div>

          {/* Contact Info */}
          <ContactSection className="footer-contact-mobile" />

          {/* Social Media */}
          <SocialLinks color="white" />
        </div>

        {/* Desktop Layout */}
        <div className="footer-desktop">
          {/* Left Side - Footer Links */}
          <div className="footer-desktop-links">
            {footerSections.map((section, index) => (
              <FooterLinksSection
                key={index}
                title={section.title}
                links={section.links}
              />
            ))}
          </div>

          {/* Right Side - Contact & Social */}
          <div className="footer-desktop-contact">
            <ContactSection />
            <SocialLinks color="white" className="mt-8" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
