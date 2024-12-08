import React from "react";
import Grid from "./Grid";
import AuthList from "./AuthList";
import AuthList2 from "./AuthList2";
import bgimg from "../assets/IMAGES/close-up-photography-of-man-wearing-sunglasses-1212984.svg";
const AboutUs = () => {
  return (
    <div>
      <main className="container mx-auto px-4 py-8 font-body">
        <div className="bg-gray-50 py-12 px-6">
          <div className="max-w-7xl mx-auto">
            {/* About Us Section */}
            <div className="text-center">
              <h2 className="text-xl font-bold uppercase text-gray-500">
                About Us
              </h2>
              <h1 className="text-3xl font-bold mt-2 text-gray-800">
                We are a team of content writers who share their learnings
              </h1>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            {/* Image Section */}
            <div className="mt-8">
              <img
                src={bgimg}
                alt="Team"
                className="w-full h-auto rounded-md shadow-md"
              />
            </div>

            {/* Statistics Section */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-yellowAccent hover:bg-whiteAlt p-6 rounded-lg shadow-md">
                <h3 className="text-3xl font-bold ">12+</h3>
                <p className="mt-2 text-gray-600">Blogs Published</p>
              </div>
              <div className="bg-yellowAccent hover:bg-whiteAlt p-6 rounded-lg shadow-md">
                <h3 className="text-3xl font-bold ">18K+</h3>
                <p className="mt-2 text-gray-600">Views on Finsweet</p>
              </div>
              <div className="bg-yellowAccent hover:bg-whiteAlt p-6 rounded-lg shadow-md">
                <h3 className="text-3xl font-bold ">30K+</h3>
                <p className="mt-2 text-gray-600">Total Active Users</p>
              </div>
            </div>

            {/* Mission and Vision Section */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-800">Our Mission</h3>
                <p className="mt-4 text-gray-600">
                  Creating valuable content for creatives all around the world.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-800">Our Vision</h3>
                <p className="mt-4 text-gray-600">
                  A platform that empowers individuals to improve. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Grid />
        <AuthList />
        <AuthList2 />
      </main>
    </div>
  );
};

export default AboutUs;
