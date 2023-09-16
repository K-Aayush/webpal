import React from 'react'
import styles from '@/app/style'
import { feedback } from '@/constants'
import { FeedbackCard } from './index'

const Testimonials = () => {
  return (
    <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
        <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative">
            <h1 className={`${styles.heading2}`}>
                What People are saying about us
            </h1>
        </div>

        <div className="flex flex-wrap sm:justify-start justify-center w-full relative">
            {feedback.map((card) => (
                <FeedbackCard key={card.id} {...card} />
            ))}
        </div>
    </section>
  )
}

export default Testimonials