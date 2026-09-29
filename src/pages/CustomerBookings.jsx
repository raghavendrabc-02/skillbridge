function CustomerBookings() {
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
            <p className="eyebrow">MY BOOKINGS</p>

            <h1>Your bookings</h1>

            <p>
              Track and manage the services you have booked.
            </p>
          </div>
        </div>

        <section className="dashboard-section">
          <div className="section-header">
            <div>
              <h2>Upcoming bookings</h2>
              <p>Your scheduled services</p>
            </div>
          </div>

          <div className="booking-list">
            <div className="booking-card">
              <div className="booking-info">
                <div>
                  <h3>Personal Training Session</h3>

                  <p>
                    Provider: Rahul Fitness
                  </p>

                  <p>
                    Monday, 10:00 AM
                  </p>

                  <p>
                    ₹800
                  </p>
                </div>

                <span className="booking-status confirmed">
                  Confirmed
                </span>
              </div>

              <div className="booking-actions">
                <button className="secondary-btn">
                  View Details
                </button>

                <button className="secondary-btn">
                  Cancel Booking
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="dashboard-section">
          <div className="section-header">
            <div>
              <h2>Past bookings</h2>
              <p>Your completed services</p>
            </div>
          </div>

          <div className="booking-list">
            <div className="booking-card">
              <div className="booking-info">
                <div>
                  <h3>Career Coaching Session</h3>

                  <p>
                    Provider: Priya Career Coaching
                  </p>

                  <p>
                    August 20, 2026
                  </p>

                  <p>
                    ₹1,200
                  </p>
                </div>

                <span className="booking-status completed">
                  Completed
                </span>
              </div>

              <div className="booking-actions">
                <button className="primary-btn">
                  Leave Review
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default CustomerBookings