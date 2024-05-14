import React, { useEffect } from 'react'
import styles from '../styles'
import { experience } from '../constants'

const Experience = () => {

  
  
  return (
    <section >
      <h2 className={`${styles.heading2}`}>Education & Experience</h2>
      <div className='w-full'>
        {experience.map((item) => (
          <div key={item.id} className='flex items-center justify-start  p-4 border-b-2 border-slate-300'>
            <p className='text-left w-[250px]'>{item.year}</p>
            <div className='w-full md:flex justify-between'>
              <h3 className='text-lg'>{item.title}</h3>
              <p className='text-sm'>{item.company}</p>
            </div>
          </div>
        ))}
      </div>
      
    </section>
  )
}

export default Experience