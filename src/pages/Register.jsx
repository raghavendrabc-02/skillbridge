function Register() {
  return (
    <div className="auth-page">
      <div
        className="auth-card"
        style={{
          width: "min(560px, 100%)",
          padding: "42px 48px",
          borderRadius: "18px",
        }}
      >
        <a
          href="/"
          className="logo"
          style={{
            display: "inline-block",
            marginBottom: "28px",
            color: "#4f46e5",
            fontSize: "25px",
            fontWeight: "800",
            letterSpacing: "-0.6px",
          }}
        >
          SkillBridge
        </a>

        <div>
          <p
            className="eyebrow"
            style={{
              marginBottom: "9px",
            }}
          >
            GET STARTED
          </p>

          <h1
            style={{
              margin: 0,
              color: "#111827",
              fontSize: "40px",
              lineHeight: "1.15",
              letterSpacing: "-1.2px",
            }}
          >
            Create your account
          </h1>

          <p
            style={{
              margin: "14px 0 0",
              color: "#6b7280",
              fontSize: "16px",
              lineHeight: "1.6",
            }}
          >
            Join SkillBridge and start booking trusted professionals.
          </p>
        </div>

        <form
          className="auth-form"
          style={{
            marginTop: "30px",
            gap: "18px",
          }}
          onSubmit={(event) => {
            event.preventDefault()
            window.location.href = "/login"
          }}
        >
          <div className="form-group">
            <label htmlFor="fullName">
              Full Name
            </label>

            <input
              id="fullName"
              type="text"
              placeholder="Enter your full name"
              required
              style={{
                minHeight: "50px",
                padding: "0 15px",
                fontSize: "15px",
                borderRadius: "9px",
              }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">
              Email
            </label>

            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              required
              style={{
                minHeight: "50px",
                padding: "0 15px",
                fontSize: "15px",
                borderRadius: "9px",
              }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">
              Password
            </label>

            <input
              id="password"
              type="password"
              placeholder="Create a password"
              required
              style={{
                minHeight: "50px",
                padding: "0 15px",
                fontSize: "15px",
                borderRadius: "9px",
              }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="accountType">
              Account Type
            </label>

            <select
              id="accountType"
              defaultValue="customer"
              style={{
                minHeight: "50px",
                padding: "0 15px",
                fontSize: "15px",
                borderRadius: "9px",
              }}
            >
              <option value="customer">
                Customer
              </option>

              <option value="provider">
                Provider
              </option>
            </select>
          </div>

          <button
            type="submit"
            className="primary-btn auth-submit"
            style={{
              width: "100%",
              minHeight: "50px",
              marginTop: "5px",
              borderRadius: "9px",
              fontSize: "15px",
            }}
          >
            Create Account
          </button>
        </form>

        <div
          style={{
            height: "1px",
            margin: "28px 0 22px",
            background: "#e5e7eb",
          }}
        />

        <p
          style={{
            margin: 0,
            color: "#6b7280",
            fontSize: "15px",
            textAlign: "center",
          }}
        >
          Already have an account?{" "}
          <a
            href="/login"
            style={{
              color: "#4f46e5",
              fontWeight: "700",
            }}
          >
            Login
          </a>
        </p>
      </div>
    </div>
  )
}

export default Register