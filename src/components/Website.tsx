"use client"

/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles, { layout } from '@/app/style'
import Link from 'next/link'
import { Button } from '.'
import { delayVariantsx, containerVariants, imageVariants } from '../utils/motion'
import { motion } from 'framer-motion'

const Website = () => {
    return (
        <motion.section
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2  }}
            className={layout.sectionReverse}>
            <motion.div
            variants={imageVariants(0.3, "left")}
            className={layout.sectionImgReverse}>
                <img
                    src="/assets/websitedesign.png"
                    alt="websitedesign"
                    className="w-[100%] h-[100%] relative z-[5]"
                />
            </motion.div>

            <div className={layout.sectionInfo}>
                <motion.h2
                    variants={delayVariantsx(0.2, "right")}
                    className={`${styles.heading2} text-transparent bg-clip-text bg-gradient-to-r from-cyan-800 to-cyan-300`}>
                    Website Develpoment
                </motion.h2>
                <motion.p
                    variants={delayVariantsx(0.4, "right")}
                    className={`${styles.paragraph} max-w-[480px]`}>
                    Discover Webpal for tailored websites, e-commerce, web apps, SEO, and more. We elevate your online presence with expertise and innovation. Elevate your brand with us today.
                </motion.p>
                <motion.div
                    variants={delayVariantsx(0.6, "right")}
                >
                    <Link href={'/Website'}>
                        <Button styles="mt-10" text="Learn More" />
                    </Link>
                </motion.div>

            </div>
        </motion.section>
    )
}

export default Website