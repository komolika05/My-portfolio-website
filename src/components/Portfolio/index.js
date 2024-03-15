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
        <div className="card-container">
          <Card
            projectName={'BiteBuddy'}
            projectSubtitle={'Food ordering app'}
            title={
              ' BiteBuddy is a user-friendly food ordering web application'
            }
            text={
              'Implemented state management using Redux for efficient handling of dynamic data such as menu items, user cart, and order details.'
            }
            projectLink={
              'https://food-ordering-frontend-bite-buddy.vercel.app/'
            }
          />
          <Card
            projectName={'My-Playlist'}
            projectSubtitle={'React MP3 Audio Player'}
            title={
              'A player where user can upload their MP3 files and create their own playlist.'
            }
            text={
              'Managed localStorage of the Player, so that after reloading the page user can still access their created playlist.'
            }
            projectLink={'https://main--reactmp3player.netlify.app/'}
          />
          <Card
            projectName={'SpaceVue'}
            projectSubtitle={'Space Mission data dashboard'}
            title={
              ' SpaceVue is a platform where user can find all the details of past space mission with pie charts, graphs'
            }
            text={'User can even sort the data according to the filters.'}
            projectLink={'https://space-vue-nu.vercel.app/'}
          />
        </div>
      </div>
    </>
  )
}

export default Portfolio
