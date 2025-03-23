import techmiyaLogo from '../images/techmiya_logo.jpeg'; 



import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/sponsors.css";
import { swarmBackground } from "threejs-toys";

function IndividualSponsors() {
  useEffect(() => {
    // Remove any existing effect div before adding a new one
    const existingEffect = document.getElementById("effect");
    if (existingEffect) existingEffect.remove();
  
    // Create swarm background effect
    const effect = document.createElement("div");
    effect.id = "effect";
    document.body.prepend(effect); // Move outside of #sponsors-main
  
    effect.style.position = "fixed"; // Cover entire screen
    effect.style.top = "0";
    effect.style.left = "0";
    effect.style.width = "100vw";
    effect.style.height = "100vh";
    effect.style.zIndex = "-1";
  
    // Initialize swarm effect
    const bg = swarmBackground({
      el: effect,
      eventsEl: effect,
      gpgpuSize: 28,
      color: [0x00a69e, 0x00a69e],
      geometry: "default",
    });
  
    bg.setColors([0x00a69e, 0x00ff51]);
    bg.three.camera.position.set(1, 0, 80);
  
    const handleResize = () => {
      if (bg && bg.three && bg.three.renderer) {
        bg.three.renderer.setSize(window.innerWidth, window.innerHeight);
      }
    };
  
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      effect.remove();
    };
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      { breakpoint: 640, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div id="sponsors-main" className="relative flex justify-center items-center py-16">
      <div className="sponsors-wrapper w-2/3 lg:w-1/2 bg-[rgba(1,40,1,0.95)] p-8 rounded-2xl border border-[rgba(255,255,255,0.08)] shadow-md hover:shadow-lg">
        <h2 className="text-center text-5xl font-bold text-white mb-8">Our Proud Sponsors</h2>

        {/* Inner Content */}
        <div className="sponsors-inner bg-[rgba(1,40,1,0.95)] p-6 rounded-lg border-[rgba(255,255,255,0.08)] shadow-md hover:shadow-lg">
          <Slider {...settings}>
            {data.map((d, index) => (
              <div key={index} className="bg-[rgba(1,40,1,0.95)] h-[450px] rounded-xl sponsors">
                <div className="h-48 flex justify-center items-center rounded-t-xl bgimg">
                  <img src={d.img} alt={d.name} className="sponsors-img" />
                </div>
                <div className="flex flex-col items-center justify-center gap-4 p-4 mark">
                  <p className="text-2xl font-bold text-white">{d.name}</p> {/* Bolded company name */}
                  <p className="text-white text-lg mt-4">{d.description}</p>
                  <div className="flex gap-6 mt-6">
                    <a
                      href={d.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-800 text-black text-lg px-6 py-3 rounded-full hover:bg-green-700 transition-all duration-300"
                    >
                      Website
                    </a>
                    <a
                      href={d.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-800 text-black text-lg px-6 py-3 rounded-full hover:bg-green-700 transition-all duration-300"
                    >
                      LinkedIn
                    </a>
                    {/* Added Instagram Button */}
                    <a
                      href={d.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-800 text-black text-lg px-6 py-3 rounded-full hover:bg-green-700 transition-all duration-300"
                    >
                      Instagram
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

const data = [
  {
    name: "Techmiya Solutions",
    img :techmiyaLogo,
    description: "Techmiya Solutions is a cutting-edge Research and Development company specializing in the latest advancements in Machine Learning, Artificial Intelligence, Full Stack Development, and Android Development. Our focus is on driving innovation through research and implementation of emerging technologies, ensuring impactful solutions across industries.",
    website: "https://techmiyasolutions.com",
    linkedin: "https://www.linkedin.com/company/techmiyaprojects/posts/?feedView=all",
    instagram: "https://www.instagram.com/techmiyaprojects"
  },
];

export default IndividualSponsors;
