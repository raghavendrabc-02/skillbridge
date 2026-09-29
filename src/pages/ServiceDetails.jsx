function ServiceDetails() {
  const providers = [
    {
      initials: "AS",
      name: "Arjun Sharma",
      title: "Certified Personal Trainer",
      location: "Bengaluru, Karnataka",
      rating: "4.9",
      reviews: "120 reviews",
      price: "₹800",
      description:
        "Helps clients improve strength, fitness and overall wellness through personalized training programs.",
      link: "/provider/profile",
    },
    {
      initials: "RF",
      name: "Rahul Fitness",
      title: "Personal Trainer",
      location: "Bengaluru, Karnataka",
      rating: "4.8",
      reviews: "124 reviews",
      price: "₹700",
      description:
        "Personalized fitness sessions focused on strength, mobility and sustainable fitness habits.",
      link: "/provider/profile",
    },
    {
      initials: "AK",
      name: "Ananya Kumar",
      title: "Fitness Coach",
      location: "Bengaluru, Karnataka",
      rating: "4.7",
      reviews: "89 reviews",
      price: "₹900",
      description:
        "Fitness coaching for beginners and experienced clients with customized workout plans.",
      link: "/provider/profile",
    },
    {
      initials: "VK",
      name: "Vikram Kumar",
      title: "Strength & Conditioning Coach",
      location: "Bengaluru, Karnataka",
      rating: "4.8",
      reviews: "76 reviews",
      price: "₹1,000",
      description:
        "Strength and conditioning sessions designed around individual fitness goals and performance.",
      link: "/provider/profile",
    },
  ]

  return (
    <div className="service-details-page">
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

      <main className="service-details-container">

        <div className="service-details-header">

          <p className="eyebrow">
            FITNESS · PERSONAL TRAINING
          </p>

          <h1>
            Find a personal trainer
          </h1>

          <p className="service-description">
            Compare professionals, explore their experience and
            choose a trainer that fits your goals, budget and schedule.
          </p>

        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "20px",
            marginBottom: "24px",
            flexWrap: "wrap",
          }}
        >

          <div>
            <strong
              style={{
                color: "#111827",
                fontSize: "16px",
              }}
            >
              24 professionals
            </strong>

            <span
              style={{
                color: "#6b7280",
                fontSize: "14px",
                marginLeft: "8px",
              }}
            >
              available in this category
            </span>
          </div>

          <select
            defaultValue="recommended"
            style={{
              minHeight: "42px",
              padding: "0 12px",
              border: "1px solid #d1d5db",
              borderRadius: "8px",
              background: "#ffffff",
              color: "#111827",
              fontSize: "14px",
            }}
          >
            <option value="recommended">
              Recommended
            </option>

            <option value="rating">
              Highest Rated
            </option>

            <option value="price-low">
              Price: Low to High
            </option>

            <option value="price-high">
              Price: High to Low
            </option>
          </select>

        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
          }}
        >

          {providers.map((provider) => (
            <article
              key={provider.name}
              style={{
                background: "#ffffff",
                border: "1px solid #e5e7eb",
                borderRadius: "14px",
                padding: "24px",
                boxShadow: "0 8px 25px rgba(15, 23, 42, 0.04)",
              }}
            >

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "24px",
                  flexWrap: "wrap",
                }}
              >

                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "18px",
                    flex: "1 1 500px",
                  }}
                >

                  <div
                    className="provider-avatar"
                    style={{
                      flexShrink: 0,
                    }}
                  >
                    {provider.initials}
                  </div>

                  <div>
                    <p
                      style={{
                        margin: "0 0 5px",
                        color: "#6b7280",
                        fontSize: "11px",
                        fontWeight: "800",
                        letterSpacing: "1px",
                      }}
                    >
                      PROFESSIONAL
                    </p>

                    <h2
                      style={{
                        margin: "0 0 5px",
                        color: "#111827",
                        fontSize: "22px",
                      }}
                    >
                      {provider.name}
                    </h2>

                    <p
                      style={{
                        margin: "0 0 8px",
                        color: "#4b5563",
                        fontSize: "14px",
                      }}
                    >
                      {provider.title}
                    </p>

                    <p
                      style={{
                        margin: "0 0 8px",
                        color: "#6b7280",
                        fontSize: "13px",
                      }}
                    >
                      {provider.location}
                    </p>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        flexWrap: "wrap",
                      }}
                    >
                      <strong
                        style={{
                          color: "#111827",
                          fontSize: "14px",
                        }}
                      >
                        ★ {provider.rating}
                      </strong>

                      <span
                        style={{
                          color: "#6b7280",
                          fontSize: "13px",
                        }}
                      >
                        ·
                      </span>

                      <span
                        style={{
                          color: "#6b7280",
                          fontSize: "13px",
                        }}
                      >
                        {provider.reviews}
                      </span>
                    </div>
                  </div>

                </div>

                <div
                  style={{
                    flex: "1 1 280px",
                    maxWidth: "420px",
                  }}
                >

                  <p
                    style={{
                      margin: "0 0 16px",
                      color: "#6b7280",
                      fontSize: "14px",
                      lineHeight: "1.6",
                    }}
                  >
                    {provider.description}
                  </p>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "18px",
                      flexWrap: "wrap",
                    }}
                  >

                    <div>
                      <span
                        style={{
                          display: "block",
                          color: "#6b7280",
                          fontSize: "10px",
                          fontWeight: "800",
                          letterSpacing: "1px",
                          marginBottom: "4px",
                        }}
                      >
                        STARTING FROM
                      </span>

                      <strong
                        style={{
                          color: "#111827",
                          fontSize: "18px",
                        }}
                      >
                        {provider.price}
                      </strong>

                      <span
                        style={{
                          color: "#6b7280",
                          fontSize: "13px",
                          marginLeft: "5px",
                        }}
                      >
                        / session
                      </span>
                    </div>

                    <a
                      href={provider.link}
                      className="primary-btn"
                    >
                      View Profile
                    </a>

                  </div>

                </div>

              </div>

            </article>
          ))}

        </div>

      </main>
    </div>
  )
}

export default ServiceDetails