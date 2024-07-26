"use client";
import Head from 'next/head';  // Import Head for managing metadata
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
  }, [banner_image_function, banner_type_function]);

  return (
    <TrueManLayout>
      <Head>
        <meta name="google-site-verification" content="NgQh67UVZ-v6TiYmdULRa980neneFveuLm4grG31NQE" />
        <title>Dimuthu Vithana</title>
        <meta name="description" content="As a dedicated DevOps Engineer, End-to-End DevOps Mastery, Building Scalable Systems." />
        <meta name="keywords" content="DevOps, DevOps Engineer, Scalable Systems, Next.js Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#131819" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Dimuthu Vithana",
            "jobTitle": "DevOps Engineer",
            "url": "https://rdcvithana.com",
            "sameAs": [
              "https://www.linkedin.com/in/dimuthu-vithana-318626245?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
              "https://github.com/RDCVithana"
            ],
            "description": "As a dedicated DevOps Engineer, End-to-End DevOps Mastery, Building Scalable Systems.",
          })}
        </script>
      </Head>
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
