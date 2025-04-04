import logoImg from "./assets/logo/logo.png";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";

// all services
import { ReactComponent as allServiceIcon1 } from "./assets/svgs/services/Web Development.svg";
import { ReactComponent as allServiceIcon2 } from "./assets/svgs/services/App Development.svg";
import { ReactComponent as allServiceIcon3 } from "./assets/svgs/services/UIUX Design.svg";
import { ReactComponent as allServiceIcon4 } from "./assets/svgs/services/Chatbots.svg";
import { ReactComponent as allServiceIcon5 } from "./assets/svgs/services/Machine Learning Solutions.svg";
import { ReactComponent as allServiceIcon6 } from "./assets/svgs/services/Game Development.svg";

// app development services
import { ReactComponent as appServiceIcon1 } from "./assets/svgs/services/iOS App Development.svg";
import { ReactComponent as appServiceIcon2 } from "./assets/svgs/services/Android.svg";
import { ReactComponent as appServiceIcon3 } from "./assets/svgs/services/Flutter.svg";
import { ReactComponent as appServiceIcon4 } from "./assets/svgs/services/Hybrid App Development.svg";

// web development services
import { ReactComponent as webServiceIcon1 } from "./assets/svgs/services/E-Commerce Development.svg";
import { ReactComponent as webServiceIcon2 } from "./assets/svgs/services/Social Media Websites.svg";
import { ReactComponent as webServiceIcon3 } from "./assets/svgs/services/Web Development.svg";
import { ReactComponent as webServiceIcon4 } from "./assets/svgs/services/UIUX Design.svg";

// Game Development Services
import { ReactComponent as gameServiceIcon1 } from "./assets/svgs/services/gameServiceIcon1.svg";
import { ReactComponent as gameServiceIcon2 } from "./assets/svgs/services/gameServiceIcon2.svg";
import { ReactComponent as gameServiceIcon3 } from "./assets/svgs/services/gameServiceIcon3.svg";
import { ReactComponent as gameServiceIcon4 } from "./assets/svgs/services/gameServiceIcon4.svg";
import { ReactComponent as gameServiceIcon5 } from "./assets/svgs/services/gameServiceIcon5.svg";
import { ReactComponent as gameServiceIcon6 } from "./assets/svgs/services/gameServiceIcon6.svg";
import { ReactComponent as gameServiceIcon7 } from "./assets/svgs/services/gameServiceIcon7.svg";

// UI Development Services
import { ReactComponent as uiServiceIcon1 } from "./assets/svgs/services/uiServiceIcon1.svg";
import { ReactComponent as uiServiceIcon2 } from "./assets/svgs/services/uiServiceIcon2.svg";
import { ReactComponent as uiServiceIcon3 } from "./assets/svgs/services/uiServiceIcon3.svg";
import { ReactComponent as uiServiceIcon4 } from "./assets/svgs/services/uiServiceIcon4.svg";
import { ReactComponent as uiServiceIcon5 } from "./assets/svgs/services/uiServiceIcon5.svg";
import { ReactComponent as uiServiceIcon6 } from "./assets/svgs/services/uiServiceIcon6.svg";

// AI Development Services
import { ReactComponent as aiServiceIcon1 } from "./assets/svgs/services/aiServiceIcon1.svg";
import { ReactComponent as aiServiceIcon2 } from "./assets/svgs/services/aiServiceIcon2.svg";
import { ReactComponent as aiServiceIcon3 } from "./assets/svgs/services/aiServiceIcon3.svg";
import { ReactComponent as aiServiceIcon4 } from "./assets/svgs/services/aiServiceIcon4.svg";
import { ReactComponent as aiServiceIcon5 } from "./assets/svgs/services/aiServiceIcon5.svg";
import { ReactComponent as aiServiceIcon6 } from "./assets/svgs/services/aiServiceIcon6.svg";

// AI Chatbot Development Services
import { ReactComponent as aichatbotServiceIcon1 } from "./assets/svgs/services/aichatbotServiceIcon1.svg";
import { ReactComponent as aichatbotServiceIcon2 } from "./assets/svgs/services/aichatbotServiceIcon2.svg";
import { ReactComponent as aichatbotServiceIcon3 } from "./assets/svgs/services/aichatbotServiceIcon3.svg";
import { ReactComponent as aichatbotServiceIcon4 } from "./assets/svgs/services/aichatbotServiceIcon4.svg";
import { ReactComponent as aichatbotServiceIcon5 } from "./assets/svgs/services/aichatbotServiceIcon5.svg";
import { ReactComponent as aichatbotServiceIcon6 } from "./assets/svgs/services/aichatbotServiceIcon6.svg";

import LandingPage from "./pages/LandingPage";

export { logoImg };

export const companyDetails = {
  phone: "+918838426384",
  address:
    "101, Oxford Towers, HAL II Stage, Kodihalli, Bangalore - 560008 Karnataka, India,",
  email: "contact@harzeno.com",
  linkedin: "https://www.linkedin.com/company/harzeno/",
  instagram: "https://www.instagram.com/harzeno_it/",
  facebook: "https://www.facebook.com/harzeno/",
};

export const routes = [
  {
    path: "/",
    name: "Home",
    element: <Home />,
  },
  {
    path: "/about-us",
    name: "About Us",
    element: <AboutUs />,
  },
  {
    path: "/services",
    name: "Services",
    element: <Services />,
  },
  // {
  //   path: "/blogs",
  //   name: "Blogs",
  //   element: <Blogs />,
  // },
  {
    path: "/contact-us",
    name: "Contact Us",
    element: <ContactUs />,
  },
  {
    path: "/blogs/:id",
    name: "Blog Details",
    element: <BlogDetails />,
  },
];

export const routes2 = [
  {
    path: "/web-development",
    name: "Web Development",
    element: <LandingPage />,
  },
  {
    path: "/app-development",
    name: "App Development",
    element: <LandingPage />,
  },
  {
    path: "/ui-ux-design",
    name: "UX/UI Design",
    element: <LandingPage />,
  },
  {
    path: "/ai-development",
    name: "AI Development Solutions",
    element: <LandingPage />,
  },
  {
    path: "/ai-chatbot-development",
    name: "AI Chatbots Development",
    element: <LandingPage />,
  },
  {
    path: "/game-development",
    name: "Game Development",
    element: <LandingPage />,
  },
];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "E-commerce Websites",
    icon: webServiceIcon1,
    description:
      "Empowering your online business with tailored ecommerce solutions. Our platforms boost customer engagement, streamline operations, and drive revenue growth. ",
  },
  {
    id: 2,
    title: "Social Media Websites",
    icon: webServiceIcon2,
    description:
      "Get custom social media websites that captivate and engage your audience, driving growth and brand loyalty effortlessly",
  },
  {
    id: 3,
    title: "Landing Websites",
    icon: webServiceIcon3,
    description:
      " Creating high-converting landing pages that capture attention and drive action. Tailored designs that showcase your brand’s message and maximize conversions.",
  },
  {
    id: 4,
    title: "Custom Websites",
    icon: webServiceIcon4,
    description:
      "Delivering tailor-made websites designed to meet your unique business needs. Our solutions blend creativity and functionality for an exceptional online experience.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development",
    icon: appServiceIcon1,
    description:
      "Our skilled developers work with both Swift and Objective-C to build robust and efficient apps. We optimize your app for performance, speed, and responsiveness.",
  },
  {
    id: 2,
    title: "Android App Development",
    icon: appServiceIcon2,
    description:
      "We design and develop tailor-made Android apps that align with your vision and business goals.Proficient in both Java and Kotlin, we build robust and efficient apps.",
  },
  {
    id: 3,
    title: "Flutter App Development",
    icon: appServiceIcon3,
    description:
      "Flutter allows you to build apps for both iOS and Android using a single codebase. While Flutter's default web app architecture presents challenges, we can overcome them with smart strategies. ",
  },
  {
    id: 4,
    title: "Hybrid App Development",
    icon: appServiceIcon4,
    description:
      "We build feature-rich hybrid apps tailored to your business needs. We create mobile-friendly apps that work seamlessly across iOS and Android devices.",
  },
];

// ai development services
export const aiDevelopmentServices = [
  {
    id: 1,
    title: "Machine Learning Models",
    icon: aiServiceIcon1,
    description:
      "Development of custom machine learning algorithms that analyze data, predict trends, and optimize decision-making processes.",
  },
  {
    id: 2,
    title: "Natural Language Processing (NLP)",
    icon: aiServiceIcon2,
    description:
      "Implementation of NLP techniques to enable systems to understand, interpret, and respond to human language.",
  },
  {
    id: 3,
    title: "Predictive Analytics",
    icon: aiServiceIcon3,
    description:
      "Creation of AI-driven predictive analytics tools that help forecast future trends, identify risks, and uncover opportunities.",
  },
  {
    id: 4,
    title: "Computer Vision",
    icon: aiServiceIcon4,
    description:
      "Development of computer vision applications that enable machines to recognize and interpret visual information from images and videos.",
  },
  {
    id: 5,
    title: "AI-Powered Automation",
    icon: aiServiceIcon5,
    description:
      "Automation of complex processes using AI to reduce manual effort, increase efficiency, and improve accuracy.",
  },
  {
    id: 6,
    title: "Custom AI Solutions",
    icon: aiServiceIcon6,
    description:
      "Development of bespoke AI applications tailored to your specific business needs, whether it's enhancing customer service, improving operations, or innovating new products.",
  },
];

// chatbot development services
export const chatbotDevelopmentServices = [
  {
    id: 1,
    title: "Custom AI Chatbot Development",
    icon: aichatbotServiceIcon1,
    description:
      "Development of tailored chatbots that meet your specific business needs, from customer service to sales assistance.",
  },
  {
    id: 2,
    title: "Natural Language Processing (NLP) Integration",
    icon: aichatbotServiceIcon2,
    description:
      "Implementation of advanced NLP algorithms to ensure your chatbot can understand and respond to natural language queries.",
  },
  {
    id: 3,
    title: "Multi-Platform Chatbots",
    icon: aichatbotServiceIcon3,
    description:
      "Creation of chatbots that operate seamlessly across multiple platforms, including websites, mobile chats, social media, and messaging services like Whatschat and Facebook Messenger.",
  },
  {
    id: 4,
    title: "Voice-Activated Chatbots",
    icon: aichatbotServiceIcon4,
    description:
      "Development of voice-activated chatbots for smart devices and virtual assistants like Amazon Alexa and Google Assistant.",
  },
  {
    id: 5,
    title: " E-Commerce Chatbots",
    icon: aichatbotServiceIcon5,
    description:
      "AI-driven chatbots designed to guide customers through the purchasing process, recommend products, and assist with order management.",
  },
  {
    id: 6,
    title: "Internal Process Automation",
    icon: aichatbotServiceIcon6,
    description:
      " Chatbots developed to automate internal business processes, such as HR inquiries, IT support, and employee onboarding.",
  },
];

// Game development services
export const gameDevelopmentServices = [
  {
    id: 1,
    title: "Concept & Prototyping",
    icon: gameServiceIcon1,
    description:
      "Transform your ideas into tangible concepts with our prototyping services.",
  },
  {
    id: 2,
    title: "Mobile Game Development",
    icon: gameServiceIcon2,
    description:
      "Creation of captivating mobile games for iOS and Android using Unity and Unreal Engine.",
  },
  {
    id: 3,
    title: "PC & Console Game Development",
    icon: gameServiceIcon3,
    description:
      "Development of high-performance games for PC, PlayStation, Xbox, and Nintendo Switch.",
  },
  {
    id: 4,
    title: "AR/VR Game Development",
    icon: gameServiceIcon4,
    description:
      "Create immersive augmented reality (AR) and virtual reality (VR) games that push the boundaries of player engagement.",
  },
  {
    id: 5,
    title: "Multiplayer & Online Game Development",
    icon: gameServiceIcon5,
    description:
      "Design and develop multiplayer games with robust online features and real-time interactions.",
  },
  {
    id: 6,
    title: "Game Design & Artwork",
    icon: gameServiceIcon6,
    description:
      "Comprehensive game design services, including level design, character development, and UI/UX design.",
  },
  {
    id: 7,
    title: "Game Testing & Quality Assurance",
    icon: gameServiceIcon7,
    description:
      "Rigorous testing across all stages of development to identify and fix bugs, optimize performance, and ensure a polished final product.",
  },
];

// UI/UX Design services
export const uiDevelopmentServices = [
  {
    id: 1,
    title: "User Research & Analysis",
    icon: uiServiceIcon1,
    description:
      "In-depth user research to understand audience behavior and pain points, providing data-driven insights for better design decisions.",
  },
  {
    id: 2,
    title: "Wireframing & Prototyping",
    icon: uiServiceIcon2,
    description:
      "Creation of wireframes and interactive prototypes to visualize user flows, refine usability, and optimize the user journey before development.",
  },
  {
    id: 3,
    title: "UI (User Interface) Design",
    icon: uiServiceIcon3,
    description:
      "Visually appealing, brand-aligned interfaces using modern design principles, typography, color theory, and iconography for engaging layouts.",
  },
  {
    id: 4,
    title: "UX (User Experience) Design",
    icon: uiServiceIcon4,
    description:
      "Designing intuitive navigation structures for a seamless experience with a focus on usability, accessibility, and responsiveness across devices.",
  },
  {
    id: 5,
    title: "Usability Testing",
    icon: uiServiceIcon5,
    description:
      "Conducting real-user testing to identify friction points, optimize design, and gather feedback to ensure a smooth and satisfying user experience.",
  },
  {
    id: 6,
    title: "Custom UI/UX Solutions",
    icon: uiServiceIcon6,
    description:
      "Tailored UI/UX designs aligning with brand identity and business goals, integrating seamlessly with existing systems for a cohesive digital experience.",
  },
];

// testimonials
export const testimonials = [
  {
    id: 1,
    name: "Shanmuga Vel",
    position: "Founder, Fabrula",
    img: require("./assets/images/shanmuga vel.jpeg"),
    desc: "“Harzeno is a top-notch web and app development agency. They deliver innovative, user-friendly solutions that drive results. Highly recommended for their expertise and professionalism. ”",
  },
  {
    id: 2,
    name: "Jimmy Deroy",
    position: " Creative Director, FE Group GmbH",
    img: require("./assets/images/jimmy.jpg"),
    desc: "“We approached Harzeno for our website project, and they exceeded our expectations. Their team was professional, responsive, and delivered a stunning, high performing site that perfectly represents our brand. Highly recommended!”",
  },
  {
    id: 3,
    name: "Jayaprakash Moorthy",
    position: "Principal Design Engineer, Modern Equipment Future",
    img: require("./assets/images/jayaprakash.jpeg"),
    desc: "“Harzeno blends creativity with technical know-how to build fantastic websites and apps. I highly recommend them for anyone looking to make a real impact online.”",
  },
  // {
  //   id: 4,
  //   name: "Aarav Kapoor",
  //   position: "Product Manager of Nexus Tech",
  //   img: require("./assets/images/testimonial4.jpg"),
  //   desc: "“Harzeno's app development team delivered a seamless, feature-rich application on time and within budget. Fantastic experience overall”",
  // },
  // {
  //   id: 5,
  //   name: "Jessica M",
  //   position: "COO of Creative Solutions",
  //   img: require("./assets/images/testimonial5.jpg"),
  //   desc: "“Impressed with Harzeno's creativity in app development. They turned our vision into reality flawlessly. Exceptional service!”",
  // },
];

// all services
export const allServices = [
  {
    id: 1,
    title: "Web Development",
    link: "/web-development",
    description:
      "Design and develop responsive, SEO-friendly websites that effectively represent your brand and engage your audience.",
    icon: allServiceIcon1,
    detailHeading: "Web Development: Tailored Websites that Deliver Results",
    detailContent: `<p>At Harzeno, we build more than just websites—we create digital experiences that are crafted to perform. Whether you're a small business looking to establish an online presence or a larger company needing a full-featured, scalable platform, our web development services are designed to meet your specific needs. Our team of developers, designers, and strategists work together to:</p>
    <br/>
    <ol>
      <li><b>Develop Custom Websites:</b><br/> No cookie-cutter solutions here. We build each site from the ground up, ensuring it aligns with your brand and business goals.</li>
      <br/>
      <li><b>Optimize for Speed and Security:</b> <br/> Performance matters. We ensure your website loads fast and is equipped with the latest security features to protect your data and users.</li>
      <br/>
      <li><b>Ensure Scalability:</b><br/>  As your business grows, your website should too. Our websites are built to handle increased traffic and scale with your success.</li>
    </ol>
    <br/>
    <br/>
    <p>Whether you need an e-commerce platform, a corporate site, or a portfolio, our custom web development services deliver results that enhance your online visibility and user engagement.</p>`,
  },
  {
    id: 2,
    title: "App Development",
    link: "/app-development",
    description:
      "Develop robust, user-friendly mobile apps for iOS and Android platforms that meet your business needs.",
    icon: allServiceIcon2,
    detailHeading:
      "App Development: Powerful Mobile Solutions for Modern Businesses",
    detailContent: `<p>In a mobile-first world, having a well-designed app can set your business apart. At Harzeno, we specialize in creating custom mobile applications that are user-friendly, feature-rich, and tailored to your specific goals. Our app development services cover everything from concept to deployment:</p>
      <br/>
      <ol>
        <li><b>iOS and Android Apps:</b><br/>Whether you’re targeting iPhone users or Android fans, we develop native apps for both platforms to ensure optimal performance and user experience.</li>
        <br/>
        <li><b>Cross-Platform Solutions:</b> <br/> Need to reach a wider audience with one codebase? We develop cross-platform apps that work seamlessly on both iOS and Android, reducing development time and cost without compromising quality.</li>
        <br/>
        <li><b>Feature Integration:</b><br/>  From in-app purchases to push notifications and social media integration, we ensure your app has all the features it needs to engage users and drive results.</li>
      </ol>
      <br/>
      <br/>
      <p>We’re not just about writing code—we're about building apps that solve real business problems and provide exceptional user experiences.</p>`,
  },
  {
    id: 3,
    title: "UX/UI Design",
    link: "/ui-ux-design",
    description:
      "Create intuitive and visually appealing user interfaces and experiences that enhance usability and customer satisfaction.",
    icon: allServiceIcon3,
    detailHeading: "UX/UI Design: Crafting Seamless and Engaging User Journeys",
    detailContent: `<p>A great digital product is nothing without an exceptional user experience. Our UX/UI design services focus on creating intuitive, user-centered designs that make it easy for your customers to engage with your business. Here's how we bring your vision to life:</p>
      <br/>
      <ol>
        <li><b>User-Centered Design:</b><br/>We take the time to understand your users—their needs, behaviors, and goals—so we can design interfaces that feel natural and engaging.</li>
        <br/>
        <li><b>Prototyping and Testing:</b> <br/> Before anything goes live, we create interactive prototypes to test and gather feedback. This ensures that the final design is both functional and delightful to use.</li>
        <br/>
        <li><b>Beautiful and Functional Interfaces:</b><br/>  Our UI designers craft stunning visuals that not only look great but also provide a smooth, seamless experience for your users.</li>
      </ol>
      <br/>
      <br/>
      <p>From websites to mobile apps, we design user experiences that lead to higher engagement, satisfaction, and loyalty.</p>`,
  },
  {
    id: 4,
    title: "Chatbots",
    link: "/ai-chatbot-development",
    description:
      "Craft intuitive chatbot solutions to enhance customer engagement and streamline business operations with automated interactions.",
    icon: allServiceIcon4,
    detailHeading: "Chatbots: Automate and Enhance Customer Interaction",
    detailContent: `<p>Chatbots are revolutionizing the way businesses interact with their customers, offering instant support and engagement at any time of day. At Harzeno, we develop intelligent, AI-driven chatbots that help streamline customer service, boost conversions, and reduce operational costs. Our chatbot services include:</p>
      <br/>
      <ol>
        <li><b>Natural Language Processing (NLP):</b><br/>We use advanced AI and NLP to build chatbots that understand and respond to user queries in a conversational, human-like way.</li>
        <br/>
        <li><b>Custom Workflows:</b> <br/> Whether you're looking to automate customer support, generate leads, or assist in e-commerce, we design chatbots tailored to your specific business goals.</li>
        <br/>
        <li><b>Multi-Platform Integration:</b><br/>  Our chatbots can be integrated across various platforms, including your website, Facebook Messenger, WhatsApp, and more, ensuring you meet customers wherever they are.</li>
      </ol>
      <br/>
      <br/>
      <p>We focus on delivering solutions that enhance customer satisfaction and drive results, while giving you more time to focus on growing your business.</p>`,
  },
  {
    id: 5,
    title: "AI Development Solutions",
    link: "/ai-development",
    description:
      "Harness the power of AI to innovate and automate processes, driving efficiency and intelligent decision-making.",
    icon: allServiceIcon5,
    detailHeading:
      "AI Development Solutions: Empowering Innovation with Artificial Intelligence",
    detailContent: `<p>In the age of artificial intelligence (AI), leveraging AI technologies can revolutionize your business operations. At Harzeno, we specialize in developing AI solutions that help businesses innovate, automate, and make intelligent decisions. Our AI services include:</p>
      <br/>
      <ol>
        <li><b>Intelligent Automation:</b><br/> Harness the power of AI to streamline workflows, reduce manual effort, and improve operational efficiency through intelligent process automation.</li>
        <br/>
        <li><b>Predictive Insights:</b> <br/> Use advanced AI models to uncover patterns, predict outcomes, and drive data-informed decisions with greater accuracy.</li>
        <br/>
        <li><b>Personalized Experiences:</b><br/> Enhance user engagement and satisfaction by delivering AI-driven personalized experiences tailored to individual needs and preferences.</li>
      </ol>
      <br/>
      <br/>
      <p>Our AI development solutions are designed to transform data into actionable insights, foster innovation, and enable sustainable business growth.</p>`,
  },
  {
    id: 6,
    title: "Game Development",
    link: "/game-development",
    description:
      "Creating immersive and engaging gaming experiences through advanced design, development, and technology for various platforms and audiences.",
    icon: allServiceIcon6,
    detailHeading:
      "Game Development: Bringing Your Ideas to Life with Interactive Experiences",
    detailContent: `<p>Whether you're an indie developer with a fresh idea or a large studio looking to expand your portfolio, we offer comprehensive game development services to bring your vision to life. At Harzeno, we specialize in creating immersive, engaging games for mobile, console, and PC platforms. Our game development services include:</p>
      <br/>
      <ol>
        <li><b>Concept and Story Development:</b><br/>We work with you to develop compelling narratives, unique characters, and engaging gameplay mechanics that keep players coming back.</li>
        <br/>
        <li><b>Multi-Platform Development:</b> <br/> Whether it’s Unity or Unreal Engine, we use the latest tools and technologies to ensure your game runs smoothly on all platforms, including iOS, Android, PC, and consoles.</li>
        <br/>
        <li><b>2D/3D Design and Animation:</b><br/> Our artists and animators create stunning graphics and immersive environments that enhance the gameplay experience.</li>
      </ol>
      <br/>
      <br/>
      <p>From mobile games to AAA titles, we are committed to delivering high-quality games that resonate with players and stand out in the market.</p>`,
  },
];

// portfolio images (landing)
export const landingPortfolio = [
  {
    id: 1,
    img: require("./assets/images/web_projects/3.png"),
    title: "FE FINANCE FMBH",
  },
  {
    id: 2,
    img: require("./assets/images/web_projects/4.png"),
    title: "Messina's Catering & Events",
  },
  {
    id: 3,
    img: require("./assets/images/web_projects/1.png"),
    title: "Autop ilot.io",
  },
  {
    id: 4,
    img: require("./assets/images/app_projects/2.png"),
    title: "Barbera",
  },
  {
    id: 5,
    img: require("./assets/images/web_projects/5.png"),
    title: "Think Realty",
  },
  {
    id: 6,
    img: require("./assets/images/app_projects/3.png"),
    title: "Klickomics",
  },
  {
    id: 7,
    img: require("./assets/images/app_projects/1.png"),
    title: "Appointment Chatbot",
  },

  {
    id: 8,
    img: require("./assets/images/app_projects/4.png"),
    title: "Rentop",
  },
  {
    id: 9,
    img: require("./assets/images/web_projects/2.png"),
    title: "chatbot for school",
  },
];

// portfolio images (web development)
export const webPortfolio = [
  {
    id: 1,
    img: require("./assets/images/web_projects/3.png"),
    title: "FE FINANCE FMBH",
  },
  {
    id: 2,
    img: require("./assets/images/web_projects/4.png"),
    title: "Messina's Catering & Events",
  },
  {
    id: 3,
    img: require("./assets/images/web_projects/2.png"),
    title: "Autopilot.io",
  },
  {
    id: 4,
    img: require("./assets/images/web_projects/1.png"),
    title: "Chatbot for chatbot for school",
  },

  {
    id: 5,
    img: require("./assets/images/web_projects/5.png"),
    title: "Think Realty",
  },
];

// portfolio images (app development)
export const appPortfolio = [
  {
    id: 1,
    img: require("./assets/images/app_projects/1.png"),
    title: "Appointment Chatbot",
  },
  {
    id: 2,
    img: require("./assets/images/app_projects/2.png"),
    title: "Barbera",
  },
  {
    id: 3,
    img: require("./assets/images/app_projects/3.png"),
    title: "Klickomics",
  },
  {
    id: 4,
    img: require("./assets/images/app_projects/4.png"),
    title: "Rentop",
  },
];
