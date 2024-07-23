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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Molestias officia, debitis minus repellat saepe? Deleniti
                  blanditiis optio inventore nulla dicta fugiat culpa quis unde,
                  sequi debitis ex ab! Sapiente vitae rem tempore sunt! Aperiam
                  eveniet mollitia, quae architecto nostrum.
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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Molestias officia, debitis minus repellat saepe? Deleniti
                  blanditiis optio inventore nulla dicta fugiat culpa quis unde,
                  sequi debitis ex ab! Sapiente vitae rem tempore sunt! Aperiam
                  eveniet mollitia, quae architecto nostrum.
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
