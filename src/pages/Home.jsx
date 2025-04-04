import React from "react";
import bannerImg from "../assets/images/banner.png";
import vid from "../assets/vids/banner.mp4";
import aboutImg from "../assets/images/final3.png";
import { Link } from "react-router-dom";
import SubHeading from "../components/SubHeading";
import { ReactComponent as Icon1 } from "../assets/svgs/services/Web Development.svg";
import { ReactComponent as Icon2 } from "../assets/svgs/services/App Development.svg";
import { ReactComponent as Icon3 } from "../assets/svgs/services/Machine Learning Solutions.svg";
import { ReactComponent as Icon4 } from "../assets/svgs/services/UIUX Design.svg";
import { ReactComponent as Icon5 } from "../assets/svgs/services/Chatbots.svg";
import { ReactComponent as Icon6 } from "../assets/svgs/services/Game Development.svg";
import WorkProcess from "../components/WorkProcess";
import ReactPlayer from "react-player";
import { Typewriter } from "react-simple-typewriter";

const WebsiteHeader = React.lazy(() =>
  import("../components/website/WebsiteHeader")
);
const TrustWorthySection = React.lazy(() =>
  import("../components/TrustWorthySection")
);
const Portfolio = React.lazy(() => import("../components/Portfolio"));
const Testimonials = React.lazy(() => import("../components/Testimonials"));
const JoinHappyCustomers = React.lazy(() =>
  import("../components/JoinHappyCustomers")
);
const WebsiteFooter = React.lazy(() =>
  import("../components/website/WebsiteFooter")
);
const AllServices = React.lazy(() =>
  import("../components/website/AllServices")
);
const OurValue = React.lazy(() => import("../components/website/OurValue"));
const WhyChooseUs = React.lazy(() => import("../components/WhyChooseUs"));
const LeadForm = React.lazy(() => import("../components/LeadForm"));

const Home = () => {
  return (
    <>
      <WebsiteHeader />
      <section className="h-screen banner relative text-primary_text">
        <div className="absolute top-0 w-full h-full bg-gradient-to-b from-[#fdf7ff] via-background/10 to-[#fdf7ff]">
          <div
            data-aos="fade-up"
            className="wrapper text-center flex flex-col gap-4 justify-center items-center h-full relative z-10"
          >
            <h1 className="hidden md:block text-left mx-6 md:text-center md:text-7xl font-bold capitalize ">
              <Typewriter
                words={[
                  "Efficiently Tailored Solutions,\nDelivering Effective Results.",
                ]}
                loop={1} // Set to 0 for infinite loop, or use false for one-time animation
                cursor
                cursorStyle="|"
                typeSpeed={50}
                deleteSpeed={30}
                delaySpeed={1000}
              />
            </h1>
            <h1 className="text-4xl text-left mx-6 md:text-center md:hidden font-bold capitalize ">
              Efficiently <br />
              <span className="text-3xl">Tailored Solutions,</span>
              <br />
              Delivering
              <br />
              <span className="text-3xl"> Effective Results.</span>
            </h1>
            <p className="sub-heading max-w-6xl">
              Empowering our clients through modern IT and AI solutions to
              overcome digital challenges to stay ahead in a competitive market
            </p>
          </div>
        </div>
        {/* <img
          loading="lazy"
          src={bannerImg}
          srcset={`${bannerImg} 400w, 
          ${bannerImg} 800w, 
          ${bannerImg} 1200w`}
          sizes="(max-width: 600px) 200px, 
         (max-width: 1200px) 800px, 
         1200px"
          class="w-full h-full absolute -z-10 object-cover object-top"
          alt=""
        /> */}
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
      <div
        data-aos="fade-up"
        className="md:-mt-[7rem] py-[2rem] relative z-10 max-w-6xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-3 gap-5"
      >
        <div className="bg-primary rounded-lg backdrop-blur-sm text-background p-5">
          <div className="flex items-center gap-3 mb-4">
            <Icon1
              width="50"
              height="50"
              className="w-[4rem] h-[4rem] fill-secondary"
            />
            <p className="text-lg leading-tight font-medium">Web Development</p>
          </div>
          <p className="desc">
            Design and develop responsive, SEO-friendly websites that
            effectively represent your brand and engage your audience.
          </p>
        </div>
        <div className="bg-primary rounded-lg backdrop-blur-sm text-background p-5">
          <div className="flex items-center gap-3 mb-4">
            <Icon2
              width="50"
              height="50"
              className="w-[4rem] h-[4rem] fill-secondary"
            />
            <p className="text-lg leading-tight font-medium">
              Mobile App Development
            </p>
          </div>
          <p className="desc">
            Develop robust, user-friendly mobile apps for iOS and Android
            platforms that meet your business needs.
          </p>
        </div>
        <div className="bg-primary rounded-lg backdrop-blur-sm text-background p-5">
          <div className="flex items-center gap-3 mb-4">
            <Icon3
              width="50"
              height="50"
              className="w-[4rem] h-[4rem] fill-secondary"
            />
            <p className="text-lg leading-tight font-medium">AI Development</p>
          </div>
          <p className="desc">
            Harness the power of AI to innovate and automate processes, driving
            efficiency and intelligent decision-making.
          </p>
        </div>
        <div className="bg-primary rounded-lg backdrop-blur-sm text-background p-5">
          <div className="flex items-center gap-3 mb-4">
            <Icon4
              width="50"
              height="50"
              className="w-[4rem] h-[4rem] fill-secondary"
            />
            <p className="text-lg leading-tight font-medium">UX/UI Design</p>
          </div>
          <p className="desc">
            Create intuitive and visually appealing user interfaces and
            experiences that enhance usability and customer satisfaction.
          </p>
        </div>
        <div className="bg-primary rounded-lg backdrop-blur-sm text-background p-5">
          <div className="flex items-center gap-3 mb-4">
            <Icon5
              width="50"
              height="50"
              className="w-[4rem] h-[4rem] fill-secondary"
            />
            <p className="text-lg leading-tight font-medium">
              AI Chatbots Development
            </p>
          </div>
          <p className="desc">
            We build AI-powered chatbots to automate interactions, enhance
            engagement, and improve customer service. Our solutions streamline
            operations, personalize experiences, and provide valuable insights.
          </p>
        </div>
        <div className="bg-primary rounded-lg backdrop-blur-sm text-background p-5">
          <div className="flex items-center gap-3 mb-4">
            <Icon6
              width="50"
              height="50"
              className="w-[4rem] h-[4rem] fill-secondary"
            />
            <p className="text-lg leading-tight font-medium">
              Game Development
            </p>
          </div>
          <p className="desc">
            We turn your game ideas into reality with expert development across
            mobile, PC, console, and AR/VR. From concept to launch, we create
            immersive, high-quality gaming experiences.
          </p>
        </div>
      </div>
      <section className="">
        <div className="wrapper py-[3rem]">
          <div className="grid lg:grid-cols-2 gap-10 mt-7">
            <div data-aos="fade-up" className="hidden lg:flex flex-col">
              <img
                loading="lazy"
                src={aboutImg}
                width="600"
                height="400"
                className="object-cover rounded-lg w-full object-center"
                alt=""
              />
            </div>
            <div
              data-aos="fade-up"
              className="flex h-full items-start flex-col gap-7"
            >
              <div className="flex flex-col items-start gap-5 text-start">
                {/* <SubHeading heading="About Us" /> */}
                <div
                  data-aos="fade-up"
                  className="h-[20em] sm:h-[25rem] lg:hidden mb-4 w-full"
                >
                  <img
                    loading="lazy"
                    src={aboutImg}
                    width="200"
                    height="200"
                    className="object-cover h-full object-center rounded-lg w-full"
                    alt=""
                  />
                </div>
                <h2 className="heading-2 max-w-[60rem]">
                  Transforming Visions into Reality
                </h2>
                <p className="desc">
                  At <span className="font-medium text-primary">Harzeno</span>
                  , we're dedicated to driving your business forward with
                  innovative software solutions. With a passion for technology
                  and a commitment to excellence, we specialize in delivering
                  tailored software products and services to meet your unique
                  needs. <br /> <br /> Our mission is to revolutionize
                  industries through technology, empowering businesses to thrive
                  in an advanced AI-driven world. <br /> <br /> We believe in
                  the power of creativity. We help to create a strong online
                  presence that showcases your work and tells your story.
                </p>
              </div>
              <div className="w-fit mt-4 justify-start">
                <Link to="/about-us" className="primary-btn">
                  Know More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AllServices />
      <WorkProcess />
      <OurValue />
      <Portfolio />
      <WhyChooseUs />
      <TrustWorthySection />
      <Testimonials />
      <JoinHappyCustomers />
      <LeadForm />
      <WebsiteFooter />
    </>
  );
};

export default Home;
