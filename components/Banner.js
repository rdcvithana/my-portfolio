import { context } from "@/context/context";
import Link from "next/link";
import { useContext } from "react";


const Banner = ({ centerTitle }) => {
  const { banner_type, banner_image, page_info } = useContext(context);
  const { pageTitle, subTitle, pageName, scroll_down } = page_info;

  switch (banner_type) {
    case "image":
      return <Image banner_image={banner_image} />;

    default:
      return (
        <PageBanner
          banner_image={banner_image}
          pageTitle={pageTitle}
          subTitle={subTitle}
          pageName={pageName}
          scroll_down={scroll_down}
          centerTitle={centerTitle}
        />
      );
  }
};
export default Banner;

const Image = ({ banner_image }) => {
  return (
    <div
      className="trm-banner"
      data-scroll=""
      data-scroll-direction="vertical"
      data-scroll-speed={-1}
    >
      {/* banner cover */}
      <img
        src={banner_image}
        alt="banner"
        className="trm-banner-cover"
        data-scroll=""
        data-scroll-direction="vertical"
        data-scroll-speed={-4}
      />
      {/* banner cover end */}

      {/* banner content */}
      <div className="trm-banner-content trm-overlay">
        <div
          className="container"
          data-scroll=""
          data-scroll-direction="vertical"
          data-scroll-speed={1}
        >
          <div className="row">
            <div className="col-lg-4" />
            <div className="col-lg-8">
              {/* banner title */}
              <div className="trm-banner-text">
                <div className="trm-label trm-mb-20">Hi my new friend!</div>
                <h3 className="trm-mb-30">
                Let's explore the world of 
                  <br />
                  technology together.
                </h3>
                <a
                  
                  legacyBehavior href="contact"
                  className="trm-btn trm-btn-border"
                >
                  HIRE ME <i className="fas fa-play" />
                </a>
              </div>
              {/* banner title end */}
              {/* scroll hint */}
              <a
                href="#about-triger"
                data-scroll-to="#about-triger"
                data-scroll-offset={-130}
                className="trm-scroll-hint-frame"
              >
                <div className="trm-scroll-hint" />
                <span className="trm-label">Scroll down</span>
              </a>
              {/* scroll hint end */}
            </div>
          </div>
        </div>
      </div>
      {/* banner content end */}
    </div>
  );
};

const PageBanner = ({
  pageTitle,
  subTitle,
  pageName,
  banner_image,
  scroll_down,
  centerTitle,
}) => {
  return (
    <div
      className="trm-banner"
      data-scroll
      data-scroll-direction="vertical"
      data-scroll-speed={-1}
    >
      {/* banner cover */}
      <img
        src={banner_image}
        alt="banner"
        className="trm-banner-cover"
        data-scroll
        data-scroll-direction="vertical"
        data-scroll-speed={-4}
      />
      {/* banner cover end */}

      {/* banner content */}
      <div className="trm-banner-content trm-overlay">
        <div
          className="container"
          data-scroll
          data-scroll-direction="vertical"
          data-scroll-speed={1}
        >
          <div className="row">
            {!centerTitle && <div className="col-lg-4"></div>}

            <div className={!centerTitle ? "col-lg-8" : "col-lg-12"}>
              {/* banner title */}
              <div
                className={`trm-banner-text ${
                  centerTitle && "trm-text-center"
                }`}
              >
                <div className="trm-label trm-mb-20">{subTitle}</div>
                <h1
                  className="trm-mb-30"
                  dangerouslySetInnerHTML={{ __html: pageTitle }}
                ></h1>
                <ul className="trm-breadcrumbs trm-label">
                  <li>
                    <Link legacyBehavior href="/">
                      <a className="trm-anima-link">Home</a>
                    </Link>
                  </li>
                  <li>
                    <span>{pageName}</span>
                  </li>
                </ul>
              </div>
              {/* banner title end */}
              {scroll_down && (
                <a
                  href="#about-triger"
                  data-scroll-to="#about-triger"
                  data-scroll-offset={-130}
                  className="trm-scroll-hint-frame"
                >
                  <div className="trm-scroll-hint" />
                  <span className="trm-label">Scroll down</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* banner content end */}
    </div>
  );
};

