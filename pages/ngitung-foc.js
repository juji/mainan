import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'

import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'

import useFoc from 'hooks/useFoc'
import useFindFoc from 'hooks/useFindFoc'
import useFindPoint from 'hooks/useFindPoint'

const Container = styled.div`

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

  const {
    shaftGr: shaftGrPoint,
    onShaftGrChange: onShaftGrChangePoint,
    focPair: focPairPoint
  } = useFindPoint()

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
        <p>Dengan berat shaft dan berat point <i>sekian</i>, FOC nya berapa?</p>

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
        <p>
          Saya pengen punya arrow dengan berat total <i>sekian</i> gram.
          Untuk dapet FOC yang saya mau, berapa berat point dan shaft?
        </p>

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

      <div className="box">

        <h3>Kasus Ketiga</h3>
        <p>Saya punya shaft <i>sekian</i> gram. Berapa gram point yang saya butuh?</p>

        <TextField
          value={shaftGrPoint}
          onChange={onShaftGrChangePoint}
          inputProps={{
            type: 'number',
            step: '0.01'
          }}
          classes={{root: 'input'}}
          fullWidth={true}
          variant="outlined"
          helperText={"tanpa poin, dalam gram"}
          label="Berat shaft" />

        <div className="result">
          <h3>Estimasi FOC menurut point: {focPairPoint ? `` : 'ngga tau'}</h3>
          { focPairPoint && focPairPoint.length ? <table className="table">
            <thead>
              <tr>
                <th>Point (gr)</th>
                <th>FOC %</th>
              </tr>
            </thead>
            <tbody>
              {focPairPoint.map(v => {

                return <tr key={`${JSON.stringify(v)}`}>
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
