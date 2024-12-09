import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const AllPost = () => {
  const [posts] = useState([
    {
      title: "8 Figma design systems that you can download for free today.",
      author: "John Doe",
      date: "Aug 22, 2021",
    },
    {
      title: "8 Figma design systems that you can download for free today.",
      author: "John Doe",
      date: "Aug 22, 2021",
    },
    {
      title: "8 Figma design systems that you can download for free today.",
      author: "John Doe",
      date: "Aug 22, 2021",
    },
    {
      title: "8 Figma design systems that you can download for free today.",
      author: "John Doe",
      date: "Aug 22, 2021",
    },
    // Add more posts here...
  ]);

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">All Posts</h2>

        <NavLink
          to="/blogpost"
          className={({ isActive }) =>
            isActive
              ? "text-purpleAccent font-semibold"
              : "text-white font-semibold hover:text-purpleAccent"
          }
        >
          {" "}
          <div className="text-blue-500 hover:underline">View All</div>
        </NavLink>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {posts.map((post, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-4 pt-4 pb-4 hover:bg-whiteAlt"
          >
            <p className="text-gray-600 text-sm">
              By {post.author} | {post.date}
            </p>
            <h3 className="text-xl font-heading font-bold text-primary pr-96 ">
              {post.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllPost;
