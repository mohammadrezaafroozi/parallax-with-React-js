import React from 'react'
import { motion } from 'framer-motion'

export default function Column({ images, y }) {
  return (
    <motion.div className='column' style={{y}}>
        {images.map((src, i) => {
            return <div key={i} className='imageContainer' >
                <img src={src} alt="img"/>
            </div>
        })}
    </motion.div>
  )
}
