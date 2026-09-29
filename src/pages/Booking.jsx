import { useState } from "react"

function Booking() {
  const [selectedDate, setSelectedDate] = useState("2026-10-01")
  const [selectedTime, setSelectedTime] = useState("")

  const availableTimes = [
    "09:00 AM",
    "10:00 AM",
    "11:30 AM",
    "02:00 PM",
    "04:00 PM",
    "06:00 PM",
  ]

  const handleConfirmBooking = () => {
    if (!selectedDate) {
      alert("Please select a date.")
      return
    }

    if (!selectedTime) {
      alert("Please select an available time slot.")
      return
    }

    window.location.href = "/booking-confirmation"
  }

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
              BOOK SERVICE
            </p>

            <h1>
              Choose your date and time
            </h1>

            <p>
              Select an available time slot for your session with Rahul Fitness.
            </p>
          </div>

          <a
            href="/provider/profile"
            className="secondary-btn"
          >
            Back to Profile
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
                SELECTED SERVICE
              </p>

              <h2>
                Personal Training
              </h2>

              <p>
                One-on-one fitness training customized to your goals.
              </p>
            </div>

            <div
              style={{
                textAlign: "right",
              }}
            >
              <strong
                style={{
                  display: "block",
                  color: "#111827",
                  fontSize: "20px",
                }}
              >
                ₹800
              </strong>

              <span
                style={{
                  color: "#6b7280",
                  fontSize: "13px",
                }}
              >
                60 minutes
              </span>
            </div>

          </div>

        </section>

        <section className="dashboard-section">

          <div className="section-header">

            <div>
              <p className="eyebrow">
                AVAILABILITY
              </p>

              <h2>
                Select a date
              </h2>

              <p>
                Choose a date to see available time slots.
              </p>
            </div>

          </div>

          <div className="profile-form">

            <div className="form-group">

              <label htmlFor="booking-date">
                Date
              </label>

              <input
                id="booking-date"
                type="date"
                min="2026-09-30"
                value={selectedDate}
                onChange={(event) => {
                  setSelectedDate(event.target.value)
                  setSelectedTime("")
                }}
              />

            </div>

          </div>

        </section>

        <section className="dashboard-section">

          <div className="section-header">

            <div>
              <p className="eyebrow">
                AVAILABLE TIMES
              </p>

              <h2>
                Choose a time slot
              </h2>

              <p>
                Select one of the available times below.
              </p>
            </div>

          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(150px, 1fr))",
              gap: "12px",
              marginTop: "10px",
            }}
          >

            {availableTimes.map((time) => {
              const isSelected = selectedTime === time

              return (
                <button
                  key={time}
                  type="button"
                  className={
                    isSelected
                      ? "primary-btn"
                      : "secondary-btn"
                  }
                  style={{
                    minHeight: "52px",
                    justifyContent: "center",
                  }}
                  onClick={() => {
                    setSelectedTime(time)
                  }}
                >
                  {time}
                </button>
              )
            })}

          </div>

          <div
            style={{
              marginTop: "24px",
              padding: "14px 16px",
              background: "#f0fdf4",
              border: "1px solid #bbf7d0",
              borderRadius: "10px",
              color: "#166534",
              fontSize: "13px",
              lineHeight: "1.5",
            }}
          >
            These time slots are currently available.
            Existing bookings will automatically block unavailable slots.
          </div>

        </section>

        <section className="dashboard-section">

          <div className="section-header">

            <div>
              <p className="eyebrow">
                BOOKING SUMMARY
              </p>

              <h2>
                Review your booking
              </h2>

              <p>
                Confirm the details before booking your session.
              </p>
            </div>

          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "16px",
            }}
          >

            <div className="info-card">

              <span
                style={{
                  color: "#6b7280",
                  fontSize: "11px",
                  fontWeight: "800",
                  letterSpacing: "1px",
                }}
              >
                SERVICE
              </span>

              <h3>
                Personal Training
              </h3>

            </div>

            <div className="info-card">

              <span
                style={{
                  color: "#6b7280",
                  fontSize: "11px",
                  fontWeight: "800",
                  letterSpacing: "1px",
                }}
              >
                PROVIDER
              </span>

              <h3>
                Rahul Fitness
              </h3>

            </div>

            <div className="info-card">

              <span
                style={{
                  color: "#6b7280",
                  fontSize: "11px",
                  fontWeight: "800",
                  letterSpacing: "1px",
                }}
              >
                DATE
              </span>

              <h3>
                {selectedDate || "Not selected"}
              </h3>

            </div>

            <div className="info-card">

              <span
                style={{
                  color: "#6b7280",
                  fontSize: "11px",
                  fontWeight: "800",
                  letterSpacing: "1px",
                }}
              >
                TIME
              </span>

              <h3>
                {selectedTime || "Not selected"}
              </h3>

            </div>

            <div className="info-card">

              <span
                style={{
                  color: "#6b7280",
                  fontSize: "11px",
                  fontWeight: "800",
                  letterSpacing: "1px",
                }}
              >
                DURATION
              </span>

              <h3>
                60 minutes
              </h3>

            </div>

            <div className="info-card">

              <span
                style={{
                  color: "#6b7280",
                  fontSize: "11px",
                  fontWeight: "800",
                  letterSpacing: "1px",
                }}
              >
                PRICE
              </span>

              <h3>
                ₹800
              </h3>

            </div>

          </div>

          <div
            style={{
              marginTop: "24px",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >

            <button
              type="button"
              className="primary-btn"
              onClick={handleConfirmBooking}
            >
              Confirm Booking
            </button>

          </div>

        </section>

      </main>
    </div>
  )
}

export default Booking