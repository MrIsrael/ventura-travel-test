import React, { Fragment } from 'react'

const Home = ({ changeScreen }) => {
  let nextScreen = changeScreen

  return (
    <Fragment>
  
      <div className='ed-grid s-grid-1 s-border s-radius s-95 m-90 s-to-center s-pxy-2 s-main-center' style={{ background: 'white' }}>
        <h3 className='s-center'>Ventura Travel code test / Israel Uribe</h3>
        <h4 className='s-center'>Press button to retrieve travel packages data</h4>
        <button className='t-button s-pxy-1 m-pxy-2' onClick={() => { nextScreen(1) }}>
          <strong>Get data from external source</strong>
        </button>
      </div>

    </Fragment>
  )
}

export default Home
