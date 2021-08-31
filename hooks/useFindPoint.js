import { useState, useEffect } from 'react'
import { calc as calcFoc } from './useFoc'

const point = [
  2,3,4,5,6,7,8,9,10
]

const findFocPair = ( shaftGr ) => {

  return point.map(p => {

    return {

      point: p,
      foc: calcFoc( shaftGr, p )

    }

  })

}

export default function useFindFoc(){

  const [ shaftGr, setShaftGr ] = useState()
  const [ focPair, setFocPair ] = useState()

  const onShaftGrChange = e => setShaftGr(e.target.value*1)

  useEffect(() => {

    if(shaftGr)
      setFocPair( findFocPair( shaftGr ) )
    else setFocPair( null )

  },[ shaftGr ])

  return {
    shaftGr,
    onShaftGrChange,
    focPair
  }

}
