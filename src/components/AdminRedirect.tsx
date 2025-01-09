import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminRedirect: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to WordPress admin login page
    window.location.href = "http://localhost/wordpress/wp-admin";
  }, [navigate]);

  return (
    <div className="redirect-message">
      <p>Redirecting to WordPress Admin Login...</p>
    </div>
  );
};

export default AdminRedirect;
