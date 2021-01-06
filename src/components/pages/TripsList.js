import React, { Fragment, useContext, useEffect } from 'react'
import { TestContext } from '../../context/TestState'
import TripItem from '../reusable/TripItem'

const TripsList = () => {
  const { travelData, flagDataAlreadyRetrieved, getTravelData } = useContext(TestContext)

  useEffect(() => {
    document.body.scrollTop = 0                // For Safari
    document.documentElement.scrollTop = 0     // For Chrome, Firefox, IE and Opera
    getTravelData()
    // eslint-disable-next-line
  }, [])

  if (flagDataAlreadyRetrieved) {
    return (
      <Fragment>
        <h1 className='s-center'>List of available trips:</h1>
        <div>
          {travelData.map((item, index) => <TripItem item={item} key={index} />)}
        </div>
      </Fragment>
    )
  }

  return null
}

export default TripsList
