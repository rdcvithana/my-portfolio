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
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Dimuthu Vithana",
  description: "As a dedicated DevOps Engineer, I continuously pursue end-to-end mastery and scalable system design. Embracing challenges as growth opportunities, I stay prepared for new complexities, turning them into chances for innovation and success.",
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="google-site-verification" content="NgQh67UVZ-v6TiYmdULRa980neneFveuLm4grG31NQE" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content="DevOps, DevOps Engineer, Scalable Systems, Next.js Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#131819" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta property="og:site_name" content="Dimuthu Vithana" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content="https://rdcvithana.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="URL_TO_IMAGE" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Dimuthu Vithana",
            "url": "https://rdcvithana.com/",
            "sameAs": [
              "https://www.linkedin.com/in/dimuthu-vithana-318626245?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
              "https://github.com/rdcvithana",
              "https://www.facebook.com/share/3hMGsSrJrxdHBjQk/?mibextid=qi2Omg",
              "https://www.instagram.com/dimuthu_vithana?igsh=NDhrZThlaHJianFu",
              "https://x.com/_DIMUTHU_?t=0yr6uiVD2IA1y02V3Etjkg&s=09" 
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
          <Analytics />
        </body>
      </State>
    </html>
  );
}
