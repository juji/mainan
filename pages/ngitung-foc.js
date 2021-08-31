import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'

import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'

import useFoc from 'hooks/useFoc'

const Container = styled.div`

  .box{
    padding: 34px;
    border: 1px solid #aeaeae;
    border-radius: 5px;

    .input{
      margin-bottom: 13px;
    }

  }
`

export default function NgitungFoc() {

  const {
    foc,
    shaftGr,
    pointGr,
    arrowIn,
    onShaftGrChange,
    onArrowInChange,
    onpointGrChange
  } = useFoc()

  // kickstart

  return <>
    <Head>
      <title>Ngitung FOC</title>
    </Head>
    <Container>

      <div className="title">
        <Link href="/ngitung-foc"><a>&lt; home</a></Link>
        <h1>Ngitung FOC</h1>
      </div>

      <div className="box">

        <TextField
          value={shaftGr}
          onChange={onShaftGrChange}
          inputProps={{
            type: 'number',
            step: '0.01'
          }}
          classes={{root: 'input'}}
          fullWidth={true}
          variant="outlined"
          helperText={"tanpa poin, dalam gram"}
          label="Berat shaft" />

        <TextField
          value={pointGr}
          onChange={onpointGrChange}
          inputProps={{
            type: 'number',
            step: '0.01'
          }}
          classes={{root: 'input'}}
          fullWidth={true}
          variant="outlined"
          helperText={"dalam gram"}
          label="Berat point" />

        <div className="result">
          <h3>Estimasi FOC: {foc ? `${foc}%` : 'ngga tau'}</h3>
        </div>

      </div>

    </Container>
  </>

}
