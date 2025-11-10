import { FaTwitter, FaLinkedin, FaFacebookSquare } from "react-icons/fa";

interface SocialLinksProps {
  className?: string;
  color?: "blue" | "white";
}

const SocialLinks = ({ className = "", color = "blue" }: SocialLinksProps) => {
  const socialMedia = [
    { icon: FaTwitter, href: "#", hoverColor: "hover:text-blue-500" },
    { icon: FaFacebookSquare, href: "#", hoverColor: "hover:text-blue-700" },
    { icon: FaLinkedin, href: "#", hoverColor: "hover:text-blue-800" },
  ];

  const baseColorClass = color === "white" ? "text-white" : "text-[#2091F9]";

  return (
    <div className={`flex justify-center gap-6 ${className}`}>
      {socialMedia.map((social, index) => {
        const Icon = social.icon;
        const hoverClass =
          color === "white" ? "hover:text-gray-400" : social.hoverColor;
        return (
          <a
            key={index}
            href={social.href}
            className={`${baseColorClass} ${hoverClass} transition-colors`}
          >
            <Icon className="w-8 h-8" />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
