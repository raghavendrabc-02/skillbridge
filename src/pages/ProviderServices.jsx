function ProviderServices() {
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
              PROVIDER SERVICES
            </p>

            <h1>
              Manage your services
            </h1>

            <p>
              Add, edit and manage the services you offer.
            </p>
          </div>

          <a
            href="/provider/services/new"
            className="primary-btn"
          >
            Add New Service
          </a>
        </div>

        <section className="dashboard-section">

          <div className="section-header">
            <div>
              <h2>
                Active services
              </h2>

              <p>
                Services currently available for customers to book.
              </p>
            </div>

            <span className="service-count">
              2 services
            </span>
          </div>

          <div className="services-grid">

            <div className="service-card">

              <div className="service-card-top">
                <div className="service-icon">
                  PT
                </div>

                <span className="service-active">
                  Active
                </span>
              </div>

              <h3>
                Personal Training
              </h3>

              <p>
                One-on-one fitness training sessions
                customized to the customer's goals.
              </p>

              <div className="service-details-row">

                <div>
                  <span>
                    PRICE
                  </span>

                  <strong>
                    ₹800
                  </strong>
                </div>

                <div>
                  <span>
                    DURATION
                  </span>

                  <strong>
                    60 min
                  </strong>
                </div>

              </div>

              <div className="service-card-footer">

                <button
                  type="button"
                  className="secondary-btn"
                >
                  Edit Service
                </button>

                <button
                  type="button"
                  className="delete-btn"
                >
                  Delete
                </button>

              </div>

            </div>

            <div className="service-card">

              <div className="service-card-top">
                <div className="service-icon">
                  FC
                </div>

                <span className="service-active">
                  Active
                </span>
              </div>

              <h3>
                Fitness Consultation
              </h3>

              <p>
                Personalized fitness and wellness
                consultation sessions for customers.
              </p>

              <div className="service-details-row">

                <div>
                  <span>
                    PRICE
                  </span>

                  <strong>
                    ₹1,000
                  </strong>
                </div>

                <div>
                  <span>
                    DURATION
                  </span>

                  <strong>
                    60 min
                  </strong>
                </div>

              </div>

              <div className="service-card-footer">

                <button
                  type="button"
                  className="secondary-btn"
                >
                  Edit Service
                </button>

                <button
                  type="button"
                  className="delete-btn"
                >
                  Delete
                </button>

              </div>

            </div>

          </div>

        </section>

        <section className="dashboard-section">

          <div className="section-header">
            <div>
              <p className="eyebrow">
                SERVICE MANAGEMENT
              </p>

              <h2>
                Before you add a service
              </h2>

              <p>
                Make sure your service information is clear
                and easy for customers to understand.
              </p>
            </div>
          </div>

          <div className="info-grid">

            <div className="info-card">
              <div className="info-icon">
                01
              </div>

              <h3>
                Clear service name
              </h3>

              <p>
                Use a simple name that tells customers
                exactly what you provide.
              </p>
            </div>

            <div className="info-card">
              <div className="info-icon">
                02
              </div>

              <h3>
                Set your pricing
              </h3>

              <p>
                Add the price customers will pay for
                each session or service.
              </p>
            </div>

            <div className="info-card">
              <div className="info-icon">
                03
              </div>

              <h3>
                Keep availability updated
              </h3>

              <p>
                Customers can only book services during
                your available time slots.
              </p>
            </div>

          </div>

        </section>

      </main>
    </div>
  )
}

export default ProviderServices