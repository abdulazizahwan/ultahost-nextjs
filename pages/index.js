import React from 'react';
import Head from 'next/head';
import Favicon from '../components/Favicon';

export default () => (
    <div className="root">
        <Head>
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Next.js on Ultahost</title>
            <Favicon />
        </Head>
        <style jsx>{`
      .root {
        font-family: sans-serif;
        margin: 8vh 4vw 0;
      }
      @media (min-width: 600px) {
        .root {
          margin-left: 21vw;
          margin-right: 21vw;
        }
      }
    `}</style>

        <img src="/img/nextjs-logo.png" style={{ width: '10rem' }} alt="Next.js logo" />
        <h1 style={{ fontSize: '8vw' }}>Next.js on Ultahost</h1>

        <p>Deploy <a href="https://nextjs.org/">Next.js</a> universal web apps on <a href="https://ultahost.com/">Ultahost VPS Server</a>.</p>

        <p>This <strong>demo deployment on Ultahost</strong> is from the repo <a href="https://github.com/abdulazizahwan/ultahost-nextjs">abdulazizahwan/ultahost-nextjs</a>.</p>

    </div>
)
