import React from 'react'
import styles, { layout } from '../styles'
import { whyMe } from '../constants'

const WhyMe = () => {
  const cardStyle = {
    heading:`
        font-poppins 
        text-slate-600 
        font-semibold 
        xs:text-[48px] 
        text-[40px] 
        xs:leading-[76px] 
        leading-[66px] 
        lg:text-left
        text-center
        lg:min-w-[200px]
        my-10
        lg:my-0
    `,
    cardContainer: `${styles.flexCenter} lg:justify-between flex-wrap flex-col md:flex-row`,
    cardBox: `
        shadow-neu-outer
        relative
        w-[320px]
        h-[440px]
        rounded-lg
        m-3

    `,
    card: `
        absolute
        top-5
        left-5
        right-5
        bottom-5
        shadow-neu-inner
        rounded-lg
        ${styles.flexCenter}
        transition-all
        hover:-translate-y-8
        hover:shadow-neu-hover
        hover:bg-gradient-to-br hover:from-[#b95ce4] hover:to-[#4f29cd]
        group
    `,
    content: `p-5 text-center`,
    cardNumber: `
        absolute 
        top-[20px]
        right-[30px]
        text-5xl
        text-slate-200
        transition-all 
        font-bold
        z-10
        group-hover:text-white   
    `,
    cardTitle: `
        text-2xl
        font-bold
        text-slate-500
        z-20
        transition-all
        group-hover:text-slate-200
    `,
    cardText: `
        text-lg
        text-slate-500
        z-20
        transition-all
        group-hover:text-slate-300

    `
  }
  return (
    <section className={`flex flex-col lg:flex-row lg:items-start `}>
        <h2 className={`${cardStyle.heading}`}>Why Hire Me</h2>
        <div className={`${cardStyle.cardContainer}`}>
            {whyMe.map((item) => (
                <div key={item.id} className={`${cardStyle.cardBox}`}>
                    <div className={`${cardStyle.card}`}>
                        <div className={`${cardStyle.content}`}>
                            <h2 className={`${cardStyle.cardNumber}`}>{item.id}</h2>
                            <h3 className={`${cardStyle.cardTitle}`}>{item.heading}</h3>
                            <p className={`${cardStyle.cardText}`}>{item.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default WhyMe