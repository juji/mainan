import { useState, useEffect } from 'react'

const GRAIN = 15.432

const gpp = [
  4,5,6,7,8,9,10,11,12,13,14,15,16,17
]

const findArrowGpp = ( lbs ) => {
  return gpp.map(p => {

    return {
      arrow: Math.round( 100 * (lbs*p) / GRAIN ) / 100,
      gpp: p
    }

  })
}

export default function useFindGppPair(){


  const [ bowLbs, setBowLbs ] = useState()
  const [ gppPair, setGppPair ] = useState()
  const onBowLbsChange = e => setBowLbs(e.target.value*1)

  useEffect(() => {

    if(bowLbs)
      setGppPair( findArrowGpp( bowLbs ) )
    else setGppPair(null)

  },[ bowLbs ])

  return {
    bowLbs,
    gppPair,
    onBowLbsChange
  }

}
