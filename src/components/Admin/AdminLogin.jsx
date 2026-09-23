
import React, { useState } from "react";
import { supabase } from "../../database";
import "./AdminLogin.css";

function AdminLogin({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    const { data, error } =
      await supabase.auth.signInWithPassword({
        email,
        password,
      });

    setLoading(false);

    if (error) {
      setError("Email ya password incorrect hai.");
      return;
    }

    onLogin(data.user);
  };

  return (
    <section className="admin-login-section">

      {/* Luxury Background Branding */}
      <div className="admin-login-branding">

        <div className="admin-brand-symbol">
          R
        </div>

        <p className="admin-brand-name">
          RAYA AL QURUM
        </p>

        <p className="admin-brand-location">
          MUSCAT · OMAN
        </p>

        <div className="admin-brand-line"></div>

        <p className="admin-brand-tagline">
          Luxury Living.
          <br />
          Lasting Value.
        </p>

      </div>

      {/* Admin Login Panel */}
      <div className="admin-login-box">

        <p className="admin-login-label">
          RAYA AL QURUM
        </p>

        <h1>Admin Login</h1>

        <p className="admin-login-description">
          Login to view website enquiries.
        </p>

        <form
          onSubmit={handleLogin}
          className="admin-login-form"
        >

          <label htmlFor="admin-email">
            Email Address
          </label>

          <input
            id="admin-email"
            type="email"
            placeholder="Enter admin email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            required
          />

          <label htmlFor="admin-password">
            Password
          </label>

          <input
            id="admin-password"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            required
          />

          {error && (
            <p
              className="admin-login-error"
              role="alert"
            >
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>

      </div>

    </section>
  );
}

export default AdminLogin;