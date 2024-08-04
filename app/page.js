// app/page.js
"use client";
import { useEffect, useContext } from 'react';
import TrueManLayout from "@/layout/TrueManLayout";
import Counter from "@/components/Counter";
import Story from "@/components/Story";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import { context } from "@/context/context";

const Index = () => {
  const { banner_image_function, banner_type_function } = useContext(context);

  useEffect(() => {
    banner_image_function("/img/banner2.gif");
    banner_type_function("image");
  }, [banner_image_function, banner_type_function]);

  return (
    <TrueManLayout>
      <Counter />
      <Story />
      <Services />
      <Testimonials />
      <Contact />
    </TrueManLayout>
  );
};

export default Index;
