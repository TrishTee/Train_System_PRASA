import React from 'react';
import axios from 'axios';
import './trips.css';

export const Trips = () => {

    axios.get("http://localhost:5100/api/getTrips").then((res)=>{
console.log(res)
    })

  return (
    <div>T</div>
  )
}
