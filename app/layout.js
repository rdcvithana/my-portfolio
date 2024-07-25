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

export const metadata = {
  title: "Dimuthu Vithana",
  description: "As a dedicated DevOps Engineer, End-to-End DevOps Mastery, Building Scalable Systems.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="google-site-verification" content="NgQh67UVZ-v6TiYmdULRa980neneFveuLm4grG31NQE" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content="DevOps, DevOps Engineer, Scalable Systems, Next.js Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
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
