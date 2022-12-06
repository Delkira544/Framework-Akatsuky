import React from 'react'
import Image from './fotos'
import '../../css/welcome.css'

import webpay from '../../images/icons/logowebpay.png'
import face from '../../images/icons/fb_chiquito.png'
import twitter from '../../images/icons/twitter_chiquito.png'
import git from '../../images/icons/github_chiquito.png'
import insta from '../../images/icons/insta_chiquito.png'


const Footer = () => {

    var espacio = <div className='colorinvisible px-4'></div>

  return (
    <>
        <div className='colornose flex py-3 footer relative '>
        
            <div className='webpay'><Image url={webpay} /></div>
            {espacio}  
            <div><a href="https://facebook.com"><Image url={face} /></a></div>
            {espacio}
            <div><a href="https://twitter.com"><Image url={twitter} /></a></div>
            {espacio}
            <div><a href="https://github.com"><Image url={git} /></a></div>
            {espacio}
            
            <div><a href="https://instagram.com"><Image url={insta} /></a></div>
            {espacio}
        </div>
    </>
  )
}

export default Footer