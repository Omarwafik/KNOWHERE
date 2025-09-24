// src/components/common/Loading.jsx
import React from "react";
import Logo from "../../assets/images/Logo-removebg2.png";

export default function Loading() {
  return (
    <div className="w-full h-full bg-gradient-to-r from-grad1 to-grad2">
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-20 w-20 border-4 border-t-transparent border-secondary flex items-center justify-center">
          <img
            src={Logo}
            alt="Loading..."
            className="h-12 w-12 object-contain"
          />
        </div>
      </div>
    </div>
  );
}
