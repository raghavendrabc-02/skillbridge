function AddService() {
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
              NEW SERVICE
            </p>

            <h1>
              Add a new service
            </h1>

            <p>
              Create a service that customers can discover and book.
            </p>
          </div>

          <a
            href="/provider/services"
            className="secondary-btn"
          >
            Back to Services
          </a>
        </div>

        <section className="dashboard-section">

          <div className="section-header">
            <div>
              <h2>
                Service information
              </h2>

              <p>
                Add clear information about the service you provide.
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
              <label htmlFor="service-name">
                Service Name
              </label>

              <input
                id="service-name"
                type="text"
                placeholder="e.g. Personal Training"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="service-category">
                Category
              </label>

              <select
                id="service-category"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Select a category
                </option>

                <option value="fitness">
                  Fitness
                </option>

                <option value="business">
                  Business
                </option>

                <option value="education">
                  Education
                </option>

                <option value="design">
                  Design
                </option>

                <option value="career">
                  Career
                </option>

                <option value="photography">
                  Photography
                </option>
              </select>
            </div>

            <div
              className="form-group"
              style={{
                gridColumn: "1 / -1",
              }}
            >
              <label htmlFor="service-description">
                Description
              </label>

              <textarea
                id="service-description"
                placeholder="Describe what customers will receive from this service."
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="service-price">
                Price
              </label>

              <input
                id="service-price"
                type="number"
                min="0"
                step="0.01"
                placeholder="800"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="service-duration">
                Duration
              </label>

              <div>
                <input
                  id="service-duration"
                  type="number"
                  min="1"
                  step="1"
                  placeholder="e.g. 150"
                  required
                />

                <p
                  style={{
                    margin: "8px 0 0",
                    color: "#6b7280",
                    fontSize: "13px",
                  }}
                >
                  Enter duration in minutes. Example: 150 minutes = 2 hours 30 minutes.
                </p>
              </div>
            </div>

            <div
              className="dashboard-actions"
              style={{
                gridColumn: "1 / -1",
              }}
            >
              <button
                type="submit"
                className="primary-btn"
              >
                Create Service
              </button>

              <a
                href="/provider/services"
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

export default AddService