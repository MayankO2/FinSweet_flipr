import React from "react";
import HeroImage from "../assets/IMAGES/man-in-black-suit-wearing-eye-glasses-sitting-on-gray-sofa-using-macbook-3772622.svg";
import Building from "../assets/IMAGES/white-concrete-building-1838640.svg";
import Blog from "./Blog";
import AllPost from "./AllPost";
import Testimonial from "./Testimonial";
import AuthList from "./AuthList";
import Logo1 from "../assets/IMAGES/Logo 1.svg";
import Logo2 from "../assets/IMAGES/Logo 2.svg";
import Logo3 from "../assets/IMAGES/Logo 3.svg";
import Logo4 from "../assets/IMAGES/Logo 4.svg";
import Logo5 from "../assets/IMAGES/Logo 5.svg";
import Discover from "./Discover";
import categories from "./categories";

const Blog1 = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-4">
      {categories.map((category, index) => (
        <div
          key={index}
          className="relative border rounded-lg shadow-md p-6 bg-white flex flex-col items-center text-left hover:bg-yellowAccent"
        >
          {/* Image Container with Background */}
          <div className="absolute top-4 left-4 bg-yellow-100 p-2 rounded-lg">
            <img
              src={category.image}
              alt={category.title}
              className="w-10 h-10"
            />
          </div>
          {/* Title and description */}
          <div className="mt-16">
            <h2 className="text-2xl font-semibold mb-2">{category.title}</h2>
            <p className="text-base text-gray-600">{category.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <main className="container font-body">
        <section
          className="relative font-custom w-full h-screen bg-cover bg-left"
          style={{ backgroundImage: `url(${HeroImage})` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          {/* Content */}
          <div className="relative z-10 max-w-4xl h-full flex flex-col justify-center text-white px-7">
            <p className="text-sm uppercase font-semibold tracking-wide">
              Posted on <span className="text-white">Startup</span>
            </p>
            <h1 className="text-5xl font-heading font-bold mt-2">
              Step-by-step guide to choosing great font pairs
            </h1>
            <p className="mt-4 text-lg text-gray-300">
              Dive into the art of pairing fonts to create visually appealing
              and professional designs. Master the skill today.
            </p>
            <p className="mt-2 text-sm text-gray-400">
              By <span className="text-white">James Doe</span> | May 23, 2022
            </p>
            <button
              className="mt-6 bg-yellow-500 text-black w-fit px-5 py-2 rounded text-sm font-bold hover:bg-yellow-600 transition justify-start
        "
            >
              Read More
            </button>
          </div>
        </section>

        <section className="mt-12 p-6 bg-white rounded-md">
          <h3 className="text-2xl font-heading font-bold text-primary">
            Featured Post
          </h3>
          <div className="grid grid-cols-2 gap-4 mt-4 items-center">
            {/* Featured Post Image */}

            <div className="mt-12 p-6 bg-white shadow-lg rounded-md">
              <img
                src={Building} // Replace with actual image path
                alt="Featured"
                className="w-full h-auto rounded shadow-sm"
              />
              <p className="m-2 text-sm ">By ames Doe | May 23, 2022</p>
              <h3 className="text-xl font-heading font-bold text-primary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                sit ducimus error deleniti iusto quo!
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                est molestiae expedita culpa, officiis natus! Eligendi
                perspiciatis animi commodi voluptatem?
              </p>
              <button
                className="mt-6 bg-yellow-500 text-black w-fit px-5 py-2 rounded text-sm font-bold hover:bg-yellow-600 transition justify-start
        "
              >
                Read More
              </button>
            </div>
            <AllPost />
          </div>
        </section>
        <section className="m-14 ">
          <h3 className="text-2xl font-heading font-bold  text-center">
            Choose A Category
          </h3>
          <Blog1 />
        </section>
        <Discover />
        <AuthList />

        <div className="flex flex-row justify-between p-10 mt-4 mb-10">
          <div>
            We are <br></br>
            <span className="text-xl">Featured in</span>
          </div>
          <img src={Logo1} alt="" />
          <img src={Logo2} alt="" />
          <img src={Logo3} alt="" />
          <img src={Logo4} alt="" />
          <img src={Logo5} alt="" />
        </div>
        <Testimonial />
      </main>
    </div>
  );
};

export default Home;
