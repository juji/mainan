import { useState, useEffect } from 'react'

function calculateCOG( arrowIn, pointGr, shaftGr ){
  return (
    (shaftGr * (arrowIn/2)) / (pointGr+shaftGr)
  )
}

function calculateFOC( arrowIn, cog ){
  return Math.round(100000 * ((arrowIn/2) - cog) / arrowIn) / 1000
}

function calculate( arrowIn, pointGr, shaftGr ){
  return calculateFOC(
    arrowIn,
    calculateCOG( arrowIn, pointGr, shaftGr )
  )
}

// simplification of all the above
export const calc = (shaftGr, pointGr) =>  {
  const focFraction = 0.5 * (1 - ((shaftGr) / (pointGr+shaftGr)))

  // rounding to 3 digits
  return Math.round( 100000 * focFraction )  / 1000
}

export default function useFoc(){


  const [ shaftGr, setShaftGr ] = useState()
  const [ pointGr, setPointGr ] = useState()
  const [ arrowIn, setArrowIn ] = useState()
  const [ foc, setFoc ] = useState()

  const onShaftGrChange = e => setShaftGr(e.target.value*1)
  const onArrowInChange = e => setArrowIn(e.target.value*1)
  const onpointGrChange = e => setPointGr(e.target.value*1)

  useEffect(() => {
    if(shaftGr && pointGr)
      setFoc( calc( shaftGr, pointGr ) )

  },[ pointGr, shaftGr ])

  return {
    foc,
    shaftGr,
    pointGr,
    arrowIn,
    onShaftGrChange,
    onArrowInChange,
    onpointGrChange
  }

}
