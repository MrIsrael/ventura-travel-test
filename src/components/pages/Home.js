import React, { Fragment, useContext, useEffect } from 'react'
import { TestContext } from '../../context/TestState'

const Home = () => {
  const { travelData } = useContext(TestContext)

  useEffect(() => {
    document.body.scrollTop = 0                // For Safari
    document.documentElement.scrollTop = 0     // For Chrome, Firefox, IE and Opera
    // eslint-disable-next-line
  }, [])

  return (
    <Fragment>

    </Fragment>
  )
}

export default Home
