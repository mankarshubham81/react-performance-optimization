import React, { useMemo } from 'react'
// import MyComponents from './MyComponents';
import { data }from './sampleData'

function getSampleDataLength(arr){
  console.log("Re Calculating");
  let count = 0;
  for(let i = 0; i < arr.length; i++) count++
  return count;
}

const MyComponents = (props) => {

  const totalEntries =  useMemo(() => getSampleDataLength(data), []);
  // const totalEntries = getSampleDataLength(data);
  // console.log("data lienght is ", totalEntries);

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