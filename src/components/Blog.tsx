import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Blog.css";
import Header from "./Header";
import Footer from "./Footer";

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch blog posts with embedded featured media
    fetch(
      "https://pdaviescleaningservices.netlify.app/wordpress/wp-json/wp/v2/posts?_embed"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch blog posts");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Posts Data:", data); // Debugging
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  // Function to extract the first image URL from the post content
  const getFirstImageUrl = (content: string) => {
    const imgRegex = /<img[^>]+src="([^">]+)"/;
    const match = content.match(imgRegex);
    return match ? match[1] : null;
  };

  if (loading) {
    return <div className="loading-message">Loading...</div>;
  }

  if (error) {
    return <div className="error-message">Error: {error}</div>;
  }

  return (
    <div className="blog-container">
      <Header />
      <main className="blog-content">
        {posts.length > 0 ? (
          posts.map((post) => {
            const imageUrl =
              post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
              getFirstImageUrl(post.content.rendered);

            return (
              <div key={post.id} className="blog-post">
                {/* Display Featured Image */}
                {imageUrl && (
                  <div className="post-image-container">
                    <img
                      src={imageUrl}
                      alt={post.title.rendered}
                      className="post-image"
                    />
                  </div>
                )}
                <div className="post-content">
                  <h2 className="post-title">{post.title.rendered}</h2>
                  <div className="post-meta">
                    <span className="post-date">
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <span className="post-author">By Admin</span>
                  </div>
                  <div
                    className="post-excerpt"
                    dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                  />
                  <Link to={`/blog/${post.slug}`} className="read-more">
                    Read More
                  </Link>
                </div>
              </div>
            );
          })
        ) : (
          <div className="blog-message">
            <p className="message-text">
              Sorry, we are currently curating blogs and cleaning tips which
              will be up soon. Stay updated!
            </p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
