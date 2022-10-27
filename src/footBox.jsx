import React from "react";
import "./foot.css";

export default function FootBox() {
  return (
    <div className="foot-box">
      <div className="email-link">
        <a href="mailto:tbclaycamp@gmail.com">tbclaycamp@gmail.com</a>
      </div>
      <div className="SocNet">
        <a className="smIcons" href="https://github.com/invaderZimm77">
          <image
            src="/Octocat.png"
            alt="Github Icon Missing"
            className="smIcons-img"
          />
        </a>
        <a className="smIcons"
          href="https://www.linkedin.com/in/terraclaycamp/">
          <image
            src="/hd-linkedinlogo.png"
            alt="LinkedIn"
            className="smIcons-img"
          />
        </a>
      </div>
    </div>
  );
}
