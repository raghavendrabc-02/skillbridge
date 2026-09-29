function CustomerDashboard() {
  return (
    <div className="dashboard-page">
      <nav className="navbar">
        <a href="/" className="logo">
          SkillBridge
        </a>

        <div className="nav-links">
          <a href="/services">Services</a>
          <a href="/dashboard">Dashboard</a>
          <a href="/bookings">My Bookings</a>
          <a href="/profile">Profile</a>
          <a href="/login">Logout</a>
        </div>
      </nav>

      <main className="dashboard-container">

        <div className="dashboard-header">
          <div>
            <p className="eyebrow">
              CUSTOMER DASHBOARD
            </p>

            <h1>
              Welcome back, Raghav
            </h1>

            <p>
              Manage your bookings and discover new services.
            </p>
          </div>

          <a
            href="/services"
            className="primary-btn"
          >
            Find a Service
          </a>
        </div>

        <div className="stats-grid">

          <div className="stat-card">
            <span>Upcoming</span>
            <strong>1</strong>
            <p>Upcoming booking</p>
          </div>

          <div className="stat-card">
            <span>Completed</span>
            <strong>4</strong>
            <p>Completed bookings</p>
          </div>

          <div className="stat-card">
            <span>Reviews</span>
            <strong>3</strong>
            <p>Reviews submitted</p>
          </div>

        </div>

        <section className="dashboard-section">

          <div className="section-header">
            <div>
              <p className="eyebrow">
                UPCOMING
              </p>

              <h2>
                Your upcoming booking
              </h2>

              <p>
                Your next scheduled service
              </p>
            </div>

            <a
              href="/services"
              className="secondary-btn"
            >
              Browse services
            </a>
          </div>

          <div className="booking-list">

            <div className="booking-card">

              <div className="booking-info">

                <div>
                  <span className="booking-status confirmed">
                    Confirmed
                  </span>

                  <h3>
                    Personal Training
                  </h3>

                  <p>
                    With Arjun Sharma
                  </p>

                  <p>
                    Certified Personal Trainer
                  </p>
                </div>

              </div>

              <div className="service-meta">

                <div className="meta-item">
                  <span>Date</span>

                  <strong>
                    15 Oct 2026
                  </strong>

                  <small>
                    Thursday
                  </small>
                </div>

                <div className="meta-item">
                  <span>Time</span>

                  <strong>
                    10:00 AM
                  </strong>

                  <small>
                    60 min session
                  </small>
                </div>

                <div className="meta-item">
                  <span>Price</span>

                  <strong>
                    ₹800
                  </strong>

                  <small>
                    Per session
                  </small>
                </div>

              </div>

              <div className="booking-actions">

                <a
                  href="/bookings"
                  className="secondary-btn"
                >
                  View Booking
                </a>

              </div>

            </div>

          </div>

        </section>

        <section className="dashboard-section">

          <div className="section-header">
            <div>
              <p className="eyebrow">
                RECENT
              </p>

              <h2>
                Recent bookings
              </h2>

              <p>
                Your recently completed services
              </p>
            </div>
          </div>

          <div className="booking-list">

            <div className="booking-card">

              <div className="booking-info">

                <div>
                  <h3>
                    Career Coaching
                  </h3>

                  <p>
                    With Priya Nair
                  </p>
                </div>

                <div>
                  <span className="booking-status completed">
                    Completed
                  </span>
                </div>

              </div>

              <div className="booking-actions">

                <strong>
                  ₹1,200
                </strong>

              </div>

            </div>

            <div className="booking-card">

              <div className="booking-info">

                <div>
                  <h3>
                    Design Consultation
                  </h3>

                  <p>
                    With Rahul Mehta
                  </p>
                </div>

                <div>
                  <span className="booking-status completed">
                    Completed
                  </span>
                </div>

              </div>

              <div className="booking-actions">

                <strong>
                  ₹900
                </strong>

              </div>

            </div>

          </div>

        </section>

      </main>
    </div>
  )
}

export default CustomerDashboard