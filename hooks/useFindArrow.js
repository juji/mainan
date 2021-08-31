import { useState, useEffect } from 'react'

const GRAIN = 15.432

export default function useFindArrow(){


  const [ bowLbs, setBowLbs ] = useState()
  const [ arrowGr, setArrowGr ] = useState()
  const [ gpp, setGpp ] = useState()
  const onGppChange = e => setGpp(e.target.value*1)
  const onBowLbsChange = e => setBowLbs(e.target.value*1)

  useEffect(() => {

    if(bowLbs && gpp)
      setArrowGr(
        Math.round(
          100 * (bowLbs * gpp) / GRAIN
        ) / 100
      )
    else setArrowGr(null)

  },[ bowLbs, gpp ])

  return {
    bowLbs,
    arrowGr,
    gpp,
    onGppChange,
    onBowLbsChange
  }

}
