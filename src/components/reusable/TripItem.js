import React from 'react'

const TripItem = ({ item }) => {

  const destination = item[0][1]
  const description = item[1][1]
  const price = parseInt(item[2][1])
  const photoURL = item[3][1]

  return (
    <div className='s-border s-radius ed-grid s-grid-2 rows-gap s-gap-1 s-pxy-1 s-cross-center'>

      <div className='s-rows-2 s-center s-ratio-2-2 img-container'>
        <img src={photoURL} alt={destination} />
      </div>

      <div className=''>
        <h4 className='s-mb-0'>{destination}</h4>
        <span>Price: USD${price.toLocaleString("en-US")}</span>
      </div>

      <div className=''>
        <p className='s-mb-0'>{description}</p>
      </div>

    </div>
  )
}

export default TripItem
