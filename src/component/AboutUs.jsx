import React from "react";
import alexaTeam from '../assets/alexaTeam.png'; 

const AboutUs = () => {
  return (
    <section className="bg-black-100 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2
          className="text-4xl font-bold"
          style={{
            backgroundImage: "linear-gradient(90deg, #32CD32, #20B2AA)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            display: "block",
          }}
        >
          About Us
        </h2>
      </div>

      <div className="max-w-12xl ml-10 mr-10 flex items-center justify-between">
        <div className="flex-1">
          <p className="text-lg mb-20 text-center ;">
            Welcome to Alexa Developers SRM, a thriving, student-run technical
            organization at SRMIST that brings technology and community together.
            We create an open atmosphere for tech enthusiasts to explore, learn,
            and grow, with a focus on voice-controlled technologies, application
            development, and UI/UX design via hands-on events and workshops. Our
            club is a hotbed of collaboration and innovation, where members can
            experiment, share expertise, and make a real difference. Whether
            you're a newcomer to technology or a seasoned professional, our wide
            range of workshops, hackathons, and contests provide ongoing learning
            and practical skill development. Together we build a community, where
            creativity knows no bounds and collaboration is key.
          </p>
        </div>

        
        <div className="flex-1 text-center">
          <img
            src={alexaTeam}
            alt="Team"
            className="max-w-full h-auto rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
