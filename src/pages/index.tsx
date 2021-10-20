import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Picture from '@components/Picture'
import Footer from '@components/Footer'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Next.js boiler Template</title>
      </Head>

      <section>
        <Link href="/sample-page">
          <a>Sample link</a>
        </Link>

        <div>
          <Picture
            path="/assets/images/sample_picture"
            fileName="sample_picture"
            alt="Sample picture"
            // Optionaly you can include sizes
            // sizes="(max-width: 470px) 100vw, (max-width: 706px) 50vw, (max-width: 942px) 33.3vw, (max-width: 1178px) 25vw, (max-width: 1414px) 20vw, (max-width: 1650px) 16.6vw, (max-width: 1886px) 14.2vw, 12.5vw"
          />
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Home
