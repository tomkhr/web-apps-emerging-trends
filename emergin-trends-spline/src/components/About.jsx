import React from 'react'
import '../index.css';

function About({ hideAbout }) {
  return (
    <div
      className='aboutDiv'
      style={{
        opacity: hideAbout ? 0 : 1,
        display: hideAbout ? 'none' : 'flex',
        transition: 'opacity 0.3s ease'
      }}
    >
      <h1>What is Atomic Design?</h1>
      <p style={{ maxWidth: '60ch', marginInline: '2rem' }}>
        Atomic Design is a methodology created by Brad Frost for building design systems in a structured and consistent way. It breaks interfaces down into smaller, reusable parts that combine to form more complex components.
      </p>
    </div>
  )
}

export default About
