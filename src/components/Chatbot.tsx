"use client"

/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles, { layout } from '@/app/style'
import Link from 'next/link'
import { Button } from '.'
import { delayVariantsx, containerVariants, imageVariants } from '../utils/motion'
import { motion } from 'framer-motion'

const Chatbot = () => {
    return (
        <motion.section
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className={layout.section}>
            <div className={layout.sectionInfo}>
                <motion.h2
                    variants={delayVariantsx(0.2, "left")}
                    className={`${styles.heading2} text-transparent bg-clip-text bg-gradient-to-r from-cyan-800 to-cyan-300`}>
                    Chat Bot (AI)
                </motion.h2>
                <motion.p
                    variants={delayVariantsx(0.4, "left")}
                    className={`${styles.paragraph} max-w-[480px]`}>
                    WebPal’s Chatbot AI enhances customer engagement. Our AI-powered chatbots provide personalized interactions, answering queries and streamlining support. Elevate user experiences and boost efficiency with WebPal Chatbot AI.
                </motion.p>
                <motion.div
                    variants={delayVariantsx(0.6, "left")}
                >
                    <Link href={'/Chatbot'}>
                        <Button styles="mt-10" text="Learn More" />
                    </Link>
                </motion.div>
            </div>

            <motion.div
                variants={imageVariants(0.3, "right")}
                className={layout.sectionImg}>
                <img
                    src="/assets/chatbotai.png"
                    alt="Chatbot"
                    className="w-[100%] h-[100%] relative z-[5]"
                />
            </motion.div>
        </motion.section>
    )
}

export default Chatbot