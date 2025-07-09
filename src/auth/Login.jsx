import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../api/services";
import Button from "../components/Button";
import { Cookies } from "react-cookie";

function Login() {
  const cook = new Cookies();
  const navigate = useNavigate();

  const [form, setForm] = useState({ login: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await login(form);

      if (res.data?.accessToken) {
        cook.set("login-token", res.data.accessToken, { path: "/" });
        alert(`Xoş gəldiniz, ${form.login}`);
        navigate("/");
      } else {
        setError("İstifadəçi adı və ya şifrə yanlışdır.");
      }
    } catch (err) {
      setError("İstifadəçi adı və ya şifrə yanlışdır.");
    }
  };

  return (
    <div className="n-container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto py-14 px-6">
        {/* Yeni müştəri bloku */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
          <h2 className="text-xl font-semibold mb-3">Yeni müştəri</h2>
          <p className="text-sm text-gray-600 mb-6">
            Hesab yaratmaqla alış-verişin bütün imkanlarından istifadə edə
            bilərsiniz.
          </p>
          <Link to="/create-account">
            <Button label="Qeydiyyatdan keç" />
          </Link>
        </div>

        {/* Giriş formu */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
          <h2 className="text-xl font-semibold mb-3">Daimi müştəri</h2>
          <p className="text-sm text-gray-600 mb-6">
            Zəhmət olmasa, hesabınıza daxil olun.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="login"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                İstifadəçi adı və ya email
              </label>
              <input
                type="text"
                id="login"
                name="login"
                value={form.login}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Şifrə
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {error && (
              <p className="text-red-500 text-sm italic font-medium">
                {error}
              </p>
            )}

            <Button type="submit" label="Giriş" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
