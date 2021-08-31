import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'

import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'

import useFoc from 'hooks/useFoc'
import useFindFoc from 'hooks/useFindFoc'

const Container = styled.div`

  margin-bottom: 55px;

  .box{
    padding: 34px;
    border: 1px solid #aeaeae;
    border-radius: 5px;
    margin-bottom: 21px;

    .input{
      margin-bottom: 13px;
    }

  }

  .table{

    th,td{
      padding: 8px;
      text-align: left;
    }

    th{
      border-bottom: 1px solid #aeaeae;
    }

  }
`

export default function NgitungFoc() {

  const {
    foc,
    shaftGr,
    pointGr,
    onShaftGrChange,
    onpointGrChange
  } = useFoc()

  const {
    arrowGr,
    onArrowGrChange,
    focPair
  } = useFindFoc()

  // kickstart

  return <>
    <Head>
      <title>Ngitung FOC</title>
    </Head>
    <Container>

      <div className="title">
        <Link href="/"><a>&lt; home</a></Link>
        <h1>Ngitung FOC</h1>
      </div>

      <div className="box">

        <h3>Kasus Pertama</h3>
        <p>Saya punya shaft beratnya sekian... Kalo pake point sekian gram, FOC nya berapa?</p>

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

      <div className="box">

        <h3>Kasus Kedua</h3>
        <p>Saya pengen punya arrow total sekian gram, untuk dapet FOC yang saya mau, berat point dan shaft berapa?</p>

        <TextField
          value={arrowGr}
          onChange={onArrowGrChange}
          inputProps={{
            type: 'number',
            step: '0.01'
          }}
          classes={{root: 'input'}}
          fullWidth={true}
          variant="outlined"
          helperText={"dalam gram"}
          label="Berat arrow total" />

        <div className="result">
          <h3>Estimasi FOC menurut kombinasi shaft+point: {focPair ? '' : 'ngga tau'}</h3>
          { focPair && focPair.length ? <table className="table">
            <thead>
              <tr>
                <th>Shaft (gr)</th>
                <th>Point (gr)</th>
                <th>FOC %</th>
              </tr>
            </thead>
            <tbody>
              {focPair.map(v => {

                return <tr key={`${JSON.stringify(v)}`}>
                  <td>{v.shaft}</td>
                  <td>{v.point}</td>
                  <td>{v.foc}</td>
                </tr>

              })}
            </tbody>
          </table> : null}
        </div>

      </div>

    </Container>
  </>

}
