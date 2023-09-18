'use client'

/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Website, App, DigitalMarketing, Domain, Chatbot, Erp, CloudComputing, Message } from './index'
import styles from '@/app/style'
import { motion } from 'framer-motion';
import { letterVariants, lettercontainerVariants } from '../utils/motion'

const Services = () => {
    const text = "What Services Do We Provide?";

    const letters = text.split(" ");

    return (
        <div id="service">
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
            <Website />
            <App />
            <DigitalMarketing />
            <Domain />
            <CloudComputing />
            <Chatbot />
            <Erp />
            <Message />
        </div>
    )
}

export default Services