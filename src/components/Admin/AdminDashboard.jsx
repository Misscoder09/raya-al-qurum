import React, { useEffect, useState } from "react";
import { supabase } from "../../database";
import "./AdminDashboard.css";

function AdminDashboard({ user }) {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [deletingId, setDeletingId] = useState(null);

  // Fetch enquiries from Supabase
  const fetchEnquiries = async () => {
    setLoading(true);
    setError("");

    const { data, error } = await supabase
      .from("enquiries")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      setError("Enquiries load nahi ho rahi hain.");
      console.error(error);
    } else {
      setEnquiries(data || []);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchEnquiries();
  }, []);

  // Delete enquiry
  const handleDelete = async (enquiryId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this enquiry?"
    );

    if (!confirmed) return;

    setDeletingId(enquiryId);
    setError("");

    const { error: deleteError } = await supabase
      .from("enquiries")
      .delete()
      .eq("id", enquiryId);

    if (deleteError) {
      console.error(deleteError);
      setError("Enquiry delete nahi ho rahi. Please try again.");
      setDeletingId(null);
      return;
    }

    setEnquiries((currentEnquiries) =>
      currentEnquiries.filter((enquiry) => enquiry.id !== enquiryId)
    );

    setDeletingId(null);
  };

  // Logout
  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.reload();
  };

  const totalEnquiries = enquiries.length;

  const latestEnquiry =
    enquiries.length > 0 ? enquiries[0] : null;

  return (
    <section className="admin-dashboard-section">

      {/* =====================================
          HEADER
      ===================================== */}

      <header className="admin-dashboard-header">

        <div className="admin-dashboard-heading">

          <p className="admin-dashboard-label">
            RAYA AL QURUM
          </p>

          <h1>Enquiry Dashboard</h1>

          <div className="admin-heading-line"></div>

          <p className="admin-dashboard-welcome">
            Manage your website enquiries with ease.
          </p>

          <p className="admin-dashboard-email">
            Logged in as: {user?.email}
          </p>

        </div>

        <button
          type="button"
          className="admin-logout-button"
          onClick={handleLogout}
        >
          Logout
        </button>

      </header>


      {/* =====================================
          OVERVIEW
      ===================================== */}

      <div className="admin-overview-grid">

        {/* Total Enquiries */}

        <div className="admin-overview-card">

          <div className="admin-overview-icon">
            <span>01</span>
          </div>

          <div className="admin-overview-details">

            <p className="admin-overview-label">
              TOTAL ENQUIRIES
            </p>

            <h3>{totalEnquiries}</h3>

            <p className="admin-overview-note">
              All website enquiries
            </p>

          </div>

        </div>


        {/* Latest Enquiry */}

        <div className="admin-overview-card">

          <div className="admin-overview-icon">
            <span>02</span>
          </div>

          <div className="admin-overview-details">

            <p className="admin-overview-label">
              LATEST ENQUIRY
            </p>

            <h3>
              {latestEnquiry
                ? new Date(
                    latestEnquiry.created_at
                  ).toLocaleDateString()
                : "—"}
            </h3>

            <p className="admin-overview-note">
              Most recent submission
            </p>

          </div>

        </div>

      </div>


      {/* =====================================
          WEBSITE ENQUIRIES
      ===================================== */}

      <main className="admin-dashboard-content">

        <div className="admin-dashboard-title-row">

          <div className="admin-section-heading">

            <p className="admin-section-eyebrow">
              CLIENT INTEREST
            </p>

            <h2>Website Enquiries</h2>

            <p className="admin-section-description">
              View and manage enquiries received
              through your website.
            </p>

          </div>

          <button
            type="button"
            className="admin-refresh-button"
            onClick={fetchEnquiries}
            disabled={loading}
          >

            <span className="refresh-icon">
              ↻
            </span>

            {loading ? "Loading..." : "Refresh"}

          </button>

        </div>


        {/* Loading */}

        {loading && (
          <div className="admin-dashboard-message">

            <div className="admin-loading-mark"></div>

            <p>Loading enquiries...</p>

          </div>
        )}


        {/* Error */}

        {error && (
          <div className="admin-dashboard-error">
            {error}
          </div>
        )}


        {/* Empty State */}

        {!loading &&
          !error &&
          enquiries.length === 0 && (

            <div className="admin-empty-state">

              <div className="admin-empty-icon">
                ✦
              </div>

              <h3>No Enquiries Yet</h3>

              <p>
                Website enquiries will appear here
                once a visitor submits the form.
              </p>

            </div>
          )}


        {/* Enquiries Table */}

        {!loading &&
          !error &&
          enquiries.length > 0 && (

            <div className="admin-enquiries-table-wrapper">

              <table className="admin-enquiries-table">

                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Unit Type</th>
                    <th>Message</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>

                  {enquiries.map((enquiry) => (

                    <tr key={enquiry.id}>

                      <td>
                        <span className="admin-date">
                          {new Date(
                            enquiry.created_at
                          ).toLocaleString()}
                        </span>
                      </td>

                      <td>
                        <span className="admin-client-name">
                          {enquiry.full_name || "—"}
                        </span>
                      </td>

                      <td>
                        {enquiry.email || "—"}
                      </td>

                      <td>
                        {enquiry.phone || "—"}
                      </td>

                      <td>
                        <span className="admin-unit-badge">
                          {enquiry.unit_type || "—"}
                        </span>
                      </td>

                      <td>
                        <span className="admin-message-text">
                          {enquiry.message || "—"}
                        </span>
                      </td>

                      <td>
                        <button
                          type="button"
                          className="admin-delete-button"
                          onClick={() =>
                            handleDelete(enquiry.id)
                          }
                          disabled={deletingId === enquiry.id}
                        >
                          {deletingId === enquiry.id
                            ? "Deleting..."
                            : "Delete"}
                        </button>
                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>
          )}

      </main>


      {/* =====================================
          FOOTER
      ===================================== */}

      <footer className="admin-dashboard-footer">

        <p>RAYA AL QURUM</p>

        <span>
          Luxury Living. Lasting Value.
        </span>

      </footer>

    </section>
  );
}

export default AdminDashboard;