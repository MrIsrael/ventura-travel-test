import React, { Fragment, useContext, useEffect } from 'react'
import { TestContext } from '../../context/TestState'

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

      </Fragment>
    )
  }

  return null
}

export default TripsList
