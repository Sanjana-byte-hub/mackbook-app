import React, { useEffect } from 'react'
import { useRef } from 'react'


const Hero = () => {
const videoRef = useRef();

useEffect(()=>{
    if(videoRef.current)videoRef.current.playbackRate = 2;
},[]);

  return (
   <section className="hero">
      <div>
        <h1>Macbook pro</h1>
        <img src="/title.png" alt="title" />
      </div>
      <video ref={videoRef} src="/videos/hero.mp4" autoPlay muted playsInline></video>
<div className='flex flex-col justify-center items-center'>
    <button type="button" className="text-white  px-6 py-2.5 bg-blue-600 rounded-full ">Buy</button>
<p>From $1599 or $133/mo for 12 months</p>
</div>
   </section>
  )
}

export default Hero