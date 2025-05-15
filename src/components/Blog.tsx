import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { getAllBlogPosts } from "./blogPosts";
import { BlogPost } from "./types"; // Import from shared types
import "./Blog.css";

// Import images directly to make them available to webpack
import cleaning34 from "../assets/cleaning34.jpeg";
import crop2 from "../assets/crop2.png";
import officeCleaning from "../assets/j5.jpeg";
import sofaCleaning from "../assets/crop.png";
import swimmingpoolCleaning from "../assets/swimmingpoolcleaning.jpeg";
import fumigationServices from "../assets/fumigationservices.jpeg";

// Create a mapping object for image paths
const imageMap: Record<string, string> = {
  "/assets/cleaning34.jpeg": cleaning34,
  "/assets/crop2.png": crop2,
  "/assets/j5.jpeg": officeCleaning,
  "/assets/crop.png": sofaCleaning,
  "/assets/swimmingpoolcleaning.jpeg": swimmingpoolCleaning,
  "/assets/fumigationservices.jpeg": fumigationServices,
};

const Blog: React.FC = () => {
  // Get all blog posts using the imported function
  const posts = getAllBlogPosts();

  return (
    <div className="blog-container">
      <Header />

      <div className="blog-hero">
        <div className="blog-hero-content">
          <h1>Expert Cleaning Insights</h1>
          <p>
            Professional tips, industry trends, and practical advice to
            transform your spaces
          </p>
        </div>
      </div>

      <main className="blog-content">
        <div className="blog-intro">
          <h2>Our Cleaning Blog</h2>
          <p>
            Discover expert cleaning tips, insights, and advice from our
            professional team at P Davies Cleaning Services. Learn how to
            maintain a pristine environment with our industry-leading
            techniques.
          </p>
        </div>

        <div className="featured-posts-heading">
          <h3>Featured Articles</h3>
          <div className="heading-line"></div>
        </div>

        <div className="blog-grid">
          {posts.length > 0 ? (
            posts.map((post: BlogPost) => (
              <article key={post.id} className="blog-card">
                <div className="post-image">
                  <img
                    src={
                      imageMap[post.featuredImage] || "/api/placeholder/800/400"
                    }
                    alt={post.title}
                    onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                      e.currentTarget.src = "/api/placeholder/800/400";
                    }}
                  />
                  <div className="post-category">{post.category}</div>
                </div>
                <div className="post-content">
                  <div className="post-meta">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString()}
                    </time>
                    <span className="post-author">By {post.author}</span>
                  </div>
                  <h2>{post.title}</h2>
                  <p className="post-excerpt">{post.excerpt}</p>
                  <div className="post-footer">
                    <Link to={`/blog/${post.slug}`} className="read-more-link">
                      Read More
                    </Link>
                    <div className="post-location">{post.location}</div>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <div className="no-posts">
              <p>No blog posts available at the moment.</p>
            </div>
          )}
        </div>

        <div className="newsletter-signup">
          <div className="newsletter-content">
            <h3>Stay Updated</h3>
            <p>
              Subscribe to our newsletter for the latest cleaning tips and
              exclusive offers
            </p>
            <div className="newsletter-form">
              <input type="email" placeholder="Your Email Address" />
              <button type="submit">Subscribe</button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
