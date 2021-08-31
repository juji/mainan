import Head from 'next/head'
import Link from 'next/link'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Mainan untuk umum</title>
        <meta name="description" content="Yagitudeh" />
      </Head>

        <h1>Ini mainan...</h1>
        <h2>hanya mainan</h2>

        <hr />

        <div className="menu">
          <h3>Menu</h3>
          <p><Link href="/ngitung-foc"><a>Ngitung FOC</a></Link></p>
          <p><Link href="/ngitung-gpp"><a>Ngitung GPP</a></Link></p>
        </div>

    </div>
  )
}
