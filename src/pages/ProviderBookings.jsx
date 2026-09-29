function ProviderBookings() {
  return (
    <div className="dashboard-page">
      <nav className="navbar">
        <a href="/" className="logo">
          SkillBridge
        </a>

        <div className="nav-links">
          <a href="/provider/dashboard">
            Dashboard
          </a>

          <a href="/provider/services">
            Services
          </a>

          <a href="/provider/availability">
            Availability
          </a>

          <a href="/provider/bookings">
            Bookings
          </a>

          <a href="/provider/profile">
            Profile
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
              PROVIDER BOOKINGS
            </p>

            <h1>
              Manage your bookings
            </h1>

            <p>
              Review customer bookings and manage their status.
            </p>
          </div>
        </div>

        <div className="stats-grid">

          <div className="stat-card">
            <span>
              Pending
            </span>

            <strong>
              1
            </strong>

            <p>
              Booking needs your action
            </p>
          </div>

          <div className="stat-card">
            <span>
              Confirmed
            </span>

            <strong>
              1
            </strong>

            <p>
              Upcoming bookings
            </p>
          </div>

          <div className="stat-card">
            <span>
              Completed
            </span>

            <strong>
              1
            </strong>

            <p>
              Completed bookings
            </p>
          </div>

        </div>

        <section className="dashboard-section">

          <div className="section-header">
            <div>
              <p className="eyebrow">
                BOOKING MANAGEMENT
              </p>

              <h2>
                Recent bookings
              </h2>

              <p>
                Review and manage bookings for your services.
              </p>
            </div>
          </div>

          <div className="booking-list">

            <div className="booking-card">

              <div className="booking-info">
                <div>
                  <span className="booking-status pending">
                    Pending
                  </span>

                  <h3>
                    Personal Training Session
                  </h3>

                  <p>
                    Customer: Rahul Sharma
                  </p>

                  <p>
                    Monday, 10:00 AM
                  </p>
                </div>
              </div>

              <div className="service-meta">

                <div className="meta-item">
                  <span>
                    DATE
                  </span>

                  <strong>
                    12 Oct 2026
                  </strong>

                  <small>
                    Monday
                  </small>
                </div>

                <div className="meta-item">
                  <span>
                    TIME
                  </span>

                  <strong>
                    10:00 AM
                  </strong>

                  <small>
                    60 min
                  </small>
                </div>

                <div className="meta-item">
                  <span>
                    PRICE
                  </span>

                  <strong>
                    ₹800
                  </strong>

                  <small>
                    Per session
                  </small>
                </div>

              </div>

              <div className="booking-actions">

                <button
                  type="button"
                  className="primary-btn"
                >
                  Accept
                </button>

                <button
                  type="button"
                  className="secondary-btn"
                >
                  Reject
                </button>

              </div>

            </div>

            <div className="booking-card">

              <div className="booking-info">
                <div>
                  <span className="booking-status confirmed">
                    Confirmed
                  </span>

                  <h3>
                    Personal Training Session
                  </h3>

                  <p>
                    Customer: Ananya Rao
                  </p>

                  <p>
                    Tuesday, 4:00 PM
                  </p>
                </div>
              </div>

              <div className="service-meta">

                <div className="meta-item">
                  <span>
                    DATE
                  </span>

                  <strong>
                    13 Oct 2026
                  </strong>

                  <small>
                    Tuesday
                  </small>
                </div>

                <div className="meta-item">
                  <span>
                    TIME
                  </span>

                  <strong>
                    4:00 PM
                  </strong>

                  <small>
                    60 min
                  </small>
                </div>

                <div className="meta-item">
                  <span>
                    PRICE
                  </span>

                  <strong>
                    ₹800
                  </strong>

                  <small>
                    Per session
                  </small>
                </div>

              </div>

              <div className="booking-actions">

                <button
                  type="button"
                  className="primary-btn"
                >
                  Mark Completed
                </button>

              </div>

            </div>

            <div className="booking-card">

              <div className="booking-info">
                <div>
                  <span className="booking-status completed">
                    Completed
                  </span>

                  <h3>
                    Personal Training Session
                  </h3>

                  <p>
                    Customer: Arjun Kumar
                  </p>

                  <p>
                    Wednesday, 6:00 PM
                  </p>
                </div>
              </div>

              <div className="service-meta">

                <div className="meta-item">
                  <span>
                    DATE
                  </span>

                  <strong>
                    14 Oct 2026
                  </strong>

                  <small>
                    Wednesday
                  </small>
                </div>

                <div className="meta-item">
                  <span>
                    TIME
                  </span>

                  <strong>
                    6:00 PM
                  </strong>

                  <small>
                    60 min
                  </small>
                </div>

                <div className="meta-item">
                  <span>
                    PRICE
                  </span>

                  <strong>
                    ₹800
                  </strong>

                  <small>
                    Per session
                  </small>
                </div>

              </div>

            </div>

          </div>

        </section>

      </main>
    </div>
  )
}

export default ProviderBookings