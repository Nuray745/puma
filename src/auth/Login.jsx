import React, { useState, useEffect } from "react";
import axiosInstance from "../services/axiosInstance";
import { Cookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";

const cook = new Cookies();

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [usersEmails, setUsersEmails] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance
      .get("/users")
      .then((res) => {
        const emails = res.data.map((user) => user.email);
        setUsersEmails(emails);
      })
      .catch((err) => {
        console.error("Failed to fetch user emails", err);
      });
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axiosInstance.get("/users", {
        params: { email, password },
      });

      if (res.data.length) {
        cook.set("login-token", "dummy-token", {
          path: "/",
          maxAge: 60 * 60 * 24,
        });
        navigate("/user", { replace: true });
        alert(`Xoş gəldiniz, ${email}!`);
      } else {
        setError("E-poçt və ya şifrə yanlışdır");
      }
    } catch (err) {
      console.error(err);
      setError("Giriş zamanı xəta baş verdi. Zəhmət olmasa yenidən cəhd edin.");
    }
  };

  return (
    <div className="p-4 tablet:p-8 max-w-5xl mx-auto min-h-screen flex flex-col gap-5">
      <h2 className="text-[32px] tablet:text-[48px] text-[#191919] font-bold mb-4">My account</h2>

      <form onSubmit={handleLogin} className="max-w-lg mx-auto w-full">
        {/* Tabs */}
        <div className="flex justify-start border-b border-gray-300 mb-6">
          <button className="w-1/2 px-4 py-2 border-b-2 border-black font-semibold">
            Login
          </button>
          <Link
            to={"/create-account"}
            className="w-1/2 px-4 py-2 text-center text-gray-500 hover:text-black"
          >
            Join Us
          </Link>
        </div>

        {error && <p className="text-red-500 mb-3">{error}</p>}

        {/* Email */}
        <label className="block text-sm font-semibold mb-1">EMAIL *</label>
        <input
          list="emails"
          type="email"
          placeholder="Enter your email"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <datalist id="emails">
          {usersEmails.map((em, i) => (
            <option key={i} value={em} />
          ))}
        </datalist>

        {/* Password */}
        <label className="block text-sm font-semibold mb-1">PASSWORD *</label>
        <div className="relative mb-4">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
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

        {/* Remember Me */}
        <div className="flex items-center mb-4">
          <input type="checkbox" id="remember" className="mr-2" />
          <label htmlFor="remember" className="text-sm">
            Remember me on this computer
          </label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="text-[18px] w-full bg-[#191919] hover:bg-[#3c4046] cursor-pointer text-white font-semibold py-3 rounded"
        >
          LOGIN
        </button>

        {/* Legal Notice */}
        <p className="text-xs text-center text-gray-500 mt-4">
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

        {/* Forgot Password */}
        <div className="text-center mt-6">
          <a
            href="/forgot-password"
            className="text-sm font-semibold underline"
          >
            FORGOTTEN YOUR PASSWORD?
          </a>
        </div>
      </form>
    </div>
  );
}

export default Login;
