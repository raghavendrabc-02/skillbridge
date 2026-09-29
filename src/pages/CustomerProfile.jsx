function CustomerProfile() {
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
              MY PROFILE
            </p>

            <h1>
              Your profile
            </h1>

            <p>
              Manage your personal information and account details.
            </p>
          </div>
        </div>

        <section className="dashboard-section">

          <div className="profile-card">

            <div className="profile-avatar">
              RS
            </div>

            <div className="profile-details">
              <p className="eyebrow">
                CUSTOMER ACCOUNT
              </p>

              <h2>
                Rahul Sharma
              </h2>

              <p>
                rahul.sharma@example.com
              </p>

              <p>
                +91 98765 43210
              </p>

              <p>
                Bengaluru, Karnataka
              </p>
            </div>

          </div>

        </section>

        <section className="dashboard-section">

          <div className="section-header">
            <div>
              <h2>
                Personal information
              </h2>

              <p>
                Update your basic account information.
              </p>
            </div>
          </div>

          <form
            className="profile-form"
            onSubmit={(event) => {
              event.preventDefault()
            }}
          >

            <div className="form-group">
              <label htmlFor="full-name">
                Full name
              </label>

              <input
                id="full-name"
                type="text"
                defaultValue="Rahul Sharma"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">
                Email
              </label>

              <input
                id="email"
                type="email"
                defaultValue="rahul.sharma@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">
                Phone number
              </label>

              <input
                id="phone"
                type="tel"
                defaultValue="+91 98765 43210"
              />
            </div>

            <div className="form-group">
              <label htmlFor="location">
                Location
              </label>

              <input
                id="location"
                type="text"
                defaultValue="Bengaluru, Karnataka"
              />
            </div>

            <div className="dashboard-actions">
              <button
                type="submit"
                className="primary-btn"
              >
                Save Changes
              </button>

              <a
                href="/dashboard"
                className="secondary-btn"
              >
                Cancel
              </a>
            </div>

          </form>

        </section>

      </main>
    </div>
  )
}

export default CustomerProfile