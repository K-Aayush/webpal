"use client"

import React from 'react'
import styles from '@/app/style'
import { feedback } from '@/constants'
import { FeedbackCard } from './index'
import { motion } from 'framer-motion';
import { letterVariants, lettercontainerVariants, containerVariants } from '../utils/motion'

const Testimonials = () => {
    const text = "What People are saying about us";

    const letters = text.split(" ");

    return (
        <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
            <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative">
                <motion.h2
                    className={`${styles.heading2} flex items-start justify-start mb-4`}
                    variants={lettercontainerVariants}
                    initial="hidden"
                    whileInView="show"
                >
                    {letters.map((letter, index) => (
                        <motion.span
                            key={index}
                            variants={letterVariants}
                            className="mr-[5px]"
                        >
                            {letter}
                        </motion.span>
                    ))}
                </motion.h2>
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                className="flex flex-wrap sm:justify-start justify-center w-full relative">
                {feedback.map((card) => (
                    <FeedbackCard key={card.id} {...card} />
                ))}
            </motion.div>
        </section>
    )
}

export default Testimonials