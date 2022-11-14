import React from "react";
import "./foot.css";

export default function FootBox() {
  return (
    <div className="foot-box">
      <div className="callToAction">
        Please reach out if you have any questions or you would like to collaborate.
      </div>
      <div className="email-link">
        <a href="mailto:tbclaycamp@gmail.com">tbclaycamp@gmail.com</a>
      </div>
      <div className="SocNet">
        <a className="smIcons" href="https://github.com/invaderZimm77">
          <img
            src="/Octocat.png"
            alt="Github Icon Missing"
            className="smIcons-img"
          />
        </a>
        <a
          className="smIcons"
          href="https://www.linkedin.com/in/terraclaycamp/"
        >
          <img
            src="/hd-linkedinlogo.png"
            alt="LinkedIn"
            className="smIcons-img"
          />
        </a>
      </div>
      <div className="toTheTop">
        <a href="#top">
          Return To The Top
        </a>
      </div>
    </div>
  );
}
