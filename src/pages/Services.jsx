function Services() {
  const services = [
    {
      title: "Personal Training",
      category: "FITNESS",
      icon: "PT",
      description:
        "Find personal trainers who can help you improve fitness, strength and overall wellness.",
      providers: "24 professionals",
      link: "/services/personal-training",
    },
    {
      title: "Consulting",
      category: "BUSINESS",
      icon: "CO",
      description:
        "Connect with experienced consultants for business and professional needs.",
      providers: "18 professionals",
      link: "/services/consulting",
    },
    {
      title: "Tutoring",
      category: "EDUCATION",
      icon: "TU",
      description:
        "Learn from skilled teachers and mentors across different subjects.",
      providers: "32 professionals",
      link: "/services/tutoring",
    },
    {
      title: "Design",
      category: "CREATIVE",
      icon: "DE",
      description:
        "Connect with talented designers and creative professionals for your projects.",
      providers: "21 professionals",
      link: "/services/design",
    },
    {
      title: "Career Coaching",
      category: "CAREER",
      icon: "CC",
      description:
        "Get guidance from experienced professionals to improve your career and skills.",
      providers: "15 professionals",
      link: "/services/career-coaching",
    },
    {
      title: "Photography",
      category: "CREATIVE",
      icon: "PH",
      description:
        "Find photographers for events, portraits and professional projects.",
      providers: "27 professionals",
      link: "/services/photography",
    },
  ]

  return (
    <div className="services-page">
      <nav className="navbar">
        <a
          href="/"
          className="logo"
          style={{ color: "#4f46e5" }}
        >
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

      <main className="services-container">

        <div className="services-header">

          <p className="eyebrow">
            SKILLBRIDGE SERVICES
          </p>

          <h1>
            Find the right service for you
          </h1>

          <p>
            Explore services from independent professionals
            and find someone who fits your needs.
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginTop: "22px",
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                color: "#4f46e5",
                background: "#eef2ff",
                padding: "7px 12px",
                borderRadius: "999px",
                fontSize: "12px",
                fontWeight: "800",
              }}
            >
              6 CATEGORIES
            </span>

            <span
              style={{
                color: "#6b7280",
                fontSize: "14px",
              }}
            >
              Find professionals ready to help
            </span>
          </div>

        </div>

        <div className="services-grid">

          {services.map((service) => (
            <article
              className="service-card"
              key={service.title}
            >

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "15px",
                  marginBottom: "22px",
                }}
              >

                <div className="service-icon">
                  {service.icon}
                </div>

                <span
                  style={{
                    color: "#6b7280",
                    fontSize: "10px",
                    fontWeight: "800",
                    letterSpacing: "1px",
                  }}
                >
                  {service.category}
                </span>

              </div>

              <h3>
                {service.title}
              </h3>

              <p>
                {service.description}
              </p>

              <div
                style={{
                  marginTop: "auto",
                  paddingTop: "20px",
                }}
              >

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "18px",
                  }}
                >

                  <span
                    style={{
                      color: "#6b7280",
                      fontSize: "13px",
                      fontWeight: "600",
                    }}
                  >
                    {service.providers}
                  </span>

                </div>

                <a
                  href={service.link}
                  className="primary-btn"
                  style={{
                    width: "100%",
                  }}
                >
                  View Professionals
                </a>

              </div>

            </article>
          ))}

        </div>

      </main>
    </div>
  )
}

export default Services