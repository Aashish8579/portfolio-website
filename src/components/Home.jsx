import { ReactTyped } from "react-typed";
import pic from "../../public/dp.png";

import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome In My Feed </span>
            <div className="flex space-x-1 text-2xl md-text-4xl">
              <h1>hello, I am m a</h1>
              {/* <span className="text-red-700 font-bold">Developer</span> */}
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br></br>
            <p className="text-sm md:text-md text-justify">
             Hi there! Welcome to my feed! I am Aashish, a mern Stack developer  passionate about creating user-friendly and efficient web applications. I am currently diving deep into React and focusing on the back-end with Node.js. Recently, I completed a project using Express and I am excited to share more about it soon. I am  always eager to learn new technologies. In my feed, I will be sharing updates on my coding journey, interesting articles about web development, and maybe even some snippets of my projects. Let's connect! Feel free to reach out!
            </p>
            <br />

            {/*  Social Media Icons */}

            <div className="flex  flex-col  items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="space-y-2">
                <h1 className="font-bold text-green-500">Available On</h1>

                <ul className="flex space-x-5">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <FaFacebookSquare className="text-2xl cursor-pointer" />
                    </a>
                  </li>

                  <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <FaLinkedin className="text-2xl cursor-pointer" />
                    </a>
                  </li>

                  <li>
                    <a href="https://www.youtube.com/" target="_blank">
                      <IoLogoYoutube className="text-2xl cursor-pointer" />
                    </a>
                  </li>

                  <li>
                    <a href="https://t.me/" target="_blank">
                      <FaTelegram className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>

              <div className="space-y-2 ">
                <h1 className="font-bold text-green-500">
                  Cureently Working On
                </h1>
                <div className="flex space-x-5">
                  <SiMongodb className="text-xl md:text-3xl hover:scale-105 duration-200 rounded-full border-[2px]  " />
                  <SiExpress className="text-xl md:text-3xl hover:scale-105 duration-200 rounded-full border-[2px] " />
                  <FaReact className="text-xl md:text-3xl hover:scale-105 duration-200 rounded-full border-[2px] " />
                  <FaNodeJs className="text-xl md:text-3xl hover:scale-105 duration-200 rounded-full border-[2px] " />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20  mt-8 order-1">
            <img
              src={pic}
              className=" rounded-full md:w-[450px] md:h-[450px]"
              alt="Profile"
            />
          </div>
        </div>
      </div>

      <hr />
    </>
  );
}

export default Home;
