import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Services from "./pages/Services"
import ServiceDetails from "./pages/ServiceDetails"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Booking from "./pages/Booking"
import BookingConfirmation from "./pages/BookingConfirmation"

import CustomerDashboard from "./pages/CustomerDashboard"
import CustomerBookings from "./pages/CustomerBookings"
import CustomerProfile from "./pages/CustomerProfile"

import ProviderDashboard from "./pages/ProviderDashboard"
import ProviderProfile from "./pages/ProviderProfile"
import ProviderServices from "./pages/ProviderServices"
import ProviderAvailability from "./pages/ProviderAvailability"
import ProviderBookings from "./pages/ProviderBookings"
import AddService from "./pages/AddService"

import AdminDashboard from "./pages/AdminDashboard"

function Home() {
  return (
    <div className="app">
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

      <main className="hero">
        <div className="hero-content">
          <p className="eyebrow">
            BOOK TRUSTED PROFESSIONALS
          </p>

          <h1>
            Find the right professional
            <br />
            for your next task.
          </h1>

          <p className="hero-text">
            Discover skilled professionals, compare services and book
            the right person at a time that works for you.
          </p>

          <div className="hero-buttons">
            <a
              href="/services"
              className="primary-btn"
            >
              Explore Services
            </a>

            <a
              href="/register"
              className="secondary-btn"
            >
              Become a Provider
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/services"
          element={<Services />}
        />

        <Route
          path="/services/personal-training"
          element={<ServiceDetails />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/booking"
          element={<Booking />}
        />

        <Route
          path="/booking-confirmation"
          element={<BookingConfirmation />}
        />

        <Route
          path="/dashboard"
          element={<CustomerDashboard />}
        />

        <Route
          path="/bookings"
          element={<CustomerBookings />}
        />

        <Route
          path="/profile"
          element={<CustomerProfile />}
        />

        <Route
          path="/provider/dashboard"
          element={<ProviderDashboard />}
        />

        <Route
          path="/provider/profile"
          element={<ProviderProfile />}
        />

        <Route
          path="/provider/services"
          element={<ProviderServices />}
        />

        <Route
          path="/provider/services/new"
          element={<AddService />}
        />

        <Route
          path="/provider/availability"
          element={<ProviderAvailability />}
        />

        <Route
          path="/provider/bookings"
          element={<ProviderBookings />}
        />

        <Route
          path="/admin/dashboard"
          element={<AdminDashboard />}
        />

      </Routes>
    </BrowserRouter>
  )
}

export default App