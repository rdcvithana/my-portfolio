import { sliderProps } from "@/utility/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
const Testimonials = () => {
  return (
    <div className="row">
      <div className="col-lg-12">
        {/* title */}
        <h5 className="trm-mb-40 trm-title-with-divider">
          Role As a <span data-number={3} />
        </h5>

        {/* testimonials slider */}
        <Swiper
          {...sliderProps.testimonials}
          className="swiper-container trm-testimonials-slider trm-scroll-animation"
          data-scroll=""
          data-scroll-offset={40}
        >
          <SwiperSlide className="swiper-slide">
            <div
              className="trm-testimonial-card"
              data-swiper-parallax=""
              data-swiper-parallax-scale=".8"
              data-swiper-parallax-opacity={0}
              data-swiper-parallax-duration={800}
            >
              <div className="trm-testimonial-author">
                <img src="/img/testimonials/1.jpg" alt="Client" />
                <h6 className="trm-mb-15">Devops Engineer</h6>
              </div>
              <div className="trm-testimonial-text">
                <p>
                As a DevOps engineer, I streamline and automate software delivery
                 processes by designing CI/CD pipelines, automating infrastructure
                  with Docker and Kubernetes, managing cloud platforms like AWS, and ensuring
                   system performance and security. I collaborate with developers to ensure scalability,
                    reliability, and security across development, testing, and production environments.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div
              className="trm-testimonial-card"
              data-swiper-parallax=""
              data-swiper-parallax-scale=".8"
              data-swiper-parallax-opacity={0}
              data-swiper-parallax-duration={800}
            >
              <div className="trm-testimonial-author">
                <img src="/img/testimonials/2.jpg" alt="Client" />
                <h6 className="trm-mb-15">Web Developer</h6>
                
              </div>
              <div className="trm-testimonial-text">
                <p>
                As a web developer, I specialize in creating dynamic and responsive websites 
                using technologies like HTML, CSS, JavaScript, and frameworks such as React and
                 Node.js. My responsibilities include designing user interfaces, developing front-end 
                 and back-end components, optimizing site performance, and ensuring cross-browser compatibility.
                  I work closely with clients to understand their needs and deliver customized solutions that enhance
                   user experience and functionality.
                </p>
              </div>
            </div>
          </SwiperSlide>
          
          <div className="trm-slider-navigation">
            <div className="trm-testimonials-slider-prev trm-btn trm-btn-circle">
              <i className="fas fa-arrow-left" />
            </div>
            <div className="trm-testimonials-slider-next trm-btn trm-btn-circle">
              <i className="fas fa-arrow-right" />
            </div>
          </div>
        </Swiper>
        {/* testimonials slider end */}
      </div>
    </div>
  );
};
export default Testimonials;
