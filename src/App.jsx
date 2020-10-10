import React from 'react'
import { Parallax } from 'react-scroll-parallax';
import Feed from "react-instagram-authless-feed"
import HeaderImage from './assets/img/header_img.jpg'
import './App.scss'

const App = () => (
  <div>
    <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
      <header />
    </Parallax>
    <h1>
      <a href="#top">
        Szeged 1000 arca
      </a>
      </h1>
    <div id="top" className="sticky-nav">
      Szeged 1000 arca
    </div>
    <main>
    <Feed userName="szeged1000arca" className="Feed" classNameLoading="Loading"/>
  </main>
  </div>
)

export default App
