import React, { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Card from './Card'

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
        <Card
          projectName={'BiteBuddy'}
          projectSubtitle={'Food ordering app'}
          title={
            ' BiteBuddy is a responsive and user-friendly food ordering web application'
          }
          text={
            'Implemented state management using Redux for efficient handling of dynamic data such as menu items, user cart, and order details.'
          }
        />
      </div>
    </>
  )
}

export default Portfolio 