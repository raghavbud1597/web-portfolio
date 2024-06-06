import { quality } from '../constants'
import SkillTag from './components/SkillTag'
import styles from '../styles'

const Qualities = () => {
  
  return (
    <div>
      <h1 className={`${styles.heading2}`}>{quality.heading}</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-10 m-6'>
        {quality.skills.map((item) => (
          <SkillTag key={item.id} id={item.id} title={item.title} description={item.description}/>
        ))}
      </div>
      
    </div>
  )
}

export default Qualities