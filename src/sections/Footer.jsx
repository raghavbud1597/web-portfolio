import React from 'react'
import styles, { layout } from '../styles'
import { socialMedia } from '../constants'

const Footer = () => {
  let date = new Date()
  let year = date.getFullYear()
  return (
    <footer className={`${layout.sectionReverse} justify-between`}>
      <p className='text-sm text-slate-400'>
        &copy; {year} Raghav Budhiraja
      </p>
      
      <div className={`${styles.flexCenter}`}>
        {socialMedia.map((item) => (
          <a
            key={item.id}
            href={item.url}
            target='_blank'
            rel='noreferrer'
            className='mr-4'
          >
            <img
              src={item.icon}
              alt={item.id}
              className='h-6 fill-slate-400'
            />
          </a>
        ))}
      </div>
    </footer>
  )
}

export default Footer