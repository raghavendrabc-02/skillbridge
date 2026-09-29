function Login() {
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
            marginBottom: "30px",
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
            SIGN IN
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
            Welcome back
          </h1>

          <p
            style={{
              margin: "14px 0 0",
              color: "#6b7280",
              fontSize: "16px",
              lineHeight: "1.6",
            }}
          >
            Login to continue booking services.
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
            window.location.href = "/dashboard"
          }}
        >
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
              placeholder="Enter your password"
              required
              style={{
                minHeight: "50px",
                padding: "0 15px",
                fontSize: "15px",
                borderRadius: "9px",
              }}
            />
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
            Login
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
          Don't have an account?{" "}
          <a
            href="/register"
            style={{
              color: "#4f46e5",
              fontWeight: "700",
            }}
          >
            Create an account
          </a>
        </p>
      </div>
    </div>
  )
}

export default Login