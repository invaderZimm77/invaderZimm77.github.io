import React from "react";
import "./PrjCard.css";

export default function SShinePCard() {
  return (
    <div className="project-card">
      <h4 className="project-title">Sunshine Smoothies</h4>
      <div className="SShine-thumbnail-container">
        <img
          src="/SSmoothiesWireframeThumb.png"
          alt="Image Missing. These Smoothies I've been drunk"
          className="pCard-thumbnail"
        />
      </div>
      <div className="project-description">
        Sunshine Smoothies is an e-commerce application that lets users shop for
        smoothies, create their own smoothie, and edit smoothies. Smoothies are
        stored in a database. Users can see the smoothies they create as well as
        the smoothies created by others. The store also has a default selection
        of smoothies. If a user is signed in they’ll have the ability to create
        or edit smoothies. This project was developed as group collaboration.{" "}
      </div>
      <div className="project-links">
        <a href="https://github.com/invaderZimm77/Project-3">
          Sunshine Smoothies - GitHub
        </a>
      </div>
      <div className="project-links">
        <a href="https://sunshine-smoothies.netlify.app/">
          Sunshine Smoothies - Deployed site
        </a>
      </div>
    </div>
  );
}
