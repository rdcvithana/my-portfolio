import { typing } from "@/utility/typing";
import { useEffect } from "react";

const SideBar = () => {
  useEffect(() => {
    typing();
  }, []);

  return (
    <div className="col-lg-4">
      {/* main card */}
      <div className="trm-main-card-frame trm-sidebar">
        <div
          className="trm-main-card"
          data-scroll=""
          data-scroll-repeat=""
          data-scroll-sticky=""
          data-scroll-target="#content"
          data-scroll-offset={60}
        >
          {/* card header */}
          <div className="trm-mc-header">
            <div className="trm-avatar-frame trm-mb-20">
              <img className="trm-avatar" src="img/avatar.jpg" alt="Avatar" />
              <div className="trm-dot" />
            </div>
            <h2 className="trm-name trm-mb-15">Dimuthu Vithana</h2>
            <div className="trm-label">
              I`m{" "}
              <span className="trm-typed-text">
                {/* Words for rotation: js/main.js line 34 */}
              </span>
            </div>
          </div>
          {/* card header end */}
          <div className="trm-divider trm-mb-30 trm-mt-40" />
          {/* sidebar social */}
          <div className="trm-social">
            <a href="https://www.linkedin.com/in/dimuthu-vithana-318626245?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
              <i className="fab fa-linkedin-in" />
            </a>
            <a href="https://www.instagram.com/dimuthu_vithana?igsh=NDhrZThlaHJianFu" target="_blank">
              <i className="fab fa-instagram" />
            </a>
            <a href="https://www.facebook.com/share/3hMGsSrJrxdHBjQk/?mibextid=qi2Omg" target="_blank">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="https://x.com/_DIMUTHU_?t=0yr6uiVD2IA1y02V3Etjkg&s=09" target="_blank">
              <i className="fab fa-twitter" />
            </a>
          </div>

          {/* sidebar social end */}
          <div className="trm-divider trm-mb-40 trm-mt-40" />
          {/* info */}
          <ul className="trm-table trm-mb-20">
            {/* country */}
            <li>
              <div className="trm-label">Residence:</div>
              <div className="trm-label trm-label-light">Sri Lanka</div>
            </li>
            {/* city */}
            <li>
              <div className="trm-label">City:</div>
              <div className="trm-label trm-label-light">Kaluthara</div>
            </li>
            {/* age */}
            <li>
              <div className="trm-label">Age:</div>
              <div className="trm-label trm-label-light">26</div>
            </li>
          </ul>
          {/* info end */}
          <div className="trm-divider trm-mb-40 trm-mt-40" />
          {/* action button */}
          <div className="text-center">
            <a data-fancybox="" href="#trm-order" className="trm-btn">
              Contact me <i className="far fa-envelope" />
            </a>
          </div>
          {/* action button end */}
        </div>
      </div>
      {/* main card end */}
    </div>
  );
};
export default SideBar;
