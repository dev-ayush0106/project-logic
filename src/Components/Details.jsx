import React from 'react'
import { useParams } from 'react-router'

const Details = () => {

    const data=useParams();
  return (
    <div>
      Booking Details {data.id}
    </div>
  )
}

export default Details
