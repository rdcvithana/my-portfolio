"use client";
import { context } from "@/context/context";
import TrueManLayout from "@/layout/TrueManLayout";
import { useContext, useEffect } from "react";
const Index = () => {
  const { banner_image_function, page_info_function } = useContext(context);
  useEffect(() => {
    banner_image_function("/img/banner2.gif");
    page_info_function("My Skills<br>and History", "resume", "resume");
  }, []);
  return (
    <TrueManLayout>
      {/* skills */}
      <div className="row">
        <div className="col-lg-6">
          <div
            className="trm-skill-card trm-scroll-animation trm-active-el"
            data-scroll
            data-scroll-offset={40}
          >
            <div className="trm-mb-40">
              <div className="trm-skill-header">
                <h6 className="trm-mb-15">Sinhala</h6>
                <span className="trm-label trm-label-light">Native</span>
              </div>
              <div className="trm-progressbar-frame">
                <div className="trm-progressbar p100" />
              </div>
            </div>
            <div>
              <div className="trm-skill-header">
                <h6 className="trm-mb-15">English</h6>
                <span className="trm-label trm-label-light">90%</span>
              </div>
              <div className="trm-progressbar-frame">
                <div className="trm-progressbar p90" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div
            className="trm-skill-card trm-scroll-animation trm-active-el"
            data-scroll
            data-scroll-offset={40}
          >
            <div className="trm-mb-40">
              <div className="trm-skill-header">
                <h6 className="trm-mb-15">Tamil</h6>
                <span className="trm-label trm-label-light">30%</span>
              </div>
              <div className="trm-progressbar-frame">
                <div className="trm-progressbar p30" />
              </div>
            </div>
            <div>
              <div className="trm-skill-header">
                <h6 className="trm-mb-15">Other</h6>
                <span className="trm-label trm-label-light">00%</span>
              </div>
              <div className="trm-progressbar-frame">
                <div className="trm-progressbar p00" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* skills end */}
      {/* skills */}
      <div className="row">
        <div className="col-lg-6">
          <div
            className="trm-skill-card trm-scroll-animation trm-active-el"
            data-scroll
            data-scroll-offset={40}
          >
            <div className="trm-mb-40">
              <div className="trm-skill-header">
                <h6 className="trm-mb-15">Amazon Web Service</h6>
                <span className="trm-label trm-label-light">70%</span>
              </div>
              <div className="trm-progressbar-frame">
                <div className="trm-progressbar p70" />
              </div>
            </div>
            <div className="trm-mb-40">
              <div className="trm-skill-header">
                <h6 className="trm-mb-15">Microsoft Azure Service</h6>
                <span className="trm-label trm-label-light">30%</span>
              </div>
              <div className="trm-progressbar-frame">
                <div className="trm-progressbar p30" />
              </div>
            </div>
            <div className="trm-mb-40">
              <div className="trm-skill-header">
                <h6 className="trm-mb-15">Linux Environment</h6>
                <span className="trm-label trm-label-light">60%</span>
              </div>
              <div className="trm-progressbar-frame">
                <div className="trm-progressbar p60" />
              </div>
            </div>
            <div className="trm-mb-40">
              <div className="trm-skill-header">
                <h6 className="trm-mb-15">Network Administrator</h6>
                <span className="trm-label trm-label-light">50%</span>
              </div>
              <div className="trm-progressbar-frame">
                <div className="trm-progressbar p50" />
              </div>
            </div>
            <div className="trm-mb-40">
              <div className="trm-skill-header">
                <h6 className="trm-mb-15">Infrastructure as Code</h6>
                <span className="trm-label trm-label-light">40%</span>
              </div>
              <div className="trm-progressbar-frame">
                <div className="trm-progressbar p40" />
              </div>
            </div>
            <div className="trm-mb-40">
              <div className="trm-skill-header">
                <h6 className="trm-mb-15">Automation and scripting</h6>
                <span className="trm-label trm-label-light">60%</span>
              </div>
              <div className="trm-progressbar-frame">
                <div className="trm-progressbar p60" />
              </div>
            </div>
            <div className="trm-mb-40">
              <div className="trm-skill-header">
                <h6 className="trm-mb-15">CICD</h6>
                <span className="trm-label trm-label-light">70%</span>
              </div>
              <div className="trm-progressbar-frame">
                <div className="trm-progressbar p70" />
              </div>
            </div>
            <div>
              <div className="trm-skill-header">
                <h6 className="trm-mb-15">Git</h6>
                <span className="trm-label trm-label-light">80%</span>
              </div>
              <div className="trm-progressbar-frame">
                <div className="trm-progressbar p80" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div
            className="trm-skill-card trm-scroll-animation trm-active-el"
            data-scroll
            data-scroll-offset={40}
          >
            <div className="trm-mb-40">
              <div className="trm-skill-header">
                <h6 className="trm-mb-15">jQuery</h6>
                <span className="trm-label trm-label-light">60%</span>
              </div>
              <div className="trm-progressbar-frame">
                <div className="trm-progressbar p60" />
              </div>
            </div>
            <div className="trm-mb-40">
              <div className="trm-skill-header">
                <h6 className="trm-mb-15">Docker</h6>
                <span className="trm-label trm-label-light">80%</span>
              </div>
              <div className="trm-progressbar-frame">
                <div className="trm-progressbar p70" />
              </div>
            </div>
            <div className="trm-mb-40">
              <div className="trm-skill-header">
                <h6 className="trm-mb-15">Nginx</h6>
                <span className="trm-label trm-label-light">40%</span>
              </div>
              <div className="trm-progressbar-frame">
                <div className="trm-progressbar p40" />
              </div>
            </div>
            <div className="trm-mb-40">
              <div className="trm-skill-header">
                <h6 className="trm-mb-15">PHP</h6>
                <span className="trm-label trm-label-light">70%</span>
              </div>
              <div className="trm-progressbar-frame">
                <div className="trm-progressbar p70" />
              </div>
            </div>
            <div className="trm-mb-40">
              <div className="trm-skill-header">
                <h6 className="trm-mb-15">Python</h6>
                <span className="trm-label trm-label-light">40%</span>
              </div>
              <div className="trm-progressbar-frame">
                <div className="trm-progressbar p40" />
              </div>
            </div>
            <div className="trm-mb-40">
              <div className="trm-skill-header">
                <h6 className="trm-mb-15">SEO</h6>
                <span className="trm-label trm-label-light">60%</span>
              </div>
              <div className="trm-progressbar-frame">
                <div className="trm-progressbar p20" />
              </div>
            </div>
            <div className="trm-mb-40">
              <div className="trm-skill-header">
                <h6 className="trm-mb-15">React js</h6>
                <span className="trm-label trm-label-light">70%</span>
              </div>
              <div className="trm-progressbar-frame">
                <div className="trm-progressbar p70" />
              </div>
            </div>
            <div>
              <div className="trm-skill-header">
                <h6 className="trm-mb-15">Css</h6>
                <span className="trm-label trm-label-light">60%</span>
              </div>
              <div className="trm-progressbar-frame">
                <div className="trm-progressbar p60" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* skills end */}
      {/* knowledge */}
      <div className="row">
        <div className="col-lg-12">
          {/* title */}
          <h5 className="trm-mb-40 trm-title-with-divider">
            Tools <span data-number={2} />
          </h5>
        </div>
        <div className="col-lg-12">
          <div className="trm-card">
            <div className="row">
              <div className="col-lg-4">
                <ul className="trm-list">
                  <li>Postmen</li>
                  <li>Mongo DB</li>
                  <li>Visual studio</li>
                </ul>
              </div>
              <div className="col-lg-4">
                <ul className="trm-list">
                  <li>Tailwind</li>
                  <li>Bootstrap</li>
                  <li>Jenkins</li>
                </ul>
              </div>
              <div className="col-lg-4">
                <ul className="trm-list">
                  <li>Photoshop</li>
                  <li>Adobe XD</li>
                  <li>Figma</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* history */}
      <div className="row">
        <div className="col-lg-12">
          {/* title */}
          <h5 className="trm-mb-40 trm-title-with-divider">
            History <span data-number={3} />
          </h5>
        </div>
        <div className="col-lg-6">
          {/* timeline */}
          <div className="trm-timeline">
            <div
              className="trm-timeline-item trm-scroll-animation trm-active-el"
              data-scroll
              data-scroll-offset={40}
            >
              <div className="trm-timeline-mark-light" />
              <div className="trm-timeline-mark" />
              <div className="trm-a trm-timeline-content">
                <div className="trm-card-header">
                  <div className="trm-left-side">
                    <h6 className="trm-mb-15">University OF Jaffna</h6>
                    <div className="trm-text-sm trm-accent-color trm-mb-15">
                      <i>jan 2020 - jan 2024</i>
                    </div>
                  </div>
                </div>
                <div className="trm-mb-20">
                I am a student at the University of Jaffna, 
                Faculty of Technology, pursuing a Bachelor's degree 
                in Information Communication Technology. My studies focus 
                on a range of topics including software development, networking and cloud computing providing me with a solid 
                pundation in both theoretical and practical aspects of the field.
                </div>
                <a
                  data-fancybox
                  href="files/diploma.jpg"
                  className="trm-label trm-label-color"
                >
                  Degree <i className="fas fa-arrow-right" />
                </a>
                
              </div>
            </div>
          </div>
          {/* timeline end */}
        </div>
        <div className="col-lg-6">
          <div className="trm-timeline">
            <div
              className="trm-timeline-item trm-scroll-animation trm-active-el"
              data-scroll
              data-scroll-offset={40}
            >
              <div className="trm-timeline-mark-light" />
              <div className="trm-timeline-mark" />
              <div className="trm-a trm-timeline-content">
                <div className="trm-card-header">
                  <div className="trm-left-side">
                    <h6 className="trm-mb-15">Codeolima Pvt Ltd</h6>
                    <div className="trm-text-sm trm-accent-color trm-mb-15">
                      <i>Mar 2024 - Present</i>
                    </div>
                  </div>
                </div>
                <div>
                I am currently an intern DevOps engineer at Codeolima Pvt Ltd.
                </div>
              </div>
            </div>
            <div
              className="trm-timeline-item trm-scroll-animation trm-active-el"
              data-scroll
              data-scroll-offset={40}
            >
              <div className="trm-timeline-mark-light" />
              <div className="trm-timeline-mark" />
              <div className="trm-a trm-timeline-content">
                <div className="trm-card-header">
                  <div className="trm-left-side">
                    <h6 className="trm-mb-15">Frelancer</h6>
                    <div className="trm-text-sm trm-accent-color trm-mb-15">
                    </div>
                  </div>
                </div>
                <div>
                Freelancer Web Developer in creating intuitive and accessible websites. With experience in both frontend and backend technologies.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* history end */}
    </TrueManLayout>
  );
};
export default Index;
