import React from 'react';
import axios from 'axios';
import './stations.css';
export const Stations = () => {

  axios.get("http://localhost:5100/api/getStations").then((res) => {
    console.log(res)
  })

  return (
    <div class="container">

    </div>
  )
}
