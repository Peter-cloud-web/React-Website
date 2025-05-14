import React from "react";
import { useParams, Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { getBlogPostBySlug } from "./blogPosts";
import "./BlogPost.css";

// Define interfaces for TypeScript
interface PostImage {
  url: string;
  caption?: string;
}

interface RelatedPost {
  title: string;
  slug: string;
  excerpt: string;
  image?: string;
}

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  author: string;
  authorBio?: string;
  date: string;
  category?: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  images?: PostImage[];
  relatedPosts?: RelatedPost[];
}

// Router params interface
interface BlogPostParams {
  slug: string;
}

const BlogPost: React.FC = () => {
  // Get the slug from URL parameters
  const { slug } = useParams<BlogPostParams>();

  // Get the specific blog post using the slug
  const post = getBlogPostBySlug(slug || "");

  // If post is not found
  if (!post) {
    return (
      <div className="blog-post-container">
        <Header />
        <div className="post-not-found">
          <h1>Blog Post Not Found</h1>
          <p>
            We couldn't find the blog post you're looking for. It might have
            been moved or deleted.
          </p>
          <Link to="/blog" className="return-button">
            Return to Blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Format date nicely
  const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Get author initials for avatar
  const getAuthorInitials = (name: string): string => {
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase();
  };

  // Function to render related posts
  const renderRelatedPosts = () => {
    // Assuming there's a function to get related posts or they're included in the post object
    const relatedPosts = post.relatedPosts || [];

    if (relatedPosts.length === 0) return null;

    return (
      <div className="related-posts">
        <h2>Related Articles</h2>
        <div className="related-posts-grid">
          {relatedPosts.map((relatedPost: RelatedPost, index: number) => (
            <div className="related-post-card" key={index}>
              <div className="related-post-image">
                <img
                  src={relatedPost.image || `/api/placeholder/400/320`}
                  alt={relatedPost.title}
                  onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                    e.currentTarget.src = "/api/placeholder/400/320";
                  }}
                />
              </div>
              <div className="related-post-content">
                <h3 className="related-post-title">{relatedPost.title}</h3>
                <p className="related-post-excerpt">{relatedPost.excerpt}</p>
                <Link
                  to={`/blog/${relatedPost.slug}`}
                  className="related-post-link"
                >
                  Read more <span className="arrow">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="blog-post-container">
      <Header />

      {/* Hero Section */}
      <div className="blog-post-hero">
        <img
          src={post.featuredImage || `/api/placeholder/1200/600`}
          alt={post.title}
          onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
            e.currentTarget.src = "/api/placeholder/1200/600";
          }}
        />
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">{post.title}</h1>
            <div className="hero-meta">
              <div className="meta-item">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM8 14C4.7 14 2 11.3 2 8C2 4.7 4.7 2 8 2C11.3 2 14 4.7 14 8C14 11.3 11.3 14 8 14ZM9 4H7V9H12V7H9V4Z"
                    fill="currentColor"
                  />
                </svg>
                {formatDate(post.date)}
              </div>
              <div className="meta-item">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8ZM8 10C5.33 10 0 11.34 0 14V16H16V14C16 11.34 10.67 10 8 10Z"
                    fill="currentColor"
                  />
                </svg>
                {post.author}
              </div>
              {post.category && (
                <div className="meta-item">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.5 2H9L8.3 1.3C8.1 1.1 7.9 1 7.7 1H2.5C1.7 1 1 1.7 1 2.5V11.5C1 12.3 1.7 13 2.5 13H13.5C14.3 13 15 12.3 15 11.5V3.5C15 2.7 14.3 2 13.5 2Z"
                      fill="currentColor"
                    />
                  </svg>
                  {post.category}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="blog-post-main">
        <div className="blog-post-content">
          <div className="content-inner">
            {/* Post Excerpt */}
            {post.excerpt && <div className="post-excerpt">{post.excerpt}</div>}

            {/* Post Body */}
            <div className="post-body">
              {post.content.split("\n\n").map((paragraph, index) => {
                // Check if the paragraph might be a heading
                if (paragraph.startsWith("# ")) {
                  return <h2 key={index}>{paragraph.substring(2)}</h2>;
                } else if (paragraph.startsWith("## ")) {
                  return <h3 key={index}>{paragraph.substring(3)}</h3>;
                } else {
                  return <p key={index}>{paragraph}</p>;
                }
              })}

              {/* Example post image - include if post has images */}
              {post.images && post.images.length > 0 && (
                <figure className="post-image">
                  <img
                    src={post.images[0].url || `/api/placeholder/800/500`}
                    alt={post.images[0].caption || post.title}
                    onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                      e.currentTarget.src = "/api/placeholder/800/500";
                    }}
                  />
                  {post.images[0].caption && (
                    <figcaption>{post.images[0].caption}</figcaption>
                  )}
                </figure>
              )}
            </div>

            {/* Author Section */}
            <div className="author-section">
              <div className="author-avatar">
                {getAuthorInitials(post.author)}
              </div>
              <div className="author-details">
                <h3>Written by {post.author}</h3>
                <p>
                  {post.authorBio ||
                    "Professional cleaning expert at P Davies Cleaning Services"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Posts Section */}
        {renderRelatedPosts()}

        {/* CTA Section */}
        <div className="cta-section">
          <h2>Need Professional Cleaning Services?</h2>
          <p>
            Let our experts handle the mess. We provide premium cleaning
            services for homes and businesses with 100% satisfaction guaranteed.
          </p>
          <Link to="/contact" className="cta-button">
            Get a Free Quote
          </Link>
        </div>

        {/* Blog Navigation */}
        <div className="blog-navigation">
          <Link to="/blog" className="back-link">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 8H1M1 8L8 15M1 8L8 1"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back to Blog
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPost;
