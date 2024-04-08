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
            projectName={'Electrify-It'}
            projectSubtitle={'Generate report dashboard'}
            title={'User can generate reports and filter out data'}
            text={
              'The data is comming from the backend via REST APIs and so it is easy to fliter and sort the reports. '
            }
            projectLink={'http://13.71.41.129/reports'}
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
          <Card
            projectName={'SharePal'}
            projectSubtitle={'My order section'}
            title={
              'My order section where use can track the progress of its orders, used Material UI for search bar'
            }
            text={
              'User can even raise the ticket if there is any issue with the order.'
            }
            projectLink={'https://sharepal-my-orders.vercel.app/'}
          />
        </div>
      </div>
    </>
  )
}

export default Portfolio
