import React, {useState, useEffect} from 'react';
const axios = require('axios').default;

// async function getСurrency() {
//   try {
//     const response = await axios.get('http://data.fixer.io/api/latest?access_key=12fac3db66ad1a7ca7c7f960cd117a3c');
//     console.log(response);
//   } catch (error) {
//     console.error(error);
//   }
// }

// kingfitnesstest@gmail.com
// BN)&*$ORU4nt9n3et84uht45y

// oleg gribov
// pushkina 45
// 65016
// odessa

function Currencies(props) {

  const currencyInfo = async () => {
    {
      try {
        // ПОКАЗЫВАЕТ КУРС ТОЛЬКО К ЕВРО
        const response = await axios.get('http://data.fixer.io/api/latest?access_key=12fac3db66ad1a7ca7c7f960cd117a3c&symbols=USD');
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    }
  }

  return (
    <>
      <div className="currencies">
        {currencyInfo()}
      </div>
    </>
  )
}

export default Currencies;