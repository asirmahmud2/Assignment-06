import React from "react";
import { Link } from "react-router-dom";
import { FaExclamationTriangle, FaHome } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
      <div className="text-center max-w-xl">

        <div className="flex justify-center mb-6 text-red-500 text-6xl">
          <FaExclamationTriangle />
        </div>

        <h1 className="text-6xl font-bold mb-4">404</h1>

        <h2 className="text-2xl font-semibold mb-3">
          Page Not Found
        </h2>

        <p className="text-gray-500 mb-8">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-green-800 text-white hover:bg-green-900 transition"
        >
          <FaHome /> Back to Home
        </Link>

      </div>
    </div>
  );
};

export default NotFound;