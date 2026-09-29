function AdminDashboard() {
  return (
    <div className="dashboard-page">
      <nav className="navbar">
        <a href="/" className="logo">
          SkillBridge
        </a>

        <div className="nav-links">
          <a href="/admin/dashboard">
            Dashboard
          </a>

          <a href="/services">
            Services
          </a>

          <a href="/login">
            Logout
          </a>
        </div>
      </nav>

      <main className="dashboard-container">

        <div className="dashboard-header">
          <div>
            <p className="eyebrow">
              ADMINISTRATION
            </p>

            <h1>
              Admin Dashboard
            </h1>

            <p>
              Manage users, providers, services and platform activity.
            </p>
          </div>
        </div>

        <section className="stats-grid">

          <div className="stat-card">
            <span>
              Total Users
            </span>

            <strong>
              1,248
            </strong>

            <p>
              Registered users
            </p>
          </div>

          <div className="stat-card">
            <span>
              Providers
            </span>

            <strong>
              186
            </strong>

            <p>
              Active providers
            </p>
          </div>

          <div className="stat-card">
            <span>
              Active Services
            </span>

            <strong>
              342
            </strong>

            <p>
              Services available
            </p>
          </div>

          <div className="stat-card">
            <span>
              Total Bookings
            </span>

            <strong>
              2,846
            </strong>

            <p>
              Platform bookings
            </p>
          </div>

        </section>

        <section className="dashboard-section">

          <div className="section-header">

            <div>
              <p className="eyebrow">
                PLATFORM ACTIVITY
              </p>

              <h2>
                Recent activity
              </h2>

              <p>
                Latest activity across SkillBridge.
              </p>
            </div>

          </div>

          <div className="booking-list">

            <div className="booking-card">

              <div className="booking-info">

                <div>

                  <span className="booking-status confirmed">
                    New
                  </span>

                  <h3>
                    New provider registered
                  </h3>

                  <p>
                    Rahul Fitness joined SkillBridge.
                  </p>

                  <p>
                    10 minutes ago
                  </p>

                </div>

              </div>

            </div>

            <div className="booking-card">

              <div className="booking-info">

                <div>

                  <span className="booking-status confirmed">
                    Service
                  </span>

                  <h3>
                    New service created
                  </h3>

                  <p>
                    Personal Training Session
                  </p>

                  <p>
                    32 minutes ago
                  </p>

                </div>

              </div>

            </div>

            <div className="booking-card">

              <div className="booking-info">

                <div>

                  <span className="booking-status completed">
                    Completed
                  </span>

                  <h3>
                    Booking completed
                  </h3>

                  <p>
                    Career Coaching Session
                  </p>

                  <p>
                    1 hour ago
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>

        <section className="dashboard-section">

          <div className="section-header">

            <div>
              <p className="eyebrow">
                ADMIN TOOLS
              </p>

              <h2>
                Management
              </h2>

              <p>
                Basic platform management actions.
              </p>
            </div>

          </div>

          <div className="dashboard-actions">

            <a
              href="/services"
              className="secondary-btn"
            >
              Manage Services
            </a>

            <button
              type="button"
              className="secondary-btn"
            >
              Manage Users
            </button>

            <button
              type="button"
              className="secondary-btn"
            >
              Manage Providers
            </button>

            <button
              type="button"
              className="secondary-btn"
            >
              Review Reports
            </button>

          </div>

        </section>

      </main>
    </div>
  )
}

export default AdminDashboard