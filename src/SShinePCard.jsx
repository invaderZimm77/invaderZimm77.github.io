import React from 'react'
import './PrjCard.css'

export default function SShinePCard() {
	return (
    <div>
      <div>
        <a href="https://github.com/invaderZimm77/Project-3">
          Sunshine Smoothies - GitHub
        </a>
      </div>
      <div>
        <a
          href="https://sunshine-smoothies.netlify.app/"
          className="project-links"
        >
          Sunshine Smoothies - Deployed site
        </a>
        <div className='project-description'>
          Sunshine Smoothies is an e-commerce application that lets users shop
          for smoothies, create their own smoothie, and edit smoothies.
          Smoothies are stored in a database. Users can see the smoothies they
          create as well as the smoothies created by others. The store also has
          a default selection of smoothies. If a user is signed in they’ll have
          the ability to create or edit smoothies.
        </div>
      </div>
    </div>
  );
}
