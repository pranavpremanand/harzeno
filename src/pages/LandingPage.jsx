import React, { lazy } from "react";
import webBanner from "../assets/images/web-banner-landing.jpg";
import vid from "../assets/vids/banner.mp4";
import appBanner from "../assets/images/app-banner-landing.jpg";
import SubHeading from "../components/SubHeading";
import {
  aiDevelopmentServices,
  appDevelopmentServices,
  chatbotDevelopmentServices,
  gameDevelopmentServices,
  uiDevelopmentServices,
  webDevelopmentServices,
} from "../constant";
import TrustWorthySection from "../components/TrustWorthySection";
import appDevAboutImg from "../assets/images/landingpage/app-dev-about.jpg";
import webDevAboutImg from "../assets/images/landingpage/web-dev-about.jpg";
import UIUXImg from "../assets/images/landingpage/uiux_service_image.png";
import aiDevelopmentImg from "../assets/images/landingpage/ai_dev_service_image.jpg";
import chatbotDevelopmentImg from "../assets/images/landingpage/ai_chatbot_service_image.jpg";
import gameDevelopmentImg from "../assets/images/landingpage/game_dev_service_image.png";
import ReactPlayer from "react-player";
import { Typewriter } from "react-simple-typewriter";

const LandingHeader = lazy(() =>
  import("../components/landingPages/LandingHeader")
);
const LandingFooter = lazy(() =>
  import("../components/landingPages/LandingFooter")
);
const LeadForm = lazy(() => import("../components/LeadForm"));
const Portfolio = lazy(() => import("../components/Portfolio"));
const ConnectWithUs = lazy(() => import("../components/ConnectWithUs"));
const Testimonials = lazy(() => import("../components/Testimonials"));
const JoinHappyCustomers = lazy(() =>
  import("../components/JoinHappyCustomers")
);
const WhyChooseUs = lazy(() => import("../components/WhyChooseUs"));

const LandingPage = ({ page }) => {
  const isWebLanding = Boolean(page === "web-development");
  const isAppLanding = Boolean(page === "app-development");
  const isAILanding = Boolean(page === "ai-development");
  const isChatbotLanding = Boolean(page === "ai-chatbot-development");
  const isGameLanding = Boolean(page === "game-development");
  const isUIUXLanding = Boolean(page === "ui-ux-design");
  let services;
  if (page === "web-development") {
    // banner = webBanner;
    services = webDevelopmentServices;
  } else if (page === "app-development") {
    // banner = appBanner;
    services = appDevelopmentServices;
  } else if (page === "ai-development") {
    services = aiDevelopmentServices;
  } else if (page === "ai-chatbot-development") {
    services = chatbotDevelopmentServices;
  } else if (page === "game-development") {
    services = gameDevelopmentServices;
  } else {
    services = uiDevelopmentServices;
  }

  return (
    <>
      <LandingHeader />
      <section
        id="banner"
        className="h-screen banner relative text-primary_text"
      >
        <div className="absolute top-0 w-full h-full bg-gradient-to-b from-background via-background/10 to-background">
          {/* <div className="absolute top-0 w-full h-full bg-gradient-to-b from-background/60 via-[#ffffffb5] to-background/60"> */}
          {/* <img
          loading="lazy"
          src={banner}
          sizes="(max-width: 600px) 200px, 
         (max-width: 1200px) 800px, 
         1200px"
          className="w-full h-full absolute -z-10 object-cover object-top"
          alt=""
        /> */}

          <div
            data-aos="fade-up"
            className="wrapper text-center flex flex-col gap-5 justify-center items-center h-full relative z-10"
          >
            <p className="sub-heading">
              Welcome to{" "}
              <span className="text-primary font-semibold block sm:inline">
                Harzeno
              </span>
            </p>
            <h1 className="heading-1 whitespace-pre-line capitalize">
              <Typewriter
                words={[
                  isWebLanding
                    ? "Elevate your business with cutting-edge Website Development"
                    : isAppLanding
                    ? "Innovation-Driven App Development Services"
                    : isAILanding
                    ? "Unlock the Power of AI with Advanced AI Solutions"
                    : isChatbotLanding
                    ? "Enhance Customer Engagement with AI Chatbot Development"
                    : isGameLanding
                    ? "Immersive and High-Performance Game Development Services"
                    : "User-Centered UI/UX Design for Seamless Experiences",
                ]}
                loop={1} // Set to 0 for infinite loop, or use false for one-time animation
                cursor
                cursorStyle="|"
                typeSpeed={50}
                deleteSpeed={30}
                delaySpeed={1000}
              />
            </h1>
            <p className="sub-heading max-w-6xl mx-auto">
              Transform your business with our advanced IT services, enhancing
              efficiency, agility, and growth in today's fast-paced digital
              world.
            </p>
          </div>
        </div>
        <ReactPlayer
          url={vid}
          playing
          muted
          playsinline
          loop
          pip={false}
          width="100%"
          height="100%"
          config={{
            file: {
              attributes: {
                style: {
                  objectFit: "cover",
                },
              },
            },
          }}
        />
      </section>
      <section id="about" className="text-primary_text wrapper pt-[3rem]">
        <div className="grid lg:grid-cols-2 gap-10 mt-7">
          <div data-aos="fade-up" className="hidden lg:block h-full">
            <img
              loading="lazy"
              src={
                isWebLanding
                  ? webDevAboutImg
                  : isAppLanding
                  ? appDevAboutImg
                  : isAILanding
                  ? aiDevelopmentImg
                  : isChatbotLanding
                  ? chatbotDevelopmentImg
                  : isGameLanding
                  ? gameDevelopmentImg
                  : UIUXImg
              }
              className="object-cover h-full rounded-lg"
              alt="about us"
              width="600"
              height="400"
            />
          </div>
          <div
            data-aos="fade-up"
            className="flex h-full items-center lg:items-start flex-col gap-7"
          >
            <div className="flex flex-col items-center lg:items-start gap-5 text-center lg:text-start">
              <SubHeading
                heading={
                  isWebLanding
                    ? "Web Development"
                    : isAppLanding
                    ? "App Development"
                    : isAILanding
                    ? "AI Development"
                    : isChatbotLanding
                    ? "AI Chatbot Development"
                    : isGameLanding
                    ? "Game Development"
                    : "UI/UX Design"
                }
              />
              <div
                data-aos="fade-up"
                className="h-[20em] sm:h-[25rem] lg:hidden mb-4 w-full"
              >
                <img
                  loading="lazy"
                  src={isWebLanding ? webDevAboutImg : appDevAboutImg}
                  className="object-cover h-full rounded-lg w-full"
                  alt="about"
                  width="200"
                  height="200"
                />
              </div>
              <h2 className="heading-2 max-w-[60rem] mx-auto">
                {isWebLanding
                  ? "Innovative Web Development Solutions for Modern Brands"
                  : isAppLanding
                  ? "Your Ideas, Perfectly Engineered into Apps"
                  : isAILanding
                  ? "AI-Driven Innovations for Smarter Businesses"
                  : isChatbotLanding
                  ? "Transform Conversations with AI-Powered Chatbots"
                  : isGameLanding
                  ? "Next-Level Game Development for Ultimate Experiences"
                  : "Crafting Seamless and Engaging UI/UX Designs"}
              </h2>
              <p className="desc">
                {isWebLanding
                  ? "Your website is more than just a digital address—it’s your brand’s online identity. Our websites are designed to captivate, convert, and function flawlessly. From sleek designs to responsive performance, we build websites that not only look good but also deliver exceptional results.\n Your website should be more than just functional—it should leave a lasting impression. We develop fast, responsive, and visually appealing websites designed to reflect your brand and achieve your goals. From e-commerce platforms to custom web applications, we’ve got you covered."
                  : isAppLanding
                  ? "In a world that runs on apps, we create ones that stand out. Whether it’s a native app or a cross-platform solution, we develop applications tailored to your needs. Our apps combine cutting-edge technology with intuitive design to deliver smooth, reliable, and feature-rich experiences.\n Your app should do more than just exist; it should stand out. We create mobile applications that combine sleek designs with powerful functionality, tailored to meet your business objectives. Whether you need a native app for iOS or Android, or a cross-platform solution, we ensure flawless performance and a seamless user experience."
                  : isAILanding
                  ? "AI is revolutionizing industries, and we help businesses harness its full potential. From machine learning solutions to intelligent automation, we design AI-driven applications that enhance efficiency, improve decision-making, and create smarter experiences.\n Our AI solutions empower businesses with predictive analytics, natural language processing, and computer vision. Whether you need AI-powered chatbots, recommendation systems, or automation tools, we bring cutting-edge technology to your business."
                  : isChatbotLanding
                  ? "Chatbots are transforming customer interactions, providing instant support, and enhancing engagement. We build AI-powered chatbots that offer seamless communication and personalized responses.\n Our chatbot solutions integrate with your existing systems, helping you streamline operations and provide round-the-clock assistance. From customer service to sales automation, we design chatbots tailored to your business needs."
                  : isGameLanding
                  ? "Gaming is an art and science, and we master both. Our game development services bring your creative visions to life with immersive storytelling, stunning visuals, and seamless gameplay.\n Whether you need a casual mobile game, a high-end console experience, or an AR/VR solution, our expert developers craft engaging games that captivate players worldwide."
                  : "Design is more than aesthetics—it’s about creating seamless and intuitive experiences. We specialize in UI/UX design that enhances usability and engages users at every touchpoint.\n From user research and wireframing to prototyping and final design, our approach ensures visually appealing and user-friendly interfaces. Whether you need a mobile app UI or a complete website redesign, we craft designs that make an impact."}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        id="services"
        className="wrapper py-[5rem] flex flex-col gap-5 items-center"
      >
        <SubHeading
          heading={
            isWebLanding
              ? "Web Development Services"
              : isAppLanding
              ? "App Development Services"
              : isAILanding
              ? "AI Development Services"
              : isChatbotLanding
              ? "AI Chatbot Development Services"
              : isGameLanding
              ? "Game Development Services"
              : "UI/UX Design Services"
          }
        />

        <h2
          data-aos="fade-up"
          className="heading-2 max-w-[60rem] mx-auto text-center"
        >
          {isWebLanding
            ? "Enhancing Brands with Engaging Web Experiences"
            : isAppLanding
            ? "Building Innovative and Scalable App Solutions"
            : isAILanding
            ? "Empowering Businesses with AI-Driven Solutions"
            : isChatbotLanding
            ? "Revolutionizing Conversations with AI Chatbots"
            : isGameLanding
            ? "Creating Immersive and High-Performance Games"
            : "Crafting User-Centric UI/UX Designs for Seamless Interactions"}
        </h2>

        <div className="mt-5 grid sm:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              data-aos="fade-up"
              className="bg-secondary/5 shadow-inner shadow-primary/30 items-center rounded-lg p-5 flex text-center flex-col"
            >
              <service.icon className="w-[5rem] h-[5rem] fill-primary" />
              <h6 className="text-xl font-medium mt-4">{service.title}</h6>
              <p className="desc mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
      {isWebLanding || isAppLanding ? <TrustWorthySection /> : ""}
      {isWebLanding || isAppLanding ? <Portfolio page={page} /> : ""}
      <WhyChooseUs />
      <ConnectWithUs />
      <Testimonials />
      <JoinHappyCustomers />
      <LeadForm />
      <LandingFooter />
    </>
  );
};

export default LandingPage;
