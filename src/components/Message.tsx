"use client"

/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles, { layout } from '@/app/style'
import Link from 'next/link'
import { Button } from '.'
import { delayVariantsx, containerVariants, imageVariants } from '../utils/motion'
import { motion } from 'framer-motion'

const Message = () => {
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
                    Bulk Messaging Service
                </motion.h2>
                <motion.p
                    variants={delayVariantsx(0.4, "left")}
                    className={`${styles.paragraph} max-w-[480px]`}>
                    WebPal’s Bulk Messaging Service ensures effective communication. Reach your audience with ease, delivering important updates, promotions, or announcements. Elevate your messaging strategy with WebPal’s reliable and efficient service.
                </motion.p>
                <motion.div
                    variants={delayVariantsx(0.6, "left")}
                >
                    <Link href="/Message">
                        <Button styles="mt-10" text="Learn More" />
                    </Link>
                </motion.div>
            </div>

            <motion.div
                variants={imageVariants(0.3, "right")}
                className={layout.sectionImg}>
                <img
                    src="/assets/bulk messaging logo.png"
                    alt="mobileappdevelopment"
                    className="w-[100%] h-[100%] relative z-[5]"
                />
            </motion.div>
        </motion.section>
    )
}

export default Message