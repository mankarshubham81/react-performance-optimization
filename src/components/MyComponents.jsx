import React from 'react'
// import MyComponents from './MyComponents';
import {data }from './sampleData'

const MyComponents = (props) => {

  const totalEntries = data.length;
  console.log("data lienght is ", totalEntries);

  window.addEventListener("load", () => console.log("Loaded"));

  return (
    <div>
        <h1>This is MyComponents</h1>
        <h3>Total Ertries {totalEntries}</h3>
        <h3>{props.count}</h3>

    </div>
  )
}

export default MyComponents