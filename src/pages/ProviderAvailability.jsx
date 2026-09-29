import { useState } from "react"

function ProviderAvailability() {
  const [schedule, setSchedule] = useState([
    {
      day: "Monday",
      enabled: true,
      slots: [
        { start: "09:00", end: "12:00" },
        { start: "14:00", end: "18:00" },
      ],
    },
    {
      day: "Tuesday",
      enabled: true,
      slots: [
        { start: "09:00", end: "17:00" },
      ],
    },
    {
      day: "Wednesday",
      enabled: true,
      slots: [
        { start: "09:00", end: "17:00" },
      ],
    },
    {
      day: "Thursday",
      enabled: true,
      slots: [
        { start: "10:00", end: "18:00" },
      ],
    },
    {
      day: "Friday",
      enabled: true,
      slots: [
        { start: "09:00", end: "17:00" },
      ],
    },
    {
      day: "Saturday",
      enabled: false,
      slots: [],
    },
    {
      day: "Sunday",
      enabled: false,
      slots: [],
    },
  ])

  const toggleDay = (dayIndex) => {
    setSchedule((currentSchedule) =>
      currentSchedule.map((day, index) =>
        index === dayIndex
          ? {
              ...day,
              enabled: !day.enabled,
              slots: !day.enabled
                ? [{ start: "09:00", end: "17:00" }]
                : [],
            }
          : day
      )
    )
  }

  const updateSlot = (dayIndex, slotIndex, field, value) => {
    setSchedule((currentSchedule) =>
      currentSchedule.map((day, index) => {
        if (index !== dayIndex) {
          return day
        }

        return {
          ...day,
          slots: day.slots.map((slot, currentSlotIndex) =>
            currentSlotIndex === slotIndex
              ? {
                  ...slot,
                  [field]: value,
                }
              : slot
          ),
        }
      })
    )
  }

  const addSlot = (dayIndex) => {
    setSchedule((currentSchedule) =>
      currentSchedule.map((day, index) => {
        if (index !== dayIndex) {
          return day
        }

        return {
          ...day,
          slots: [
            ...day.slots,
            {
              start: "09:00",
              end: "17:00",
            },
          ],
        }
      })
    )
  }

  const removeSlot = (dayIndex, slotIndex) => {
    setSchedule((currentSchedule) =>
      currentSchedule.map((day, index) => {
        if (index !== dayIndex) {
          return day
        }

        return {
          ...day,
          slots: day.slots.filter(
            (_, currentSlotIndex) =>
              currentSlotIndex !== slotIndex
          ),
        }
      })
    )
  }

  const availableDays = schedule.filter(
    (day) => day.enabled
  ).length

  const handleSave = () => {
    console.log("Availability:", schedule)
    alert("Availability saved successfully.")
  }

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
              AVAILABILITY
            </p>

            <h1>
              Manage your availability
            </h1>

            <p>
              Set the days and time windows when customers can book your services.
            </p>
          </div>

          <button
            type="button"
            className="primary-btn"
            onClick={handleSave}
          >
            Save Availability
          </button>

        </div>

        <section className="dashboard-section">

          <div className="section-header">

            <div>
              <p className="eyebrow">
                WEEKLY SCHEDULE
              </p>

              <h2>
                Your availability
              </h2>

              <p>
                Customers will only see booking slots generated from the availability you set here.
              </p>
            </div>

            <span className="availability-summary">
              {availableDays} days available
            </span>

          </div>

          <div className="availability-grid">

            {schedule.map((day, dayIndex) => (
              <div
                className={
                  day.enabled
                    ? "availability-day"
                    : "availability-day unavailable"
                }
                key={day.day}
              >

                <div className="day-header">

                  <div>
                    <h3>
                      {day.day}
                    </h3>

                    <span
                      className={
                        day.enabled
                          ? "available-label"
                          : "unavailable-label"
                      }
                    >
                      {day.enabled
                        ? "Available"
                        : "Unavailable"}
                    </span>
                  </div>

                  <input
                    type="checkbox"
                    checked={day.enabled}
                    onChange={() =>
                      toggleDay(dayIndex)
                    }
                    aria-label={`Enable ${day.day}`}
                  />

                </div>

                {day.enabled ? (
                  <div>

                    {day.slots.map((slot, slotIndex) => (
                      <div
                        className="time-row"
                        key={`${day.day}-${slotIndex}`}
                        style={{
                          marginBottom:
                            slotIndex ===
                            day.slots.length - 1
                              ? "12px"
                              : "14px",
                        }}
                      >

                        <div className="time-field">

                          <label>
                            START
                          </label>

                          <input
                            type="time"
                            value={slot.start}
                            onChange={(event) =>
                              updateSlot(
                                dayIndex,
                                slotIndex,
                                "start",
                                event.target.value
                              )
                            }
                          />

                        </div>

                        <span className="time-separator">
                          to
                        </span>

                        <div className="time-field">

                          <label>
                            END
                          </label>

                          <input
                            type="time"
                            value={slot.end}
                            onChange={(event) =>
                              updateSlot(
                                dayIndex,
                                slotIndex,
                                "end",
                                event.target.value
                              )
                            }
                          />

                        </div>

                        {day.slots.length > 1 && (
                          <button
                            type="button"
                            onClick={() =>
                              removeSlot(
                                dayIndex,
                                slotIndex
                              )
                            }
                            style={{
                              marginTop: "18px",
                              border: "none",
                              background: "transparent",
                              color: "#dc2626",
                              fontSize: "12px",
                              fontWeight: "700",
                              cursor: "pointer",
                            }}
                          >
                            Remove
                          </button>
                        )}

                      </div>
                    ))}

                    <button
                      type="button"
                      onClick={() =>
                        addSlot(dayIndex)
                      }
                      style={{
                        border: "1px solid #c7d2fe",
                        background: "#eef2ff",
                        color: "#4f46e5",
                        borderRadius: "8px",
                        padding: "9px 12px",
                        fontSize: "12px",
                        fontWeight: "700",
                        cursor: "pointer",
                      }}
                    >
                      + Add another time
                    </button>

                  </div>
                ) : (
                  <div className="unavailable-message">
                    Customers cannot book on {day.day}.
                  </div>
                )}

              </div>
            ))}

          </div>

        </section>

        <section className="dashboard-section">

          <div className="section-header">

            <div>
              <p className="eyebrow">
                HOW BOOKING WORKS
              </p>

              <h2>
                Your availability controls customer slots
              </h2>

              <p>
                SkillBridge will use your availability, the selected service duration and existing bookings to calculate the actual slots customers can book.
              </p>
            </div>

          </div>

          <div className="info-grid">

            <div className="info-card">

              <div className="info-icon">
                01
              </div>

              <h3>
                You control your hours
              </h3>

              <p>
                Set exactly when you are available to provide your services.
              </p>

            </div>

            <div className="info-card">

              <div className="info-icon">
                02
              </div>

              <h3>
                Multiple time windows
              </h3>

              <p>
                Add separate availability periods when you have a break between sessions.
              </p>

            </div>

            <div className="info-card">

              <div className="info-icon">
                03
              </div>

              <h3>
                Existing bookings matter
              </h3>

              <p>
                A time already booked by another customer will not be offered again.
              </p>

            </div>

          </div>

        </section>

      </main>
    </div>
  )
}

export default ProviderAvailability