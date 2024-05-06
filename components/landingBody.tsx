"use client";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import TypewriterComponent from "typewriter-effect";
import { Button } from "./ui/button";

const LandingBody = () => {
  const { isSignedIn } = useAuth();
  return (
    <div className="text-white font-bold py-36 text-center space-y-5">
      <div className="divtext-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
        <h1> Unlock your imagination with AI.</h1>
      </div>
      <div className="bg-gradient-to-r from-green-800 to-red-400 text-2xl">
        <TypewriterComponent
          options={{
            strings: [
              "Chatbot",
              "Image Generation",
              "Video Generation",
              "Music Generation",
              "Code Generation",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      <div className="divtext-sm md:text-xl font-light test-zinc-400">
        All solutons are on your finger tip.
      </div>
      <div className="pt-8">
        <Link href={isSignedIn ? "dashboard" : "/sign-up"}>
          <Button
            variant="pro"
            className="md-text-lg p-4 md:p-6 font-bold border border-white/30 rounded-full"
          >
            Get started..
          </Button>
        </Link>
      </div>
      <div className="text-zinc-400 text-sm md:text-sm font-normal ">
        Unlock the power of AI.
      </div>
    </div>
  );
};

export default LandingBody;
