import { FaPlay } from "react-icons/fa";
import { features } from "@/constants";

const Features = () => {
  return (
    <section className="features-section" id="features">
      <div className="features-container">
        {/* Header */}
        <div className="features-header">
          <h2 className="features-title">Features</h2>
          <h4 className="features-subtitle">
            <span>Most calendars are designed for teams.</span>
            <span className="hidden sm:inline">
              {" "}
              Slate is designed for freelancers
            </span>
          </h4>
        </div>

        {/* Desktop Layout */}
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <img
                src={feature.icon}
                alt={feature.title}
                className="feature-icon"
              />
              <h3 className="feature-title">
                {feature.title}
                {feature.subtitle && (
                  <>
                    <br />
                    {feature.subtitle}
                  </>
                )}
              </h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Mobile/Tablet Layout */}
        <div className="features-mobile">
          {/* Video Section */}
          <div className="feature-video-mobile">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80&auto=format&fit=crop"
              alt="Video thumbnail"
              className="feature-video-img"
            />
            <button className="feature-video-btn">
              <div className="feature-play-button feature-play-button-sm">
                <FaPlay className="w-10 h-10 text-white fill-white ml-2" />
              </div>
            </button>
          </div>

          {/* Features */}
          {features.map((feature, index) => (
            <div key={index} className="feature-card-mobile">
              <img
                src={feature.icon}
                alt={feature.title}
                className="feature-icon"
              />
              <h3 className="feature-title-mobile">
                {feature.title}
                {feature.subtitle && (
                  <>
                    <br />
                    {feature.subtitle}
                  </>
                )}
              </h3>
              <p className="feature-description-mobile">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Video Section Desktop */}
        <div className="feature-video-desktop">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80&auto=format&fit=crop"
            alt="Video thumbnail"
            className="feature-video-img"
          />
          <button className="feature-video-btn">
            <div className="feature-play-button feature-play-button-lg">
              <FaPlay className="w-14 h-14 text-white fill-white ml-2" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
