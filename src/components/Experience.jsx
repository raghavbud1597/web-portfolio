import React, { useEffect } from 'react'

const Experience = () => {

  useEffect(() => {
    for(let i = 0; i < 550; i++) {
      let box = document.createElement('span');
      let container = document.getElementById('container');
      container ? container.appendChild(box) : null;
    }
  
    let cursor = document.getElementById('cursor');
    window.onmousemove = (e) => {
      let x = e.clientX;
      let y = e.clientY;
      cursor.style.left = x + 'px';
      cursor.style.top = y + 'px';
    
    }
  }, [])

  
  return (
    <div className='overflow-hidden relative'>
      <div id="container"></div>
      <div id="cursor"></div>
      Experience
    </div>
  )
}

export default Experience