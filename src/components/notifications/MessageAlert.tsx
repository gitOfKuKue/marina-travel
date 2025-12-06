"use client";

import { icon } from "@fortawesome/fontawesome-svg-core";
import React, { useEffect, useState } from "react";

import { CircleCheck, CircleX, Info, TriangleAlert } from "lucide-react";
import useNotification from "@/src/hook/useNotification";

const MessageAlert = ({ className }: { className?: string }) => {
  const { isAlert, setIsAlert, alertText, alertStatus } = useNotification();

  const iconStyle = {};
  const iconSize = {
    size: "40px",
  };
  const alertMapping = {
    200: {
      type: "success",
      icon: <CircleCheck style={iconStyle} size={iconSize.size} />,
      textColor: "text-green-900",
      borderColor: "border-green-800",
      bgColor: "bg-green-500",
    },
    400: {
      type: "error",
      icon: <CircleX style={iconStyle} size={iconSize.size} />,
      textColor: "text-red-900",
      borderColor: "border-red-800",
      bgColor: "bg-red-500",
    },
    500: {
      type: "warning",
      icon: <TriangleAlert style={iconStyle} size={iconSize.size} />,
      textColor: "text-yellow-900",
      borderColor: "border-yellow-800",
      bgColor: "bg-yellow-500",
    },
    600: {
      type: "info",
      icon: <Info style={iconStyle} size={iconSize.size} />,
      textColor: "text-blue-900",
      borderColor: "border-blue-800",
      bgColor: "bg-blue-500",
    },
  };

  useEffect(() => {
    if (isAlert) {
      setTimeout(() => {
        setIsAlert(false);
      }, 3000);
    }
  }, [isAlert]);

  const config =
    alertMapping[alertStatus as keyof typeof alertMapping] || alertMapping[500];

  return (
    <div
      className={`fixed flex items-center gap-3 top-28 right-3 z-500 p-4 w-100 h-20 shadow-lg border ${
        config.bgColor
      } ${
        config.borderColor
      } rounded-(--standard-radius) transition-all ease-out duration-500 transform ${
        isAlert ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      } ${className}`}
    >
      {config.icon}
      <p className={`font-medium text-lg ${config.textColor} text-wrap`}>
        {alertText}
      </p>
    </div>
  );
};

export default MessageAlert;
