import React from "react";
import "./Blog.css";
import Header from "./Header";
import Footer from "./Footer";
import blogImage from "../assets/blogpost.jpg";

const Blog: React.FC = () => {
  return (
    <div className="blog-container">
      <Header />
      <main className="blog-content">
        <div className="blog-message">
          <img src={blogImage} alt="Blog post" className="blog-image" />
          <p className="message-text">
            Sorry, we are currently curating blogs and cleaning tips which will
            be up soon. Stay updated!
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
