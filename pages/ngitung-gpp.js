import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'

import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'

import useFindArrow from 'hooks/useFindArrow'
import useFindGppPair from 'hooks/useFindGppPair'

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

export default function NgitungGpp() {

  const {
    bowLbs,
    arrowGr,
    gpp,
    onGppChange,
    onBowLbsChange
  } = useFindArrow()

  const {
    bowLbs: bowLbsPair,
    gppPair,
    onBowLbsChange: onBowLbsChangePair
  } = useFindGppPair()


  // kickstart

  return <>
    <Head>
      <title>Ngitung GPP</title>
    </Head>
    <Container>

      <div className="title">
        <Link href="/"><a>&lt; home</a></Link>
        <h1>Ngitung GPP</h1>
      </div>

      <div className="box">

        <h3>Kasus Pertama</h3>
        <p>Dengan Busur <i>sekian</i> lbs, untuk gpp <i>sekian</i>, arrow nya berapa gram?</p>

        <TextField
          value={bowLbs}
          onChange={onBowLbsChange}
          inputProps={{
            type: 'number',
            step: '0.1'
          }}
          classes={{root: 'input'}}
          fullWidth={true}
          variant="outlined"
          helperText={"dalam lbs"}
          label="Berat Tarikan" />

        <TextField
          value={gpp}
          onChange={onGppChange}
          inputProps={{
            type: 'number',
            step: '0.1'
          }}
          classes={{root: 'input'}}
          fullWidth={true}
          variant="outlined"
          label="GPP" />

        <div className="result">
          <h3>Gramasi Arrow: {arrowGr ? `${arrowGr} gr` : 'ngga tau'}</h3>
        </div>

      </div>

      <div className="box">

        <h3>Kasus Kedua</h3>
        <p>
          Dengan busur <i>sekian</i> lbs, berapa berat arrow yang saya butuh?
        </p>

        <TextField
          value={bowLbsPair}
          onChange={onBowLbsChangePair}
          inputProps={{
            type: 'number',
            step: '0.1'
          }}
          classes={{root: 'input'}}
          fullWidth={true}
          variant="outlined"
          helperText={"dalam lbs"}
          label="Berat Tarikan" />

        <div className="result">
          <h3>Estimasi gramasi arrow menurut GPP: {gppPair ? '' : 'ngga tau'}</h3>
          { gppPair && gppPair.length ? <table className="table">
            <thead>
              <tr>
                <th>Arrow (gr)</th>
                <th>GPP</th>
              </tr>
            </thead>
            <tbody>
              {gppPair.map(v => {

                return <tr key={`${JSON.stringify(v)}`}>
                  <td>{v.arrow}</td>
                  <td>{v.gpp}</td>
                </tr>

              })}
            </tbody>
          </table> : null}
        </div>

      </div>

    </Container>
  </>

}
