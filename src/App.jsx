import { useState, useRef, useEffect } from 'react'
import './App.css'
import Column from './components/Column'
import { motion, useTransform, useScroll } from 'framer-motion'
import Lenis from '@studio-freight/lenis'
import useDimension from './hooks/useDimension'

function App() {

  const images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.jpg",
    "11.jpg",
    "12.jpg"
  ]

  const gallery = useRef(null)
  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ['start end', 'end start']
  })

  const headingRef = useRef(null);
  const { scrollYProgress: headingScroll } = useScroll({
    target: headingRef,
    offset: ['start end', 'end start']
  });
  const xHeading = useTransform(headingScroll, [0, 1], ['50vw', '30vw']);

  const { height } = useDimension()
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.25])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1])
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3])

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <main className="main">
      <div className="spacer">
        <h1 className='main-heading'>cinema & pop culture website with parallax</h1>
        <p>Scroll down</p>
      </div>


      <div className="gallery">
        <div ref={gallery} className='galleryWrapper'>
          <Column images={[images[0], images[1], images[2]]} y={y} />
          <Column images={[images[3], images[4], images[5]]} y={y2} />
          <Column images={[images[6], images[7], images[8]]} y={y3} />
          <Column images={[images[11], images[10], images[9]]} y={y4} />
        </div>
      </div>

      <div className='spacer2'>
        <img src="./public/project3.avif" alt="pic3" />
        <motion.h1
          className='main-heading'
          ref={headingRef}
          style={{ x: xHeading }}
        >
          Music and Art
        </motion.h1>
      </div>

      <div className="spacer2">
       
        <video src="./public/video.mp4" autoPlay muted loop playsInline>
           
          </video>
      </div>

      <div className="spacer">
        <h1>Thank You for Coming!</h1>

       
      </div>
          
      
    </main>
  )
}

export default App
