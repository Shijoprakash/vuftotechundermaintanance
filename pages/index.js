import React from 'react'
import Head from 'next/head'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Vuftotech</title>
          <meta
            name="description"
            content="VuftoTech, Push your Business to the next level."
          />
          <meta property="og:title" content="Vuftotech" />
          <meta
            property="og:description"
            content="We push your Business to the next level."
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/f15b804d-83df-4b17-8e5f-a2fedac4a61c/2d42ab71-1956-4ce5-9613-8ddd48d3a1a0?org_if_sml=1"
          />
        </Head>
        <div className="navbar-container">
          <div className="max-width">
            <div className="home-logo">
              <img
                alt="image"
                src="/playground_assets/vuftotech%20black-200h.png"
                className="home-image"
              />
            </div>
            <div className="home-links">
              <span className="home-text navbar-Link">tech@vufto.com</span>
            </div>
            <div className="home-burger-menu navbar-burger-menu">
              <svg viewBox="0 0 1024 1024" className="home-icon">
                <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="home-hero hero-container section-container">
          <div className="home-max-width1 max-width">
            <div className="home-content">
              <h1 className="home-title">
                <span>
                  Unlock the next generation User Technology
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text02">experience</span>
              </h1>
              <span className="home-description">
                Under maintenance we&apos;ll be back soon!
              </span>
            </div>
            <div className="home-image1">
              <img
                alt="image"
                src="https://images.unsplash.com/flagged/photo-1562502307-e796076a4982?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDM5fHxzaW5nYXBvcmV8ZW58MHx8fHwxNjY1OTI1NTI5&amp;ixlib=rb-1.2.1&amp;w=600"
                className="home-hero-image"
              />
              <img
                alt="image"
                src="/playground_assets/union-400w.png"
                className="home-graphic-top"
              />
              <img
                alt="image"
                src="/playground_assets/group%2018-1200w.png"
                className="home-image2"
              />
            </div>
          </div>
        </div>
        <div className="home-section section-container">
          <div className="home-max-width2 max-width">
            <div className="home-banner">
              <span className="home-text03 before-Heading">get started</span>
              <h1 className="home-text04">
                <span>Push your business to</span>
                <br></br>
                <span></span>
                <span></span>
                <span> the next level.</span>
              </h1>
              <span className="home-text10">
                We will be back , until then get in touch here!
              </span>
              <div className="home-btns">
                <a
                  href="mailto:tech@vufto.com?subject=Hi vuftotech"
                  className="home-link button button-transparent"
                >
                  Email
                </a>
                <a
                  href="tel:+14373709079"
                  className="home-link1 button button-gradient"
                >
                  Phone
                </a>
              </div>
            </div>
          </div>
        </div>
        <footer className="home-footer">
          <div className="home-container1">
            <span className="home-text11">
              <span>VuftoTech ©2022</span>
              <br className="home-text13"></br>
              <br></br>
              <span>Vuftotech, 22 Martin Rd, #03-01, Singapore 239058</span>
              <br className="home-text16"></br>
              <br></br>
              <span>+1 (437) 370-9079</span>
            </span>
          </div>
        </footer>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-logo {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-image {
            width: 20%;
            object-fit: cover;
            margin-right: 0px;
          }
          .home-links {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-text {
            color: var(--dl-color-scheme-green80);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-burger-menu {
            fill: #105749;
            width: 24px;
            height: 24px;
          }
          .home-hero {
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-max-width1 {
            align-items: center;
          }
          .home-content {
            flex: 0 0 auto;
            width: 45%;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .home-title {
            color: var(--dl-color-scheme-white);
            font-size: 52px;
            font-style: normal;
            margin-top: var(--dl-space-space-twounits);
            font-family: Urbanist;
            font-weight: 600;
            line-height: 1.2;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-text02 {
            color: var(--dl-color-scheme-lightgreen);
          }
          .home-description {
            color: var(--dl-color-scheme-white);
            font-size: 18px;
            line-height: 1.5;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .home-image1 {
            position: relative;
            padding-bottom: var(--dl-space-space-threeunits);
          }
          .home-hero-image {
            flex: 1;
            max-width: 550px;
            object-fit: cover;
            border-radius: 48px;
            border-top-left-radius: 0;
            border-top-right-radius: 0;
          }
          .home-graphic-top {
            top: 0px;
            right: -170px;
            width: 100%;
            height: 100%;
            position: absolute;
            max-width: 359px;
            max-height: 359px;
            object-fit: contain;
            object-position: center;
          }
          .home-image2 {
            right: -170px;
            bottom: 0px;
            position: absolute;
            object-fit: contain;
          }
          .home-section {
            padding-top: 0px;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-max-width2 {
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-banner {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-fourunits);
            margin-top: 20px;
            align-items: center;
            border-radius: 48px;
            flex-direction: column;
            background-size: cover;
            background-image: url('/playground_assets/group%2011-1200w.png');
          }
          .home-text03 {
            color: var(--dl-color-scheme-lightgreen);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text04 {
            color: var(--dl-color-scheme-white);
            font-size: 42px;
            font-style: normal;
            text-align: center;
            font-family: Urbanist;
            font-weight: 700;
            line-height: 1.25;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text10 {
            color: rgba(255, 255, 255, 0.6);
            text-align: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-btns {
            flex: 0 0 auto;
            display: flex;
            align-items: stretch;
            flex-direction: row;
          }
          .home-link {
            font-size: 16px;
            padding-top: 12px;
            margin-right: var(--dl-space-space-unit);
            padding-left: 24px;
            padding-right: 24px;
            padding-bottom: 12px;
            text-decoration: none;
          }
          .home-link1 {
            padding-top: 12px;
            margin-right: 0px;
            padding-left: 24px;
            padding-right: 24px;
            padding-bottom: 12px;
            text-decoration: none;
          }
          .home-footer {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .home-container1 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-text11 {
            text-align: center;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text13 {
            font-weight: 700;
          }
          .home-text16 {
            font-weight: 700;
          }
          @media (max-width: 991px) {
            .home-content {
              width: 50%;
              margin-right: var(--dl-space-space-unit);
            }
            .home-image1 {
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-hero-image {
              margin-bottom: 0px;
            }
            .home-max-width2 {
              flex-direction: column;
            }
            .home-footer {
              flex-direction: column;
            }
            .home-container1 {
              flex-wrap: wrap;
              margin-right: 0px;
            }
          }
          @media (max-width: 767px) {
            .home-image {
              width: var(--dl-size-size-xlarge);
            }
            .home-links {
              display: none;
            }
            .home-icon {
              fill: var(--dl-color-scheme-green100);
            }
            .home-max-width1 {
              flex-direction: column-reverse;
            }
            .home-content {
              width: 100%;
              margin-right: 0px;
            }
            .home-hero-image {
              margin-right: 0px;
            }
            .home-banner {
              padding: var(--dl-space-space-twounits);
            }
            .home-footer {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-container1 {
              width: 100%;
              justify-content: space-between;
            }
          }
          @media (max-width: 479px) {
            .home-image {
              width: var(--dl-size-size-xlarge);
            }
            .home-banner {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-footer {
              padding: var(--dl-space-space-unit);
            }
            .home-container1 {
              align-items: center;
              margin-right: 0px;
              justify-content: space-between;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
