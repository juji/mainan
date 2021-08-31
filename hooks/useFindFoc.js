import { useState, useEffect } from 'react'
import { calc as calcFoc } from './useFoc'

const point = [
  2,3,4,5,6,7,8,9,10
]

const findFocPair = ( arrowGr ) => {

  return point.map(p => {

    return {

      shaft: arrowGr - p,
      point: p,
      foc: calcFoc( arrowGr - p, p )

    }

  })

}

export default function useFindFoc(){

  const [ arrowGr, setArrowGr ] = useState()
  const [ focPair, setFocPair ] = useState()

  const onArrowGrChange = e => setArrowGr(e.target.value*1)

  useEffect(() => {

    if(arrowGr)
      setFocPair( findFocPair( arrowGr ) )
    else setFocPair( null )

  },[ arrowGr ])

  return {
    arrowGr,
    onArrowGrChange,
    focPair
  }

}
