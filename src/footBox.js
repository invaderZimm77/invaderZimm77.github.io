import React from 'react'
import './foot.css'

export default function FootBox() {
	return (
    <div className="foot-box">
      <a href="mailto:tbclaycamp@gmail.com" className="smIcons">
        tbclaycamp@gmail.com
      </a>

      <a className="smIcons" href="https://github.com/invaderZimm77">
        <img src="/Octocat.png" alt="Github Icon Missing" className="smIcons-img" />
      </a>
      <a className="smIcons" href="https://www.linkedin.com/in/terraclaycamp/">
        <img src="/hd-linkedinlogo.png" className="smIcons-img" />
      </a>
      <a href="/TBClaycampRes.pdf">Resume</a>
    </div>
  );
}
