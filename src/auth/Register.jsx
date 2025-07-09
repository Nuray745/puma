import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../services/api";
import Button from "../components/Button";
import { Cookies } from "react-cookie";

function Register() {
  const cook = new Cookies()
  
  const [checked, setChecked] = useState(false);
  const [form, setForm] = useState({
    login: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!checked) {
      setError("Qaydalarla razılaşmaq vacibdir.");
      return;
    }

    if (form.password.length < 8) {
      setError("Şifrənin uzunluğu minimum 8 simvol olmalıdır.");
      return;
    }
    console.log(form);
    register(form)
      .then((res) => {
        const token = res.data.token;
        console.log("klj", token);
        if (token) {
          cook.set("register-token", token);
          navigate("/");
          alert("xos geldiz!");
        } else {
          setError("Qeydiyyat zamanı xəta baş verdi.");
        }
      })
      .catch((err) => {
        setError(
          err?.response?.data?.message || "Qeydiyyat zamanı xəta baş verdi."
        );
      });
  };

  return (
    <div className="max-w-2xl mx-auto p-8 my-10 bg-gray-50 rounded-xl shadow-md">
      <h1 className="text-3xl font-bold mb-2">Hesab qeydiyyatı</h1>
      <p className="text-gray-600 mb-6">
        Əgər artıq hesabınız varsa, giriş səhifəsinə keçin.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Şəxsi məlumatlar */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Şəxsi məlumatlar</h2>

          <input
            type="text"
            name="login"
            placeholder="Ad"
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>

        {/* Şifrə */}
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Şifrə</h2>
          <input
            type="password"
            name="password"
            placeholder="Şifrə"
            value={form.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>

        {/* Qaydalar */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="termsAccepted"
            onChange={() => setChecked(!checked)}
          />
          <label>
            Mən <span className="font-semibold">Qaydalar</span>-ı oxudum və
            razıyam
          </label>
        </div>

        {/* Error mesajı */}
        {error && <p className="text-red-500 font-medium">{error}</p>}

        {/* Submit düyməsi */}
        <Button type="submit" label="Davam et" />
      </form>
    </div>
  );
}

export default Register;
