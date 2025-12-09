"use client";

import React, { useEffect, useState } from "react";
import { CheckCircle2, XCircle, AlertTriangle, Info, X } from "lucide-react";
import useNotification from "@/src/hook/useNotification";

const MessageAlert = ({ className }: { className?: string }) => {
  const { isAlert, setIsAlert, alertText, alertStatus } = useNotification();
  const [isVisible, setIsVisible] = useState(false);

  // Handle visibility separate from isAlert to allow for exit animations if needed,
  // but for now relying on CSS transitions.
  useEffect(() => {
    if (isAlert) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
        // Small delay to allow animation to finish before resetting state logic if needed,
        // though strictly setIsAlert(false) triggers the hide via prop.
        setTimeout(() => setIsAlert(false), 300);
      }, 5000); // Extended to 5s for better readability
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
    }
  }, [isAlert, setIsAlert]);

  const alertConfig = {
    200: {
      color: "text-green-500",
      bg: "bg-green-50",
      border: "border-green-200",
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: "Success",
    },
    400: {
      color: "text-red-500",
      bg: "bg-red-50",
      border: "border-red-200",
      icon: <XCircle className="w-6 h-6" />,
      title: "Error",
    },
    500: {
      color: "text-amber-500",
      bg: "bg-amber-50",
      border: "border-amber-200",
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Warning",
    },
    600: {
      color: "text-blue-500",
      bg: "bg-blue-50",
      border: "border-blue-200",
      icon: <Info className="w-6 h-6" />,
      title: "Info",
    },
  };

  const config =
    alertConfig[alertStatus as keyof typeof alertConfig] || alertConfig[600];

  return (
    <div
      className={`fixed top-32 right-5 z-100 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${
        isVisible
          ? "translate-x-0 opacity-100"
          : "translate-x-12 opacity-0 pointer-events-none"
      } ${className}`}
    >
      <div
        className={`flex items-start gap-4 p-4 min-w-[320px] max-w-sm bg-white rounded-2xl shadow-xl border border-gray-100/50 backdrop-blur-xl`}
      >
        {/* Icon Wrapper */}
        <div
          className={`p-2 rounded-full ${config.bg} ${config.color} shrink-0`}
        >
          {config.icon}
        </div>

        {/* Content */}
        <div className="flex-1 pt-1">
          <h3 className={`font-bold text-sm ${config.color} mb-1`}>
            {config.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed font-medium">
            {alertText}
          </p>
        </div>

        {/* Close Button */}
        <button
          onClick={() => {
            setIsVisible(false);
            setTimeout(() => setIsAlert(false), 300);
          }}
          className="text-gray-400 hover:text-gray-600 transition-colors p-1"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
};

export default MessageAlert;
