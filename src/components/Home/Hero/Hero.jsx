import React from 'react';
import { useState } from 'react';
import { Link, Element as scroll} from 'react-scroll'
import { Parallax } from 'react-scroll-parallax';

import dog from '../../../assets/dog.png';
import dog_bark from '../../../assets/dog-bark.png';
import dog_hover from '../../../assets/dog-hover.gif';
import './Hero.css';
import { NavLink } from 'react-router-dom';

function Hero() {

  const [isHovering, setIsHovering] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const OnClick = () => {
    setIsClicked(true);
    setTimeout(() => {setIsClicked(false)}, 200);
  }

  return (
    <Parallax speed={-10}>
      <div className='hero'>
        <img onClick={OnClick} onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} src={isClicked ? dog_bark : (isHovering ? dog_hover : dog)} className='hero-dog' alt="dog" />
        <h1 className='hero-title'>hey, i'm <b className='hero-title-name'>han xheng</b></h1>
        <h3 className='hero-link'><b><NavLink to='/projects'>view my works -{'>'}</NavLink></b></h3>
        <h3 className='hero-link'><b><NavLink to='/contact'>contact -{'>'}</NavLink></b></h3>
      </div>
    </Parallax>
  )
}

export default Hero