import Preloader from "@/components/Preloader";
import TrueManModeCss from "@/layout/TrueManModeCss";
import "@css/plugins/bootstrap.min.css";
import "@css/plugins/font-awesome.min.css";
import "@css/plugins/locomotive-scroll.css";
import "@css/plugins/swiper.min.css";
import "@css/style-light.css";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import "./globals.css";
import State from "/context/context";
import Head from 'next/head';
import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  title: "Dimuthu Vithana",
  description: "As a dedicated DevOps Engineer, End-to-End DevOps Mastery, Building Scalable Systems.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="google-site-verification" content="NgQh67UVZ-v6TiYmdULRa980neneFveuLm4grG31NQE" />
        <title>Dimuthu Vithana</title>
        <meta name="description" content="As a dedicated DevOps Engineer, End-to-End DevOps Mastery, Building Scalable Systems." />
        <meta name="keywords" content="DevOps, DevOps Engineer, Scalable Systems, Next.js Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#131819"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"/>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Dimuthu Vithana",
            "url": "https://rdcvithana.com",
            "sameAs": [
              "https://www.linkedin.com/in/dimuthu-vithana-318626245?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
              "https://github.com/RDCVithana"
            ],
            "jobTitle": "DevOps Engineer",
            "description": metadata.description,
          })}
        </script>
      </Head>
      <State>
        <TrueManModeCss />
        <body>
        <Analytics />
          <div className="trm-app-frame">
            <Preloader />
            <div id="trm-dynamic-content" className="trm-swup-animation">
              <div
                id="trm-scroll-container"
                className="trm-scroll-container"
                style={{ opacity: 0 }}
              >
                {children}
              </div>
            </div>
          </div>
        </body>
      </State>
    </html>
  );
}
