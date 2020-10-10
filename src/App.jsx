import React from 'react'
import { Parallax } from 'react-scroll-parallax'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import AZsHome from './assets/img/azs_home.png'
import Feed from 'react-instagram-authless-feed'
import './App.scss'

const App = () => (
  <div className="page">
    <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
      <header />
    </Parallax>
    <h1>
      <a href="#top">
        Szeged 1000 arca
      </a>
      </h1>
    <div id="top" className="sticky-nav">
      <div className="title">
        <h2>
          Szeged 1000 arca
        </h2>
      </div>
      <div className="social-actions">
        <a href="https://www.instagram.com/szeged1000arca/" target="_blank">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.facebook.com/szeged1000arca" target="_blank">
          <FontAwesomeIcon icon={faFacebookSquare} />
        </a>
        <a className="azs-link" href="http://www.andraszsolt.com/" target="_blank">
          <img src={AZsHome} alt="András Zsolt photography"/>
        </a>
      </div>
    </div>
    <main>
    <Feed userName="szeged1000arca" className="Feed" classNameLoading="Loading"/>
  </main>
  </div>
)

export default App
