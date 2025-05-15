import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { getAllBlogPosts } from "./blogPosts";
import { BlogPost as BlogPostType } from "./Blog"; // Import from Blog.tsx
import "./BlogPost.css";

const BlogPost: React.FC = () => {
  // Use the correct type for useParams
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      // Find the post by slug
      const posts = getAllBlogPosts();
      const foundPost = posts.find((p) => p.slug === slug);

      if (foundPost) {
        setPost(foundPost);
      } else {
        setError("Blog post not found.");
      }
    } catch (err) {
      setError("Failed to load blog post.");
      console.error("Error loading blog post:", err);
    } finally {
      setLoading(false);
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="blog-post-loading">
        <Header />
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading article...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="blog-post-error">
        <Header />
        <div className="error-container">
          <h2>Oops!</h2>
          <p>{error || "Something went wrong."}</p>
          <Link to="/blog" className="back-button">
            Return to Blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Handle related posts safely
  const relatedPosts = post.relatedPosts || [];

  return (
    <div className="blog-post-container">
      <Header />

      <main className="blog-post-content">
        <article className="single-post">
          <header className="post-header">
            <div className="post-meta">
              <div className="post-categories">
                <span className="post-category">{post.category}</span>
              </div>
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>

            <h1 className="post-title">{post.title}</h1>

            <div className="post-author-info">
              <div className="author-avatar">
                {/* Add author avatar if available */}
                <img src="/api/placeholder/50/50" alt={post.author} />
              </div>
              <div className="author-details">
                <span className="author-name">By {post.author}</span>
                <span className="post-location">{post.location}</span>
              </div>
            </div>
          </header>

          <div className="post-featured-image">
            {post.images && post.images.length > 0 ? (
              <figure>
                <img
                  src={post.images[0].url || `/api/placeholder/800/500`}
                  alt={post.images[0].caption || post.title}
                  className="featured-image"
                />
                {post.images[0].caption && (
                  <figcaption>{post.images[0].caption}</figcaption>
                )}
              </figure>
            ) : (
              <img
                src={`/api/placeholder/800/500`}
                alt={post.title}
                className="featured-image"
              />
            )}
          </div>

          <div className="post-body">
            <div
              className="post-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>

          <footer className="post-footer">
            <div className="post-tags">
              {post.tags &&
                post.tags.map((tag: string, idx: number) => (
                  <span key={idx} className="post-tag">
                    #{tag}
                  </span>
                ))}
            </div>

            <div className="author-bio">
              <h3>About the Author</h3>
              <p>
                {post.authorBio ||
                  `${post.author} is a cleaning expert at P Davies Cleaning Services with years of experience in professional cleaning techniques and solutions.`}
              </p>
            </div>
          </footer>
        </article>

        {relatedPosts.length > 0 && (
          <div className="related-posts">
            <h3>Related Articles</h3>
            <div className="related-posts-grid">
              {relatedPosts.map((relatedPost) => (
                <div key={relatedPost.id} className="related-post-card">
                  <img
                    src={`/api/placeholder/300/200`}
                    alt={relatedPost.title}
                    className="related-post-image"
                  />
                  <h4>{relatedPost.title}</h4>
                  <Link to={`/blog/${relatedPost.slug}`}>Read more</Link>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="back-to-blog">
          <Link to="/blog" className="back-button">
            ← Back to Blog
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
