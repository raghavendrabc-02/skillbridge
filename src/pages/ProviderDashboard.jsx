function ProviderDashboard() {
  return (
    <div className="dashboard-page">
      <nav className="navbar">
        <a href="/" className="logo">
          SkillBridge
        </a>

        <div className="nav-links">
          <a href="/provider/dashboard">Dashboard</a>
          <a href="/provider/services">Services</a>
          <a href="/provider/availability">Availability</a>
          <a href="/provider/bookings">Bookings</a>
          <a href="/provider/profile">Profile</a>
          <a href="/login">Logout</a>
        </div>
      </nav>

      <main className="dashboard-container">

        <div className="dashboard-header">
          <div>
            <p className="eyebrow">
              PROVIDER DASHBOARD
            </p>

            <h1>
              Welcome back, Arjun
            </h1>

            <p>
              Manage your services, availability and bookings.
            </p>
          </div>

          <a
            href="/provider/services"
            className="primary-btn"
          >
            Manage Services
          </a>
        </div>

        <div className="stats-grid">

          <div className="stat-card">
            <span>
              Active Services
            </span>

            <strong>
              2
            </strong>

            <p>
              Services currently listed
            </p>
          </div>

          <div className="stat-card">
            <span>
              Upcoming
            </span>

            <strong>
              5
            </strong>

            <p>
              Upcoming bookings
            </p>
          </div>

          <div className="stat-card">
            <span>
              Rating
            </span>

            <strong>
              4.9
            </strong>

            <p>
              Average customer rating
            </p>
          </div>

        </div>

        <section className="dashboard-section">

          <div className="section-header">
            <div>
              <p className="eyebrow">
                BOOKINGS
              </p>

              <h2>
                Upcoming bookings
              </h2>

              <p>
                Your next scheduled customer sessions
              </p>
            </div>

            <a
              href="/provider/bookings"
              className="secondary-btn"
            >
              View all
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
                    Customer: Raghavendra
                  </p>
                </div>

                <div className="service-meta">

                  <div className="meta-item">
                    <span>
                      DATE
                    </span>

                    <strong>
                      15 Oct 2026
                    </strong>

                    <small>
                      Thursday
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
                      EARNINGS
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
                    Customer: Ananya
                  </p>
                </div>

                <div className="service-meta">

                  <div className="meta-item">
                    <span>
                      DATE
                    </span>

                    <strong>
                      16 Oct 2026
                    </strong>

                    <small>
                      Friday
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
                      EARNINGS
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

            <div className="booking-card">

              <div className="booking-info">

                <div>
                  <span className="booking-status pending">
                    Pending
                  </span>

                  <h3>
                    Fitness Consultation
                  </h3>

                  <p>
                    Customer: Rahul
                  </p>
                </div>

                <div className="service-meta">

                  <div className="meta-item">
                    <span>
                      DATE
                    </span>

                    <strong>
                      17 Oct 2026
                    </strong>

                    <small>
                      Saturday
                    </small>
                  </div>

                  <div className="meta-item">
                    <span>
                      TIME
                    </span>

                    <strong>
                      11:00 AM
                    </strong>

                    <small>
                      60 min
                    </small>
                  </div>

                  <div className="meta-item">
                    <span>
                      EARNINGS
                    </span>

                    <strong>
                      ₹1,000
                    </strong>

                    <small>
                      Per session
                    </small>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

        <section className="dashboard-section">

          <div className="section-header">
            <div>
              <p className="eyebrow">
                YOUR SERVICES
              </p>

              <h2>
                Active services
              </h2>

              <p>
                Services currently available for customers
              </p>
            </div>

            <a
              href="/provider/services"
              className="secondary-btn"
            >
              Manage services
            </a>
          </div>

          <div className="services-grid">

            <div className="service-card">

              <div className="service-icon">
                PT
              </div>

              <h3>
                Personal Training
              </h3>

              <p>
                One-on-one fitness training sessions
                designed around customer goals.
              </p>

              <div className="service-card-footer">
                <span className="service-price">
                  ₹800 / session
                </span>

                <a
                  href="/provider/services"
                  className="secondary-btn"
                >
                  Manage
                </a>
              </div>

            </div>

            <div className="service-card">

              <div className="service-icon">
                FC
              </div>

              <h3>
                Fitness Consultation
              </h3>

              <p>
                Personalized fitness and wellness
                guidance for customers.
              </p>

              <div className="service-card-footer">
                <span className="service-price">
                  ₹1,000 / session
                </span>

                <a
                  href="/provider/services"
                  className="secondary-btn"
                >
                  Manage
                </a>
              </div>

            </div>

          </div>

        </section>

      </main>
    </div>
  )
}

export default ProviderDashboard