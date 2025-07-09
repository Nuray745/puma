import React from 'react';

function UserPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-xl p-6">
        {/* User Info */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">İstifadəçi Paneli</h2>
        <div className="mb-6">
          <p><span className="font-medium">Ad:</span> Fatime Cavadzade</p>
          <p><span className="font-medium">Email:</span> fatime@example.com</p>
          <p><span className="font-medium">Telefon:</span> +994 55 123 45 67</p>
        </div>

        {/* Order History */}
        <h3 className="text-xl font-semibold text-gray-700 mb-2">Sifariş Tarixçəsi</h3>
        <ul className="space-y-2">
          <li className="bg-gray-50 p-4 rounded-md shadow-sm">
            #12345 – 20.04.2025 – 45 AZN
          </li>
          <li className="bg-gray-50 p-4 rounded-md shadow-sm">
            #12312 – 05.03.2025 – 87 AZN
          </li>
        </ul>

        {/* Logout Button */}
        <div className="mt-6 text-right">
          <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition">
            Çıxış Et
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserPage;
