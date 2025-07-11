import React, { useState } from "react";
import axiosInstance from "../services/axiosInstance";
import { Link } from "react-router-dom";

function Register({ onRegister }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [subscribe, setSubscribe] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await axiosInstance.post("/users", {
        firstName,
        lastName,
        email,
        password,
        subscribe,
      });

      if (res.status === 201) {
        onRegister(res.data); // Redirect or notify after registration
      }
    } catch (err) {
      console.error(err);
      setError("Registration failed. Try again.");
    }
  };

  return (
    <div className="p-4 tablet:p-8 max-w-5xl mx-auto min-h-screen flex flex-col gap-3">
      <h2 className="text-[32px] tablet:text-[48px] text-[#191919] font-bold mb-4">
        My account
      </h2>

      <form onSubmit={handleRegister} className="max-w-lg mx-auto w-full">
        {/* Tabs */}
        <div className="flex justify-start border-b border-gray-300 mb-6">
          <Link
            to={"/login"}
            className="w-1/2 text-center px-4 py-2 text-gray-500 hover:text-black"
          >
            Login
          </Link>
          <button className="w-1/2 px-4 py-2 border-b-2 border-black font-semibold">
            Join Us
          </button>
        </div>
        {error && <p className="text-red-500 mb-3">{error}</p>}

        {/* First Name */}
        <label className="block text-sm font-semibold mb-1">FIRST NAME *</label>
        <input
          type="text"
          placeholder="First Name"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />

        {/* Last Name */}
        <label className="block text-sm font-semibold mb-1">LAST NAME *</label>
        <input
          type="text"
          placeholder="Last Name"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />

        {/* Email */}
        <label className="block text-sm font-semibold mb-1">EMAIL *</label>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {/* Password */}
        <label className="block text-sm font-semibold mb-1">PASSWORD *</label>
        <div className="relative mb-4">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full p-2 pr-10 border border-gray-300 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span
            className="absolute right-3 top-2.5 cursor-pointer text-gray-500"
            onClick={() => setShowPassword(!showPassword)}
            title="Show/Hide password"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              id="icon"
            >
              <path fill="transparent" d="M0 0h24v24H0z" />
              <path
                d="M20.953 12c-2.966 8-14.94 8-17.906 0 2.966-8 14.94-8 17.906 0Z"
                stroke="currentColor"
                strokeWidth="2"
              />
              <circle
                cx="12"
                cy="12"
                r="4"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </span>
        </div>

        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="subscribe"
            checked={subscribe}
            onChange={() => setSubscribe(!subscribe)}
            className="mr-2"
          />
          <label htmlFor="subscribe" className="text-sm">
            Add me to the PUMA mailing list
          </label>
        </div>

        <p className="text-xs text-center text-gray-500 mb-6">
          By continuing, I confirm that I have read and accept the{" "}
          <a href="/terms" className="underline">
            Terms and Conditions
          </a>{" "}
          and the{" "}
          <a href="/privacy" className="underline">
            Privacy Policy
          </a>
          .
        </p>

        {/* Submit */}
        <button
          type="submit"
          className="text-[18px] w-full bg-[#BDC1C5] hover:bg-[#d0d5da] text-[#3B4047] font-semibold py-3 cursor-pointer rounded"
        >
          CREATE ACCOUNT
        </button>
      </form>
    </div>
  );
}

export default Register;
