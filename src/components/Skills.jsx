import React from 'react'
import { skills } from '../constants'

const Skills = () => {
  return (
    <section id="skills" className="flex">
     {skills.map(skill => (
        <div key={skill.id}>
          <h1>{skill.title}</h1>
        </div>
      ))}
     </section>   
  )
}

export default Skills