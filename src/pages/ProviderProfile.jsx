function ProviderProfile() {
  const services = [
    {
      name: "Personal Training",
      description:
        "One-on-one fitness training sessions customized to your goals.",
      price: "₹800",
      duration: "60 min",
    },
    {
      name: "Fitness Consultation",
      description:
        "Personalized fitness and wellness consultation for your goals.",
      price: "₹1,000",
      duration: "60 min",
    },
  ]

  return (
    <div className="dashboard-page">
      <nav className="navbar">
        <a href="/" className="logo">
          SkillBridge
        </a>

        <div className="nav-links">
          <a href="/services">
            Services
          </a>

          <a href="/dashboard">
            Dashboard
          </a>

          <a href="/login">
            Login
          </a>

          <a
            href="/register"
            className="nav-signup"
          >
            Sign Up
          </a>
        </div>
      </nav>

      <main className="dashboard-container">

        <div className="dashboard-header">
          <div>
            <p className="eyebrow">
              PROFESSIONAL PROFILE
            </p>

            <h1>
              Rahul Fitness
            </h1>

            <p>
              Personal Trainer · Bengaluru, Karnataka
            </p>
          </div>

          <a
            href="/services/personal-training"
            className="secondary-btn"
          >
            Back to Professionals
          </a>
        </div>

        <section className="dashboard-section">

          <div className="profile-card">

            <div className="profile-avatar">
              RF
            </div>

            <div className="profile-details">

              <h2>
                Rahul Fitness
              </h2>

              <p>
                Personal Trainer
              </p>

              <p>
                Bengaluru, Karnataka
              </p>

              <p>
                ⭐ 4.8 · 124 reviews
              </p>

            </div>

          </div>

        </section>

        <section className="dashboard-section">

          <div className="section-header">

            <div>
              <p className="eyebrow">
                ABOUT THE PROFESSIONAL
              </p>

              <h2>
                About Rahul
              </h2>

              <p>
                Certified personal trainer helping clients improve
                strength, fitness and overall health through
                personalized training sessions.
              </p>
            </div>

          </div>

        </section>

        <section className="dashboard-section">

          <div className="section-header">

            <div>
              <p className="eyebrow">
                SERVICES
              </p>

              <h2>
                Services offered
              </h2>

              <p>
                Choose a service and book a session with Rahul.
              </p>
            </div>

          </div>

          <div className="services-grid">

            {services.map((service) => (
              <div
                className="service-card"
                key={service.name}
              >

                <div className="service-card-top">

                  <div className="service-icon">
                    {service.name === "Personal Training"
                      ? "PT"
                      : "FC"}
                  </div>

                  <span className="service-active">
                    Available
                  </span>

                </div>

                <h3>
                  {service.name}
                </h3>

                <p>
                  {service.description}
                </p>

                <div className="service-details-row">

                  <div>
                    <span>
                      PRICE
                    </span>

                    <strong>
                      {service.price}
                    </strong>
                  </div>

                  <div>
                    <span>
                      DURATION
                    </span>

                    <strong>
                      {service.duration}
                    </strong>
                  </div>

                </div>

                <div className="service-card-footer">

                  <a
                    href="/booking"
                    className="primary-btn"
                  >
                    Book Service
                  </a>

                </div>

              </div>
            ))}

          </div>

        </section>

        <section className="dashboard-section">

          <div className="section-header">

            <div>
              <p className="eyebrow">
                REVIEWS
              </p>

              <h2>
                Customer reviews
              </h2>

              <p>
                ⭐ 4.8 average rating from 124 reviews
              </p>
            </div>

          </div>

          <div className="booking-list">

            <div className="booking-card">

              <div className="booking-info">

                <div>
                  <h3>
                    Excellent trainer
                  </h3>

                  <p>
                    Very professional and the sessions were
                    customized according to my fitness goals.
                  </p>

                  <p>
                    ⭐ 5.0 · Priya
                  </p>
                </div>

              </div>

            </div>

            <div className="booking-card">

              <div className="booking-info">

                <div>
                  <h3>
                    Great experience
                  </h3>

                  <p>
                    Clear guidance and very good communication
                    throughout the training sessions.
                  </p>

                  <p>
                    ⭐ 4.8 · Karan
                  </p>
                </div>

              </div>

            </div>

          </div>

        </section>

      </main>
    </div>
  )
}

export default ProviderProfile