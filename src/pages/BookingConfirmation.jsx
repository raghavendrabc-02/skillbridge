function BookingConfirmation() {
  const summaryRowStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "30px",
    minHeight: "58px",
    borderBottom: "1px solid #e5e7eb",
  }

  const labelStyle = {
    color: "#6b7280",
    fontSize: "11px",
    fontWeight: "800",
    letterSpacing: "1px",
  }

  const valueStyle = {
    color: "#111827",
    fontSize: "15px",
    fontWeight: "700",
    textAlign: "right",
  }

  return (
    <div className="confirmation-page">

      <div className="confirmation-card">

        <div className="confirmation-icon">
          ✓
        </div>

        <p className="eyebrow">
          BOOKING CONFIRMED
        </p>

        <h1>
          Your booking is confirmed
        </h1>

        <p
          className="confirmation-message"
          style={{
            maxWidth: "520px",
            margin: "14px auto 28px",
            lineHeight: "1.6",
          }}
        >
          Your Personal Training session with Arjun Sharma
          has been successfully booked.
        </p>

        <div
          style={{
            width: "100%",
            maxWidth: "520px",
            margin: "0 auto 28px",
            padding: "6px 22px",
            background: "#f8fafc",
            border: "1px solid #e5e7eb",
            borderRadius: "12px",
            textAlign: "left",
          }}
        >

          <div style={summaryRowStyle}>
            <span style={labelStyle}>
              SERVICE
            </span>

            <strong style={valueStyle}>
              Personal Training
            </strong>
          </div>

          <div style={summaryRowStyle}>
            <span style={labelStyle}>
              PROVIDER
            </span>

            <strong style={valueStyle}>
              Arjun Sharma
            </strong>
          </div>

          <div style={summaryRowStyle}>
            <span style={labelStyle}>
              DATE
            </span>

            <strong style={valueStyle}>
              Selected Date
            </strong>
          </div>

          <div style={summaryRowStyle}>
            <span style={labelStyle}>
              TIME
            </span>

            <strong style={valueStyle}>
              Selected Time
            </strong>
          </div>

          <div
            style={{
              ...summaryRowStyle,
              borderBottom: "none",
            }}
          >
            <span style={labelStyle}>
              TOTAL
            </span>

            <strong
              style={{
                ...valueStyle,
                color: "#4f46e5",
                fontSize: "19px",
              }}
            >
              ₹800
            </strong>
          </div>

        </div>

        <div className="confirmation-actions">

          <a
            href="/bookings"
            className="primary-btn"
          >
            View My Bookings
          </a>

          <a
            href="/services"
            className="secondary-btn"
          >
            Browse More Services
          </a>

        </div>

      </div>

    </div>
  )
}

export default BookingConfirmation