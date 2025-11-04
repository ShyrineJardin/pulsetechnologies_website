"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "@/components/About";
import Services from "@/components/Services";
import Hero from "@/components/Hero";
import Contact from 
import Testimony from "@/components/Testimony";
import WhyUs from "@/components/WhyUs";
import Location from "@/components/Location";
import Closing from "@/components/Closing";

export default function Page() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: true,
      anchorPlacement: "top-bottom",
    });
  }, []);

  return (
    <div>
      <Hero />
      <About />
      <WhyUs />
      <Services />
      <Contact />
      <Testimony />
      <Location />
      <Closing />
    </div>
  );
}
