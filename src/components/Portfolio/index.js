import React, { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

function Portfolio() {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  })

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'Projects'.split('')}
            idx={15}
          />
        </h1>

        <div class="wrap animate pop">
          <div class="overlay">
            <div class="overlay-content animate slide-left delay-2">
              <h1 class="pop-heading">BiteBuddy</h1>
              <p
                class="animate slide-left pop delay-5"
                style={{
                  color: 'white',
                   marginBottom: '6rem',
                  marginLeft: '8px',
                  fontSize: '17px',
                }}
              >
                Food ordering app
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
            <p>
              BiteBuddy is a responsive and user-friendly food ordering web
              application
            </p>
            <p>
              Implemented state management using Redux for efficient handling of
              dynamic data such as menu items, user cart, and order details.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Portfolio
