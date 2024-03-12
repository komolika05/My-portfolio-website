import React from 'react'
import './Card.scss'

function Card({ projectName, projectSubtitle, title, text }) {
  return (
    <div class="wrap animate pop">
      <div class="overlay">
        <div class="overlay-content animate slide-left delay-2">
          <h1 class="pop-heading">{projectName}</h1>
          <p
            class="animate slide-left pop delay-5"
            style={{
              color: 'white',
              marginBottom: '6rem',
              marginLeft: '2px',
              fontSize: '17px',
            }}
          >
            {projectSubtitle}
          </p>
        </div>
        <div class="image-content animate slide delay-5"></div>
        <div class="dots animate">
          <div class="dot animate slide-up delay-6"></div>
          <div class="dot animate slide-up delay-7"></div>
          <div class="dot animate slide-up delay-8"></div>
        </div>
      </div>
      <div class="text-para">
        <p>{title}</p>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Card
