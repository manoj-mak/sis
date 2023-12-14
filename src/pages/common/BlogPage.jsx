import React from "react";
import { useNavigate } from "react-router-dom";
import TopBar from "../../components/TopBar";
import Constants from "../../util/Constants";

const BlogPage = () => {
  const blogs = [
    {
      id: 1,
      title: "Blog Title 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "blog1.jpg",
    },
    {
      id: 2,
      title: "Blog Title 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "blog2.jpg",
    },
    // Add more blogs here
  ];

  return (
    <div
      style={{
        backgroundColor: Constants.backgroundColor,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <TopBar />
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: Constants.primaryColor,
          fontFamily: "Poppins",
        }}
      >
        Blogs Page
      </h1>
    </div>
  );
};

export default BlogPage;
