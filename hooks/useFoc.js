import { useState, useEffect } from 'react'

const GRAVITY = 980.665
const INCHTOCM = 2.54

function toCm( inch ){ return inch*INCHTOCM }

function calculateCOG( arrowIn, pointGr, shaftGr ){
  return (
    (shaftGr * (arrowIn/2)) / (pointGr+shaftGr)
  )
}

function calculateFOC( arrowIn, cog ){
  const l = arrowIn
  return Math.round(100000 * ((l/2) - cog) / l) / 1000
}

function calculate( arrowIn, pointGr, shaftGr ){
  return calculateFOC(
    arrowIn,
    calculateCOG( arrowIn, pointGr, shaftGr )
  )
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
    if(shaftGr && pointGr && arrowIn)
      setFoc( calculate( arrowIn, pointGr, shaftGr ) )
  },[ arrowIn, pointGr, shaftGr ])

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
