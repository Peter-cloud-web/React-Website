import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./BlogPost.css";

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [comments, setComments] = useState<any[]>([]);
  const [newComment, setNewComment] = useState({
    author_name: "",
    author_email: "",
    content: "",
  });
  const [commentError, setCommentError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch the blog post by slug
    fetch(
      `https://pdaviescleaningservices.netlify.app//wordpress/wp-json/wp/v2/posts?slug=${slug}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch blog post");
        }
        return response.json();
      })
      .then((data) => {
        if (data.length > 0) {
          setPost(data[0]);
          // Fetch comments for the post
          fetch(
            `https://pdaviescleaningservices.netlify.app//wordpress/wp-json/wp/v2/comments?post=${data[0].id}`
          )
            .then((response) => response.json())
            .then((commentsData) => setComments(commentsData))
            .catch((error) => console.error("Error fetching comments:", error));
        } else {
          throw new Error("Post not found");
        }
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [slug]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewComment((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault();
    setCommentError(null);
    try {
      const response = await fetch(
        `https://pdaviescleaningservices.netlify.app//wordpress/wp-json/wp/v2/comments`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            post: post.id,
            author_name: newComment.author_name,
            author_email: newComment.author_email,
            content: newComment.content,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit comment");
      }

      const commentData = await response.json();
      setComments((prev) => [commentData, ...prev]); // Add new comment to the list
      setNewComment({ author_name: "", author_email: "", content: "" }); // Reset form
    } catch (error) {
      setCommentError("Failed to submit comment. Please try again.");
      console.error("Error submitting comment:", error);
    }
  };

  if (loading) {
    return (
      <div className="loader">
        <div className="loader-spinner"></div>
      </div>
    );
  }

  if (error) {
    return <div className="error-message">Error: {error}</div>;
  }

  return (
    <div className="blog-container">
      <Header />
      <main className="blog-content">
        <div className="blog-post">
          <h1 className="post-title">{post.title.rendered}</h1>
          <div className="post-meta">
            <span className="post-date">
              Published on: {new Date(post.date).toLocaleDateString()}
            </span>
            <span className="post-author">By Admin</span>
          </div>
          <div
            className="post-content"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />
        </div>

        {/* Comments Section */}
        <div className="comments-section">
          <h3>Comments</h3>

          {/* Comment Form */}
          <form onSubmit={handleSubmitComment} className="comment-form">
            <input
              type="text"
              name="author_name"
              placeholder="Your Name"
              value={newComment.author_name}
              onChange={handleInputChange}
              required
            />
            <input
              type="email"
              name="author_email"
              placeholder="Your Email"
              value={newComment.author_email}
              onChange={handleInputChange}
              required
            />
            <textarea
              name="content"
              placeholder="Your Comment"
              value={newComment.content}
              onChange={handleInputChange}
              required
            />
            <button type="submit">Submit Comment</button>
          </form>

          {commentError && <div className="comment-error">{commentError}</div>}

          {/* Display Comments */}
          {comments.length > 0 ? (
            comments.map((comment) => (
              <div key={comment.id} className="comment">
                <div className="comment-author">{comment.author_name}</div>
                <div
                  className="comment-content"
                  dangerouslySetInnerHTML={{ __html: comment.content.rendered }}
                />
              </div>
            ))
          ) : (
            <p>No comments yet.</p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
