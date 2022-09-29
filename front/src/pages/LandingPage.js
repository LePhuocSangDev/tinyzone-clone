import React from "react";
import { AiOutlineArrowRight, AiOutlineSearch } from "react-icons/ai";
import Logo from "../assets/logo.png";
import Footer from "../components/Footer";
import SocialIcons from "../components/SocialIcons";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-[url('https://img.wallpapersafari.com/desktop/1280/1024/24/74/zgeTuV.jpg')] bg-cover bg-no-repeat bg-center object-contain h-screen text-center">
        <div className=" h-screen bg-black bg-opacity-80 flex justify-center items-center flex-col">
          <div className="flex flex-col   items-center mt-10">
            <img className="w-[80px] m-4" src={Logo} alt="" />
            <h2 className="text-2xl text-white p-4 font-extrabold">TinyZone</h2>
          </div>
          <div className="w-[90%] flex ">
            <input
              className="w-full p-2 rounded-l-[4px] border-none outline-none"
              placeholder="Enter keywords"
              type="text"
            />
            <a
              to="/home"
              className="text-white px-6 py-2 bg-[#d41f1c] flex items-center rounded-r-[4px] font-bold "
            >
              <AiOutlineSearch />
            </a>
          </div>
          <SocialIcons />
          <Link
            to="/home"
            className="text-white flex items-center justify-center rounded-[32px] bg-[#d41f1c] font-bold px-12 min-w-[90%] md:min-w-[250px] py-4"
          >
            <span className="">View Full Site</span>
            <AiOutlineArrowRight
              style={{
                backgroundColor: "white",
                borderRadius: "4px",
                color: "#d41f1c",
                borderRadius: "8px",
                marginLeft: "16px",
              }}
            />
          </Link>
        </div>
      </div>
      <div className="text-white mx-2 my-4">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus quam
          soluta unde quidem enim, nesciunt ipsum tempora fugiat voluptatem est
          reprehenderit quia consectetur, consequuntur eos?
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum qui
          dolore laudantium, illo iusto exercitationem.
        </p>
        <h2 className="font-extrabold pt-4">What is Tinyzone</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
          dignissimos eveniet mollitia molestiae eum quae totam quas corporis
          pariatur. Quas quidem enim explicabo quos! Culpa?
        </p>
        <h2 className="font-extrabold pt-4">Lorem ipsum dolor sit amet.</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut maxime
          et optio nobis quidem commodi! Distinctio illum sed ut dolores saepe,
          provident omnis cum qui impedit, quo nemo!
        </p>
        <h2 className="font-extrabold pt-4">Lorem ipsum dolor sit amet.</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut maxime
          et optio nobis quidem commodi! Distinctio illum sed ut dolores saepe,
          provident omnis cum qui impedit, quo nemo!
        </p>
        <h2 className="font-extrabold pt-4">Lorem ipsum dolor sit amet.</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut maxime
          et optio nobis quidem commodi! Distinctio illum sed ut dolores saepe,
          provident omnis cum qui impedit, quo nemo!
        </p>
        <h2 className="font-extrabold pt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h2>
        <ol className="ml-8 my-4" type="1" start="1">
          <li>1. Coffee</li>
          <li>2. Tea</li>
          <li>3. Milk</li>
          <li>4. Milk</li>
          <li>5. Milk</li>
          <li>6. Milk</li>
          <li>7. Milk</li>
        </ol>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
          tenetur.
        </p>
        <Link
          to="home"
          className="text-white flex items-center justify-center rounded-[32px] bg-[#d41f1c] font-bold px-12 min-w-[90%] md:min-w-[250px] py-4 m-auto mt-8"
        >
          <span className="">Go to TinyZone</span>
          <AiOutlineArrowRight
            style={{
              backgroundColor: "white",
              borderRadius: "4px",
              color: "#d41f1c",
              borderRadius: "8px",
              marginLeft: "16px",
            }}
          />
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
