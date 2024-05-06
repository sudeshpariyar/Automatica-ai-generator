"use client";
import React, { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("b7d3f3a9-56d5-4b60-a0b8-6994975ac265");
  }, []);
  return null;
};

export default CrispChat;
