"use client";
import Counter from "@/components/Counter";
import Services from "@/components/Services";
import Story from "@/components/Story";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import { context } from "@/context/context";
import TrueManLayout from "@/layout/TrueManLayout";
import { useContext, useEffect } from "react";
const Index = () => {
  const { banner_image_function, banner_type_function } = useContext(context);
  useEffect(() => {
    banner_image_function("/img/banner2.gif");
    banner_type_function("image");
  }, []);
  return (
    <TrueManLayout>
      {/* stats */}
      <Counter />
      {/* stats end */}
      {/* text */}
      <Story />
      {/* text end */}
      {/* video resume */}
      <Services />
      {/* video resume end */}
      {/* services */}
      <Testimonials />
      {/* services end */}
      {/* price plans */}
      <Contact />
      {/* price plans end */}
      {/* testimonials */}
      

    </TrueManLayout>
  );
};
export default Index;
