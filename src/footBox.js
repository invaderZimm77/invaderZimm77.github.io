import React from 'react'
import './foot.css'

export default function FootBox() {
	return (
    <div className="Foot-Box">
      <a href="mailto:tbclaycamp@gmail.com">tbclaycamp@gmail.com</a>

      <a className="smIcons" href="https://github.com/invaderZimm77">
        <img src="/Octocat.png" alt="Github Icon Missing" className="smIcons" />
      </a>
      <a className="smIcons" href="https://www.linkedin.com/in/terraclaycamp/">
        <img src="/hd-linkedinlogo.png" className="smIcons" />
      </a>
    </div>
  );
}
